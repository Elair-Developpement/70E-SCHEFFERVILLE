import { useTranslations } from "next-intl";

export default function OnParleDeNous() {
  const t = useTranslations("home");

  return (
    <div className="bg-blue-1 p-3 mb-2 md:w-fit md:px-10 rounded-lg text-white">
      <h1 className="text-center text-l font-bold text-white pb-2">
        {t("talk-us-title")}
      </h1>
      <a
        href="https://tplhwzejgzgrpqclrkse.supabase.co/storage/v1/object/public/documents/press/review/Revue%20de%20presse-%2070%20ans%20Schefferville%20.pdf"
        target="_blank"
        className="text-center w-full text-white underline"
      >
        <div>{t("talk-us-link")}</div>
      </a>
    </div>
  );
}
