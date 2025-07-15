import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

import Home70eLogo from "./(components)/home70eLogo";
import HomeTripleSlogan from "./(components)/homeTripleSlogan";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main className="block pt-[5rem] px-2 md:max-w-[80rem] md:mx-auto">
      <Home70eLogo />
      <HomeTripleSlogan />
      {/* Section pour texte d'introduction */}
      <div className="bg-teal-1 p-3 pb-1 rounded-lg">
        <h1 className="text-center text-l font-bold text-white pb-2">
          {t("intro-title")}
        </h1>
        <div className="text-justify text-white">
          {t.rich("intro-text", {
            p: (chunks) => <p className="mb-2">{chunks}</p>,
            em: (chunks) => <em>{chunks}</em>,
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </div>
      </div>
      {/* Manchettes */}
      <div className="flex flex-col py-2">
        <h1 className="text-2xl text-blue-1 font-bold">{t("press-title")}</h1>
        <h2 className="text-lg text-blue-2">{t("press-latest")}</h2>
        <p className="font-bold">TITRE</p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
          diam, viverra quis varius non, pharetra et diam.
        </p>
        <Link href="/press" className="text-orange-1 underline self-end pt-2">
          {t("press-more")}
        </Link>
      </div>
      {/* Évènements/Programmation */}
      <div className="flex flex-col py-2">
        <h1 className="text-2xl text-blue-1 font-bold">{t("events-title")}</h1>
        <h2 className="text-lg text-blue-2">{t("events-upcoming")}</h2>
        <div className="flex">
          <h1 className="text-4xl font-bold text-orange-1">01</h1>
          <p className="text-xl font-bold ps-1 text-orange-1">Août</p>
        </div>
        <h1 className="text-xl font-bold text-green-1">
          Lancement du Musée Virtuel
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
          diam, viverra quis varius non, pharetra et diam.
        </p>
        <Link href="/events" className="text-orange-1 underline self-end pt-2">
          {t("events-more")}
        </Link>
      </div>
      {/* Section dédié au musée virtuel */}
      <div className="flex flex-col border-4 border-teal-1 p-3 rounded-lg my-2">
        <h1 className=" text-teal-1 text-2xl text-center font-bold">
          {t("museum-title")}
        </h1>
        <p className="text-blue-2 text-lg text-justify">
          {t("museum-description")}
        </p>
        <Link
          href="https://museevirtuel.schefferville.ca/"
          target="_blank"
          className="text-orange-1 font-bold w-fit self-center border-2 border-orange-1 rounded-lg mt-2 py-1 px-2 text-center"
        >
          {t("museum-visit")}
        </Link>
      </div>
      {/* Section pour les partenaires */}
      <div className="flex flex-col py-2">
        <h1 className="text-xl text-blue-1 font-bold">{t("partners")}</h1>
        <div className="flex">
          <Link
            href="https://www.caniapiscau.ca"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/Logo_MRC_de_Caniapiscau.png"
              alt="Logo de la MRC de Caniapiscau"
              width={860}
              height={612}
              className="object-contain w-full md:max-w-[19rem]"
            />
            La MRC de Caniapiscau
          </Link>
          <Link
            href="https://www.quebec.ca/gouvernement/ministeres-organismes/societe-plan-nord"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/Gouv_Quebec_logo.png"
              alt="Logo du Gouvernement du Québec"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            La société du Plan Nord
          </Link>
        </div>
      </div>
    </main>
  );
}
