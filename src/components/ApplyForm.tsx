"use client";

import { useState } from "react";
import Stepper, { Step } from "./Stepper";

type Status = "idle" | "submitting" | "success" | "error";

type FieldKey = "businessName" | "businessType" | "currentLink" | "contact" | "goal";

type FieldConfig = {
  key: FieldKey;
  label: string;
  required: boolean;
};

const fields: FieldConfig[] = [
  { key: "businessName", label: "Business name", required: true },
  { key: "businessType", label: "Business type / industry", required: true },
  { key: "currentLink", label: "Current website or Instagram link (if any)", required: false },
  { key: "contact", label: "Best way to contact you (phone / WhatsApp / email)", required: true },
  {
    key: "goal",
    label: "What do you want customers to do when they find you online? (e.g. call, visit, order)",
    required: true,
  },
];

const initialValues: Record<FieldKey, string> = {
  businessName: "",
  businessType: "",
  currentLink: "",
  contact: "",
  goal: "",
};

export default function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState(initialValues);
  const [touchedStep, setTouchedStep] = useState<number | null>(null);

  function updateValue(key: FieldKey, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function submitApplication() {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  function validateStep(step: number) {
    const config = fields[step - 1];
    if (config.required && values[config.key].trim() === "") {
      setTouchedStep(step);
      return false;
    }
    return true;
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/20 bg-surface p-8 text-center shadow-lg shadow-black/30">
        <h3 className="font-serif text-xl font-semibold text-cream">
          Thanks — your application is in!
        </h3>
        <p className="mt-2 text-ink/75">
          I&apos;ll get back to you soon to talk next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-6 shadow-lg shadow-black/30 sm:p-8">
      <Stepper
        validateStep={validateStep}
        onStepChange={() => setTouchedStep(null)}
        onFinalStepCompleted={submitApplication}
        backButtonText="Back"
        nextButtonText="Next"
        completeButtonText={status === "submitting" ? "Sending..." : "Send my application"}
        nextButtonProps={{ disabled: status === "submitting" }}
      >
        {fields.map((f, i) => {
          const isInvalid = touchedStep === i + 1 && f.required && values[f.key].trim() === "";
          return (
            <Step key={f.key}>
              <label htmlFor={f.key} className="block text-base font-medium text-ink">
                {f.label}
                {!f.required && <span className="ml-1 text-ink/40">(optional)</span>}
              </label>
              <input
                id={f.key}
                name={f.key}
                type="text"
                value={values[f.key]}
                onChange={(e) => updateValue(f.key, e.target.value)}
                className={`mt-2 w-full rounded-lg border bg-black/20 px-4 py-3 text-base text-cream focus:outline-none ${
                  isInvalid ? "border-red-400" : "border-white/15 focus:border-accent"
                }`}
              />
              {isInvalid && <p className="mt-1.5 text-sm text-red-600">This field is required.</p>}
            </Step>
          );
        })}
      </Stepper>

      {status === "error" && <p className="mt-4 text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
}
