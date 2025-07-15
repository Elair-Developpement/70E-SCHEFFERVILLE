import { useTranslations } from "next-intl";

import BackToHomeButton from "@/components/navigation/backToHomeButton";
import ContactCard from "./(components)/contactCard";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <main className="block pt-[5rem] px-2 md:max-w-[80rem] md:mx-auto md:min-h-screen">
      <BackToHomeButton />
      <h1 className="text-3xl md:text-5xl text-center font-bold text-blue-1">
        {t("title")}
      </h1>
      <h2 className="text-xl md:text-3xl text-center font-bold text-blue-2">
        {t("people")}
      </h2>
      <div className="flex flex-col mt-2">
        <div className="flex flex-col gap-5">
          <ContactCard
            photo="Julie Munger 2025.jpg"
            name="Julie Munger"
            title={t("julie-title")}
            email="communautaire@schefferville.ca"
            phone="418-925-7475"
          />
          <ContactCard
            photo="Ghislain Lévesque 2025.jpg"
            name="Ghislain Lévesque"
            title={t("ghislain-title")}
            email="glevesque@cgl25.ca"
            phone="418-964-6275"
          />
        </div>
      </div>
    </main>
  );
}
