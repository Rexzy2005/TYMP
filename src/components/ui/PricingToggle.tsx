"use client";

import { useState } from "react";

type PricingToggleProps = {
  options: { id: string; label: string }[];
  defaultValue?: string;
  onChange?: (id: string) => void;
  className?: string;
};

export function PricingToggle({
  options,
  defaultValue,
  onChange,
  className = "",
}: PricingToggleProps) {
  const [value, setValue] = useState(defaultValue ?? options[0]?.id);

  const handle = (id: string) => {
    setValue(id);
    onChange?.(id);
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border border-podhub-line bg-white p-1 shadow-soft ${className}`}
      role="tablist"
    >
      {options.map((opt) => {
        const active = opt.id === value;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => handle(opt.id)}
            className={`font-copy relative h-9 rounded-full px-5 text-base font-normal tracking-[-0.64px] transition ${
              active
                ? "bg-podhub-orange text-white shadow-orange-glow"
                : "text-podhub-muted hover:text-podhub-ink"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
