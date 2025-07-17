import { useTranslations } from "next-intl";

import BackToHomeButton from "@/components/navigation/backToHomeButton";
import ContactCard from "./(components)/contactCard";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <main className="block pt-[5rem] px-2 md:max-w-[80rem] md:mx-auto min-h-[calc(100vh-25rem)]">
      <BackToHomeButton />
      <h1 className="text-3xl md:text-3xl text-center font-bold text-blue-1">
        {t("title")}
      </h1>
      <h2 className="text-xl md:text-xl text-center font-bold text-blue-2">
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
            photo="Ghislain Levesque 2025.JPG"
            name="Ghislain Lévesque"
            title={t("ghislain-title")}
            email="glevesque@cgl25.ca"
            phone="418-964-6275"
            portrait_link="https://tplhwzejgzgrpqclrkse.supabase.co/storage/v1/object/public/documents/portrait/Portrait%20Ghislain%20Levesque.pdf"
          />
        </div>
      </div>
    </main>
  );
}
