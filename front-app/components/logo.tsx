import Image from "next/image";
import { cn } from "../lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/images/groove-nomad_logo.png"
      alt="Ton logo"
      width={120}
      height={30}
      className={cn("h-5 w-auto", className)}
    />
  );
};
