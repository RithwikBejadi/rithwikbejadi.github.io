"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_mnwky88";
const EMAILJS_TEMPLATE_ID = "template_qsiktpo"; // Create this template in EmailJS dashboard
const EMAILJS_PUBLIC_KEY = "pRwGRIMfkdykzGBQA"; // Get from EmailJS Account > API Keys

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      console.log("EmailJS Response:", response);
      setStatus("success");
      setFormData({ name: "", email: "", title: "", message: "" });

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);
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
    <div className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-black/50 backdrop-blur-sm p-8 border border-neutral-800">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-2">
        Get in Touch
      </h2>
      <p className="mt-2 max-w-sm text-neutral-400 mb-8">
        Have a question or want to work together? Send me a message!
      </p>

      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            type="text"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="your.email@example.com"
            type="email"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="title">Subject</Label>
          <Input
            id="title"
            name="title"
            placeholder="Project inquiry"
            type="text"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            required
            rows={5}
            className="shadow-input flex w-full rounded-md border-none bg-zinc-800 px-3 py-2 text-sm text-white transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:ring-[2px] focus-visible:ring-neutral-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_#404040] resize-none"
          />
        </LabelInputContainer>

        {/* Status Messages */}
        {status === "success" && (
          <div className="text-emerald-400 text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Message sent successfully!
          </div>
        )}

        {status === "error" && (
          <div className="text-red-400 text-sm flex items-center gap-2">
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
          className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-zinc-900 to-zinc-900 font-medium text-white shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            "Send Message"
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
