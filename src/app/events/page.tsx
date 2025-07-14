import { useTranslations } from "next-intl";

import EventCard from "./(components)/eventCard";

export default function Events() {
  const t = useTranslations("events");

  return (
    <main className="block pt-[5rem] px-2 md:mx-auto md:max-w-[80rem]">
      <h1 className="text-2xl font-bold text-blue-1">{t("title")}</h1>
      <p className="text-lg underline text-orange-1">{t("pdf")}</p>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </main>
  );
}
