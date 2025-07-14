import HomeCarousel from "./(components)/homeCarousel";

import Image from "next/image";

export default function Home() {
  return (
    <main className="block pt-[5rem] px-2 md:container md:mx-auto md:max-w-[100rem]">
      <div className="hidden">
        <HomeCarousel />
      </div>
      <Image
        src="/logos/70e-Logo-V.png"
        alt="Logo vertical du 70e anniversaire de la Ville de Schefferville"
        width={4320}
        height={3745}
        className="object-contain w-4/5 h-auto mx-auto"
      />
      <h1 className="text-center">Hello World !</h1>
      <p className="text-justify">
        Bienvenue sur le site de la 70e Schefferville
      </p>
    </main>
  );
}
