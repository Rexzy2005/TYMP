import { Avatar } from "./Avatar";

type StackItem = {
  initials: string;
  color: string;
};

type AvatarStackProps = {
  items: StackItem[];
  size?: "xs" | "sm" | "md";
  max?: number;
  className?: string;
};

export function AvatarStack({
  items,
  size = "sm",
  max,
  className = "",
}: AvatarStackProps) {
  const visible = max ? items.slice(0, max) : items;
  const overflow = max && items.length > max ? items.length - max : 0;

  return (
    <div className={`flex items-center -space-x-2 ${className}`}>
      {visible.map((item, i) => (
        <Avatar
          key={`${item.initials}-${i}`}
          initials={item.initials}
          color={item.color}
          size={size}
          ring="white"
        />
      ))}
      {overflow > 0 ? (
        <span className="grid size-7 place-items-center rounded-full bg-white text-[11px] font-semibold text-podhub-ink ring-2 ring-white">
          +{overflow}
        </span>
      ) : null}
    </div>
  );
}