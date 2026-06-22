"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "./Button";

type NewsletterFormProps = {
  ctaLabel: string;
  className?: string;
};

export function NewsletterForm({ ctaLabel, className = "" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 2400);
  };

  return (
    <form
      onSubmit={submit}
      className={`flex w-full max-w-md items-center gap-2 rounded-full border border-podhub-line bg-white p-1.5 shadow-soft ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className="min-w-0 flex-1 bg-transparent px-4 text-sm text-podhub-heading outline-none placeholder:text-podhub-muted"
      />
      <Button type="submit" size="md" trailingArrow>
        {submitted ? (
          <span className="inline-flex items-center gap-1.5">
            <Check size={14} strokeWidth={2.5} />
            Subscribed
          </span>
        ) : (
          ctaLabel
        )}
      </Button>
    </form>
  );
}