import { NextResponse } from "next/server";

type ApplicationPayload = {
  businessName: string;
  businessType: string;
  currentLink: string;
  contact: string;
  goal: string;
};

export async function POST(request: Request) {
  let data: Partial<ApplicationPayload>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { businessName, businessType, contact, goal } = data;

  if (!businessName?.trim() || !businessType?.trim() || !contact?.trim() || !goal?.trim()) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  // TODO: wire up real delivery (e.g. Resend/Nodemailer SMTP) once on the VPS.
  console.log("New Founding Client application:", data);

  return NextResponse.json({ ok: true });
}
