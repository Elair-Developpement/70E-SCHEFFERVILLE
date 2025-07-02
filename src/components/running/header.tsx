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
            ? "top-4 left-6 w-24 h-10 absolute"
            : "mt-20 w-60 h-24 mx-auto relative"
        }`}
      >
        <Image
          src="/logos/70e-Logo-H.png"
          alt="Logo"
          width={240} // native dimensions (used internally)
          height={96}
          className="object-contain w-full h-full"
          priority
        />
      </div>
    </header>
  );
}
