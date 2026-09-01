import { Camera, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-center text-sm text-cream/70">
      <p className="flex flex-wrap items-center justify-center gap-4">
        <span>Prefer to message instead?</span>
        {/* TODO: replace with your real WhatsApp number / Instagram handle */}
        <a
          href="https://wa.me/61000000000"
          className="flex items-center gap-1.5 rounded-full bg-teal/20 px-3 py-1.5 font-medium text-cream transition hover:bg-teal/30"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href="https://instagram.com/yourhandle"
          className="flex items-center gap-1.5 rounded-full bg-teal/20 px-3 py-1.5 font-medium text-cream transition hover:bg-teal/30"
        >
          <Camera className="h-4 w-4" />
          Instagram
        </a>
      </p>
      <p className="mt-4 text-cream/50">
        © {new Date().getFullYear()} Recurved. Melbourne, Australia.
      </p>
    </footer>
  );
}
