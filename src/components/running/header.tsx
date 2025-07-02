"use client";

import { useEffect, useState } from "react";
import styles from "./header.module.css";

import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Customize the scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <Image
        className={`${styles.logo} ${scrolled ? styles.small : ""}`}
        src="/logos/70e-Logo-H.png"
        alt="70e Schefferville Logo"
        width={scrolled ? 50 : 100} // Adjust size based on scroll
        height={scrolled ? 50 : 100}
      />
    </header>
  );
}
