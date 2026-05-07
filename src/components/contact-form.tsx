"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type ContactFormData = {
  name: string;
  email: string;
  title: string;
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const isConfigured = Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = EMAILJS_SERVICE_ID;
    const templateId = EMAILJS_TEMPLATE_ID;
    const publicKey = EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Add EmailJS environment variables to enable sending.",
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.title,
        message: formData.message,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      if (response.status !== 200) {
        throw new Error(`Email service returned status ${response.status}`);
      }

      setStatus("success");
      setFormData({ name: "", email: "", title: "", message: "" });

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: unknown) {
      setStatus("error");
      const errMsg =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      setErrorMessage(errMsg);

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
      <h2 className="font-heading mb-2 bg-gradient-to-r from-white via-indigo-200 to-sky-300 bg-clip-text text-3xl font-semibold text-transparent">
        Contact
      </h2>
      <p className="mb-8 mt-2 max-w-sm text-neutral-300">
        Reach out for collaboration, backend discussions, or project work.
      </p>
      {!isConfigured && (
        <p className="mb-6 rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-200">
          Contact form is currently in setup mode.
        </p>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            disabled={status === "sending"}
            autoComplete="name"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="your.email@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={status === "sending"}
            autoComplete="email"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="title">Topic</Label>
          <Input
            id="title"
            name="title"
            placeholder="Internship role / project"
            type="text"
            value={formData.title}
            onChange={handleChange}
            disabled={status === "sending"}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={status === "sending"}
            className="shadow-input flex w-full resize-none rounded-md border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-neutral-100 transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-indigo-400/70 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </LabelInputContainer>

        {/* Status Messages */}
        {status === "success" && (
          <div
            className="flex items-center gap-2 text-sm text-emerald-300"
            aria-live="polite"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Thanks, your message was sent.
          </div>
        )}

        {status === "error" && (
          <div
            className="flex items-center gap-2 text-sm text-red-300"
            aria-live="polite"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {errorMessage}
          </div>
        )}

        <button
          className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-r from-indigo-500 to-sky-500 font-medium text-white shadow-lg shadow-indigo-900/40 transition-all hover:shadow-xl hover:shadow-indigo-800/50 disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send"
          )}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
