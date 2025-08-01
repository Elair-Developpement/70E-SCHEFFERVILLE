"use client";

import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import LocaleSwitcher from "./localeSwitcher";

export default function Header() {
  const t = useTranslations("running");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full h-[5rem] z-40 bg-blue-1 shadow-md ">
        <nav className="flex h-full items-center justify-between ps-2 pe-4 py-2">
          <Link href="/accueil" className="h-full w-fit">
            <Image
              src="/logos/70e-Logo-Seulement.png"
              alt="Logo seulement du 70e anniversaire de la Ville de Schefferville"
              width={3730}
              height={2269}
              className="object-contain h-full w-fit bg-white rounded-lg"
            />
          </Link>

          <button onClick={() => setIsMenuOpen(true)}>
            <Menu size={30} className="stroke-3 text-white" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 shadow-2xl h-screen w-full md:w-1/3 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex h-[5rem] justify-between ps-2 pe-4 pt-2">
          <Image
            src="/logos/70e-Logo-H.png"
            alt="Logo horizontal du 70e anniversaire de la Ville de Schefferville"
            width={3730}
            height={2269}
            className="object-contain h-full w-fit bg-white rounded-lg"
          />
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={30} className="text-blue-1 stroke-3" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col items-center justify-center h-full gap-8 pb-[8rem] text-3xl font-bold text-blue-1">
          <Link href="/accueil" onClick={() => setIsMenuOpen(false)}>
            {t("home")}
          </Link>
          <Link href="/communiques" onClick={() => setIsMenuOpen(false)}>
            {t("press")}
          </Link>
          <Link href="/evenements" onClick={() => setIsMenuOpen(false)}>
            {t("events")}
          </Link>
          <Link
            href="https://museevirtuel.schefferville.ca/"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("v-museum")}
          </Link>
          <Link href="/nous-joindre" onClick={() => setIsMenuOpen(false)}>
            {t("contact-us")}
          </Link>
          <div className="text-lg">
            <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
}
