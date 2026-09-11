type PodhubMarkProps = {
  size?: number;
  className?: string;
};

/* Standalone brand mark - used in the logo block and decorative spots.
   Independent of the PNG logo so the header stays crisp at any size. */
export function PodhubMark({ size = 28, className = "" }: PodhubMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="podhub-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAB819" />
          <stop offset="100%" stopColor="#D4A20D" />
        </linearGradient>
      </defs>
      <path
        d="M6 22V10c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6v12c0 1.1-.9 2-2 2h-2v-2h-4v2h-4v-2h-4v2H8c-1.1 0-2-.9-2-2z"
        fill="url(#podhub-mark)"
      />
      <circle cx="13" cy="16" r="1.6" fill="white" />
      <circle cx="19" cy="16" r="1.6" fill="white" />
    </svg>
  );
}