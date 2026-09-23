"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 group shrink-0 select-none", className)}>
      <div className="relative h-7 sm:h-8 w-auto shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="TRP"
          width={68}
          height={32}
          className="h-7 sm:h-8 w-auto object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary group-hover:text-secondary transition-colors duration-300">
          DIGITALS
        </span>
      )}
    </div>
  );
}
