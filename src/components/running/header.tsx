"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-[5rem] z-50 bg-blue-1 shadow-md ">
      <nav className="flex h-full items-center justify-between ps-2 pe-4 py-2">
        <Image
          src="/logos/70e-Logo-Seulement.png"
          alt="Logo horizontal du 70e anniversaire de la Ville de Schefferville"
          width={3730}
          height={2269}
          className="object-contain h-full w-fit bg-white rounded-lg"
        />

        <Menu size={30} className="stroke-3 text-white" />
      </nav>
    </header>
  );
}
