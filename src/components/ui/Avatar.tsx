type AvatarProps = {
  initials?: string;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg";
  ring?: "white" | "none";
  className?: string;
};

const sizes = {
  xs: "size-6 text-[10px]",
  sm: "size-7 text-[11px]",
  md: "size-9 text-xs",
  lg: "size-11 text-sm",
};

export function Avatar({
  initials = "",
  color = "bg-podhub-orange",
  size = "sm",
  ring = "none",
  className = "",
}: AvatarProps) {
  const ringClass = ring === "white" ? "ring-2 ring-white" : "";
  return (
    <span
      className={`grid place-items-center rounded-full font-semibold text-white ${color} ${sizes[size]} ${ringClass} ${className}`}
      aria-hidden
    >
      {initials}
    </span>
  );
}