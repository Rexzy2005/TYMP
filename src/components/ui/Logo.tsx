import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`} aria-label="TYMP Home">
      <Image
        src={images.logo}
        alt="TYMP"
        width={149}
        height={48}
        className="h-8 sm:h-9 md:h-10 w-auto object-contain"
        priority
      />
    </Link>
  );
}
