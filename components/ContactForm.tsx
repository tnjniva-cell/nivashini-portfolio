"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

type SubmissionState =
  | { status: "idle"; message: "" }
  | { status: "sending"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmission({ status: "sending", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Your message could not be sent.");
      }

      form.reset();
      setSubmission({
        status: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            className="form-input"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="form-input"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className="form-input resize-y"
          placeholder="What would you like to talk about?"
        />
      </div>
      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="button-primary disabled:cursor-not-allowed disabled:opacity-60"
          disabled={submission.status === "sending"}
        >
          {submission.status === "sending" ? (
            <>
              Sending <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              Send Message <ArrowRight size={16} aria-hidden="true" />
            </>
          )}
        </button>
        {submission.message && (
          <p
            role={submission.status === "error" ? "alert" : "status"}
            className={`text-sm ${
              submission.status === "error" ? "text-rose-300" : "text-emerald-300"
            }`}
          >
            {submission.message}
          </p>
        )}
      </div>
    </form>
  );
}
