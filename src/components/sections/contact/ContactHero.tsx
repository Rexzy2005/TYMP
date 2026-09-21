"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Phone, Mail, Smile, Pencil, ChevronDown, ArrowUpRight, Check } from "lucide-react";

import { MotionSection } from "../../ui/MotionSection";
import {
  contactPageHeader,
  contactFormImage,
  contactReasons,
  guestTopics,
} from "@/lib/content";
import { images } from "@/lib/assets";

const TITLE_FONT = "var(--font-urbanist), Urbanist, sans-serif";
const BODY_FONT = "var(--font-public-sans), Public Sans, sans-serif";

type Tab = "contact" | "guest";

function FieldShell({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-[#E7E7E8] pb-3 transition-colors focus-within:border-[#EAB819]">
      <span className="shrink-0 text-[#4E5255]">{icon}</span>
      {children}
    </div>
  );
}

function Dropdown({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between bg-transparent text-left text-[15px] outline-none"
        style={{ fontFamily: BODY_FONT, color: value ? "#111418" : "#8A8D90" }}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown size={16} className={`shrink-0 text-[#8A8D90] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+10px)] z-40 w-full min-w-[220px] rounded-2xl border border-black/[0.06] bg-white py-2 shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[14px] transition-colors hover:bg-gray-50 ${
                value === opt ? "font-semibold text-[#D4A20D]" : "text-[#4E5255]"
              }`}
            >
              <span>{opt}</span>
              {value === opt && <Check size={15} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [reason, setReason] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-[#FCF4D4]/40 px-6 py-16 text-center">
        <div className="grid size-14 place-items-center rounded-full bg-[#EAB819] text-white">
          <Check size={26} />
        </div>
        <h3 className="mt-5 text-[20px] font-bold text-[#111418]" style={{ fontFamily: TITLE_FONT }}>
          Message sent!
        </h3>
        <p className="mt-2 max-w-xs text-[15px] text-[#4E5255]" style={{ fontFamily: BODY_FONT }}>
          Thanks for reaching out - our team will get back to you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" style={{ fontFamily: BODY_FONT }}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FieldShell icon={<User size={17} />}>
          <input
            required
            type="text"
            placeholder="Full Name*"
            className="w-full bg-transparent text-[15px] text-[#111418] outline-none placeholder:text-[#8A8D90]"
          />
        </FieldShell>
        <FieldShell icon={<Phone size={17} />}>
          <input
            required
            type="tel"
            placeholder="Phone Number*"
            className="w-full bg-transparent text-[15px] text-[#111418] outline-none placeholder:text-[#8A8D90]"
          />
        </FieldShell>
        <FieldShell icon={<Mail size={17} />}>
          <input
            required
            type="email"
            placeholder="Enter Email*"
            className="w-full bg-transparent text-[15px] text-[#111418] outline-none placeholder:text-[#8A8D90]"
          />
        </FieldShell>
        <FieldShell icon={<Smile size={17} />}>
          <Dropdown value={reason} onChange={setReason} options={contactReasons} placeholder="Contact Reason" />
        </FieldShell>
      </div>

      <FieldShell icon={<Pencil size={17} />}>
        <input
          required
          type="text"
          placeholder="Leave a Message*"
          className="w-full bg-transparent text-[15px] text-[#111418] outline-none placeholder:text-[#8A8D90]"
        />
      </FieldShell>

      <div className="flex flex-wrap items-center justify-between gap-5 pt-2">
        <label className="flex cursor-pointer items-center gap-2.5 text-[14px] text-[#4E5255]">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="size-4 rounded border-[#8A8D90] accent-[#EAB819]"
          />
          <span>
            I agree to the{" "}
            <a href="#" className="font-medium text-[#EAB819] hover:underline">
              privacy policy
            </a>
          </span>
        </label>

        <button
          type="submit"
          disabled={!agreed}
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#EAB819] py-2.5 pl-6 pr-2.5 text-[15px] font-semibold text-white transition-all hover:bg-[#D4A20D] disabled:cursor-not-allowed disabled:opacity-40"
          style={{ fontFamily: TITLE_FONT }}
        >
          <span>Submit Message</span>
          <span className="grid size-9 place-items-center rounded-full bg-white text-[#EAB819] transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>
    </form>
  );
}

function GuestApplicationForm() {
  const [topic, setTopic] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-[#FCF4D4]/40 px-6 py-16 text-center">
        <div className="grid size-14 place-items-center rounded-full bg-[#EAB819] text-white">
          <Check size={26} />
        </div>
        <h3 className="mt-5 text-[20px] font-bold text-[#111418]" style={{ fontFamily: TITLE_FONT }}>
          Application received!
        </h3>
        <p className="mt-2 max-w-xs text-[15px] text-[#4E5255]" style={{ fontFamily: BODY_FONT }}>
          We&apos;ll review your application and reach out if it looks like a good fit for the show.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" style={{ fontFamily: BODY_FONT }}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FieldShell icon={<User size={17} />}>
          <input
            required
            type="text"
            placeholder="Full Name*"
            className="w-full bg-transparent text-[15px] text-[#111418] outline-none placeholder:text-[#8A8D90]"
          />
        </FieldShell>
        <FieldShell icon={<Mail size={17} />}>
          <input
            required
            type="email"
            placeholder="Enter Email*"
            className="w-full bg-transparent text-[15px] text-[#111418] outline-none placeholder:text-[#8A8D90]"
          />
        </FieldShell>
        <FieldShell icon={<Phone size={17} />}>
          <input
            type="url"
            placeholder="Social / Portfolio Link"
            className="w-full bg-transparent text-[15px] text-[#111418] outline-none placeholder:text-[#8A8D90]"
          />
        </FieldShell>
        <FieldShell icon={<Smile size={17} />}>
          <Dropdown value={topic} onChange={setTopic} options={guestTopics} placeholder="Topic You'd Discuss" />
        </FieldShell>
      </div>

      <FieldShell icon={<Pencil size={17} />}>
        <input
          required
          type="text"
          placeholder="Why should we have you on the show?*"
          className="w-full bg-transparent text-[15px] text-[#111418] outline-none placeholder:text-[#8A8D90]"
        />
      </FieldShell>

      <div className="flex flex-wrap items-center justify-between gap-5 pt-2">
        <label className="flex cursor-pointer items-center gap-2.5 text-[14px] text-[#4E5255]">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="size-4 rounded border-[#8A8D90] accent-[#EAB819]"
          />
          <span>
            I agree to the{" "}
            <a href="#" className="font-medium text-[#EAB819] hover:underline">
              privacy policy
            </a>
          </span>
        </label>

        <button
          type="submit"
          disabled={!agreed}
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#EAB819] py-2.5 pl-6 pr-2.5 text-[15px] font-semibold text-white transition-all hover:bg-[#D4A20D] disabled:cursor-not-allowed disabled:opacity-40"
          style={{ fontFamily: TITLE_FONT }}
        >
          <span>Submit Application</span>
          <span className="grid size-9 place-items-center rounded-full bg-white text-[#EAB819] transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>
    </form>
  );
}

function GlowBlobs() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 z-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full"
      style={{ background: "radial-gradient(ellipse, rgba(234,184,25,0.16) 0%, rgba(234,184,25,0) 70%)" }}
      aria-hidden
    />
  );
}

function PageHeading() {
  const [line1, line2] = contactPageHeader.title.split("\n");

  return (
    <div className="mx-auto max-w-[820px] text-center">
      <h1
        style={{
          fontFamily: TITLE_FONT,
          fontWeight: 700,
          fontSize: "clamp(30px, 5vw, 48px)",
          lineHeight: 1.2,
          letterSpacing: "-0.96px",
          color: "#FFFFFF",
        }}
      >
        {line1}
        <br />
        {line2.split(contactPageHeader.highlight).map((part, idx, arr) => (
          <span key={idx}>
            {part}
            {idx < arr.length - 1 && (
              <span className="relative inline-block">
                {contactPageHeader.highlight}
                <span className="pointer-events-none absolute left-0 top-[90%] h-[6px] w-full min-w-[150px]" aria-hidden>
                  <Image src={images.blogUnderline} alt="" width={196} height={12} className="h-full w-full object-contain" />
                </span>
              </span>
            )}
          </span>
        ))}
      </h1>
      <p
        className="mx-auto mt-5 max-w-[560px]"
        style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 16, lineHeight: "26px", color: "#CFD0D1" }}
      >
        {contactPageHeader.body}
      </p>
    </div>
  );
}

