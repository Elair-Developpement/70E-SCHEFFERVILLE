import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

import HomeCarousel from "./(components)/homeCarousel";

export default function Home() {
  const t = useTranslations("home");

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
      <div className="bg-teal-1 p-3 rounded-lg">
        <h1 className="text-center text-l font-bold text-white pb-2">
          {t("intro-title")}
        </h1>
        <p className="text-justify text-white">{t("intro-text")}</p>
      </div>
      <div className="flex flex-col py-2">
        <h1 className="text-2xl text-blue-1 font-bold">{t("press-title")}</h1>
        <h2 className="text-lg text-blue-2">{t("press-latest")}</h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
          diam, viverra quis varius non, pharetra et diam.
        </p>
        <Link href="/press" className="text-orange-1 underline self-end pt-2">
          {t("press-more")}
        </Link>
      </div>
      <div></div>
    </main>
  );
}
