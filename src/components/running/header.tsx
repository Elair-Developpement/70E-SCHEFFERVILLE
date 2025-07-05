"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "top-3 left-1/5 w-1/5 h-fit absolute"
            : "w-1/2 h-fit mx-auto relative"
        }`}
      >
        <Image
          src="/logos/70e-Logo-H.png"
          alt="Logo horizontal du 70e anniversaire de la Ville de Schefferville"
          width={6481}
          height={1988}
          className="object-contain w-full h-full"
          priority
        />
      </div>
    </header>
  );
}
