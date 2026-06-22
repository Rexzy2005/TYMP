import Image from "next/image";

import { images } from "@/lib/assets";

type CategoryIconKey =
  | "tech"
  | "comedy"
  | "design"
  | "health"
  | "business"
  | "education";

type CategoryIconProps = {
  name: CategoryIconKey | string;
  size?: number;
  className?: string;
};

/* Map content icon key -> SVG asset path. All SVGs render uniformly at `size`px. */
const iconMap: Record<string, string> = {
  tech: images.categoryTech,
  comedy: images.categoryComedy,
  design: images.categoryDesign,
  health: images.categoryHealth,
  business: images.categoryBusiness,
  education: images.categoryEducation,
};

export function CategoryIcon({ name, size = 26, className = "" }: CategoryIconProps) {
  const src = iconMap[name];
  if (!src) return null;
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden
    />
  );
}
