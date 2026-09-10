import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`} aria-label="PodHub Home">
      <Image
        src={images.logo}
        alt="PodHub"
        width={130}
        height={36}
        style={{ height: "auto" }}
        className="h-8 sm:h-9 w-auto object-contain"
        priority
      />
    </Link>
  );
}
