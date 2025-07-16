import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

import Home70eLogo from "./(components)/home70eLogo";
import HomeTripleSlogan from "./(components)/homeTripleSlogan";
import HomeLatestPress from "./(components)/homeLatestPress";
import HomeUpcomingEvent from "./(components)/homeUpcomingEvent";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main className="block pt-[5rem] px-2 md:max-w-[80rem] md:mx-auto min-h-[calc(100vh-25rem)]">
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
      <HomeLatestPress />
      <HomeUpcomingEvent />
      {/* Section dédié au musée virtuel */}
      <div className="flex flex-col border-4 border-teal-1 p-3 rounded-lg my-2">
        <h1 className=" text-teal-1 text-2xl text-center font-bold">
          {t("museum-title")}
        </h1>
        <p className="text-blue-2 text-lg text-justify">
          {t.rich("museum-description", {
            p: (chunks) => <p className="mb-2">{chunks}</p>,
          })}
        </p>
        <Link
          href="https://museevirtuel.schefferville.ca/"
          target="_blank"
          className="text-orange-1 font-bold w-fit self-center border-2 border-orange-1 rounded-lg py-1 px-2 text-center"
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
