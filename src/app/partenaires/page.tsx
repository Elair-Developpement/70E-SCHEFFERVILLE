import Image from "next/image";

import { useTranslations } from "next-intl";

import BackToHomeButton from "@/components/navigation/backToHomeButton";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main className="block pt-[5rem] px-2 md:max-w-[80rem] md:mx-auto min-h-[calc(100vh-25rem)]">
      <BackToHomeButton />
      <h1 className="text-3xl md:text-3xl text-center font-bold text-blue-1">
        {t("partners")}
      </h1>
      <div className="flex flex-col py-2 gap-5 md:gap-10">
        <div className="grid grid-cols-2 place-items-center gap-5 md:flex md:flex-row md:items-center">
          <a
            href="https://www.caniapiscau.ca"
            target="_blank"
            className="text-center font-semibold h-fit"
          >
            <Image
              src="/images/partners/Logo_MRC_de_Caniapiscau.png"
              alt="Logo de la MRC de Caniapiscau"
              width={860}
              height={612}
              className="object-contain w-full md:max-w-[19rem]"
            />
            La MRC de Caniapiscau
          </a>
          <a
            href="https://www.quebec.ca/gouvernement/ministeres-organismes/societe-plan-nord"
            target="_blank"
            className="text-center font-semibold h-fit"
          >
            <Image
              src="/images/partners/Gouv_Quebec_logo.png"
              alt="Logo du Gouvernement du Québec"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            La société du Plan Nord
          </a>
          <a
            href="https://www.tatasteelcanada.com/"
            target="_blank"
            className="text-center font-semibold h-fit"
          >
            <Image
              src="/images/partners/tata_steel.png"
              alt="Logo de Tata Steel"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Tata Steel
          </a>
          <a
            href="https://torngatmetals.com/fr/accueil/"
            target="_blank"
            className="text-center font-semibold h-fit"
          >
            <Image
              src="/images/partners/metaux_torngat.png"
              alt="Logo de metaux torngat"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Métaux Torngat
          </a>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-5 md:flex md:flex-row md:items-center">
          <a
            href="https://www.assnat.qc.ca/fr/deputes/champagne-jourdain-kateri-19303/index.html"
            target="_blank"
            className="text-center font-semibold h-fit"
          >
            <Image
              src="/images/partners/kateri_champagne.png"
              alt="Logo de Kateri Champagne"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Kateri Champagne Jourdain
          </a>
          <a
            href="https://www.northmart.ca/"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/northern.jpg"
              alt="Logo des supermarchés Northern"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Northern
          </a>
          <a
            href="https://www.cyclonemetals.ca/"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/iron_bear.png"
              alt="Logo d'iron bear'"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Projet Iron Bear
          </a>
          <a
            href="https://naskapi.com/manikin-center/"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/manikin_center.png"
              alt="Logo d'iron bear'"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Manikin Center
          </a>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-5 md:flex md:flex-row md:items-center">
          <a href="" target="_blank" className="text-center font-semibold">
            <Image
              src="/images/partners/nord_roy.png"
              alt="Logo de Nord Roy"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            NordRoy
          </a>
          <a
            href="https://schefferville.biz/#hotel-royal"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/hotel_royal.png"
              alt="Logo de hotel royal"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Hotel Royal Schefferville
          </a>
          <a
            href="https://porlier.ca/"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/porlier.png"
              alt="Logo de gilles porlier"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Société de Gestion Gilles Porlier
          </a>
          <a href="" target="" className="text-center font-semibold">
            <Image
              src="/images/partners/energy_services.png"
              alt="Logo de Kawawachikamach Energy Services Inc."
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Kawawachikamach Energy Services Inc.
          </a>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-5 md:flex md:flex-row md:items-center">
          <a
            href="https://www.ecolekanatamat.ca/"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/kanatamat.png"
              alt="Logo de lecole kanatamat"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            École Kanatamat
          </a>
          <a
            href="https://www.transportservicesnaskapi.com/"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/naskapi_transport.jpg"
              alt="Logo de Naskapi Services"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Naskapi Services de Transport
          </a>
          <a
            href="https://www.facebook.com/p/Alimentation-Boeuf-Rouge-Inc-100079854730848/"
            target="_blank"
            className="text-center font-semibold"
          >
            <Image
              src="/images/partners/boeuf_rouge.jpg"
              alt="Logo de Alimentation Boeuf Rouge"
              width={1200}
              height={675}
              className="object-contain w-full md:max-w-[24rem]"
            />
            Alimentation Boeuf Rouge
          </a>
        </div>
      </div>
    </main>
  );
}
