import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("running");

  return (
    <footer className="w-full bg-blue-2 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">{t("footer-text")}</p>
      </div>
    </footer>
  );
}
