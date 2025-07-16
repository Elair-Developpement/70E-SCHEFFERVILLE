import Image from "next/image";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("running");

  return (
    <footer className="flex flex-col w-full max-w-[80rem] h-[25rem] rounded-t-2xl mx-auto bg-blue-1 text-white p-4 mt-10">
      <div className="flex flex-col">
        <Image
          src="/logos/70e-Logo-H.png"
          alt="Logo horizontal du 70e anniversaire de la Ville de Schefferville"
          width={6481}
          height={1988}
          className="object-contain w-fit h-[6rem] bg-white rounded-2xl"
        />
      </div>
      <p className="text-sm mt-6 mb-2">{t("links")}</p>
      <div className="flex flex-col gap-2">
        <a
          href="https://www.schefferville.ca/"
          target="_blank"
          className="underline"
        >
          {t("link-website")}
        </a>
        <a
          href="https://www.cdsschefferville.ca/"
          target="_blank"
          className="underline"
        >
          {t("link-corporation")}
        </a>
        <a
          href="https://www.facebook.com/VilleSchefferville"
          target="_blank"
          className="underline"
        >
          {t("link-facebook")}
        </a>
      </div>
      <div className="flex flex-col mt-6 gap-6">
        <span>{t("copyright")}</span>
        <span>{t("conception")} Élair Développement</span>
      </div>
    </footer>
  );
}