export function ContactHero() {
  const [tab, setTab] = useState<Tab>("contact");

  return (
    <section className="relative overflow-hidden bg-[#150F0E] pb-0 pt-32 sm:pt-40 lg:pt-48">
      <GlowBlobs />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
        <MotionSection>
          <PageHeading />
        </MotionSection>

        <MotionSection>
          <div className="relative z-20 -mb-16 mt-12 grid w-full gap-0 overflow-hidden rounded-[24px] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.25)] sm:mt-14 lg:grid-cols-[1fr_408px]">
            <div className="p-6 sm:p-9 lg:p-12">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#F5F1EC] p-1.5">
                <button
                  type="button"
                  onClick={() => setTab("contact")}
                  className={`rounded-full px-5 py-2 text-[14px] font-semibold transition-colors ${
                    tab === "contact" ? "bg-[#EAB819] text-white" : "text-[#4E5255] hover:text-[#111418]"
                  }`}
                  style={{ fontFamily: TITLE_FONT }}
                >
                  Contact
                </button>
                <button
                  type="button"
                  onClick={() => setTab("guest")}
                  className={`rounded-full px-5 py-2 text-[14px] font-semibold transition-colors ${
                    tab === "guest" ? "bg-[#EAB819] text-white" : "text-[#4E5255] hover:text-[#111418]"
                  }`}
                  style={{ fontFamily: TITLE_FONT }}
                >
                  Guest Application
                </button>
              </div>

              {tab === "contact" ? <ContactForm /> : <GuestApplicationForm />}
            </div>

            <div className="relative hidden min-h-[420px] lg:block">
              <Image src={contactFormImage} alt="Podcast recording setup" fill sizes="408px" className="object-cover" />
            </div>
          </div>
        </MotionSection>
      </div>

      <div className="h-16 bg-[#150F0E] sm:h-20 lg:h-24" aria-hidden />
    </section>
  );
}
