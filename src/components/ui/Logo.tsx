import Image from "next/image";

import { images } from "@/lib/assets";

export function Logo() {
  return <Image src={images.logo} alt="PodHub" width={112} height={32} style={{ height: "auto" }} className="h-8 w-auto" priority />;
}
