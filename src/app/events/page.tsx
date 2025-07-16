"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useTransition } from "react";

import { createClient } from "@/lib/supabase/client";
import Event from "@/lib/types/event";
import BackToHomeButton from "@/components/navigation/backToHomeButton";
import EventCard from "./(components)/eventCard";

export default function Events() {
  const t = useTranslations("events");
  const [events, setEvents] = useState<Event[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const supabase = await createClient();

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error) {
        console.error("Erreur lors de l'obtention des événements", error);
        return;
      }

      setEvents(data);
    });
  }, []);

  return (
    <main className="block pt-[5rem] px-2 md:max-w-[80rem] md:mx-auto md:min-h-screen">
      <BackToHomeButton />
      <h1 className="text-3xl text-center font-bold text-blue-1">
        {t("title")}
      </h1>
      <p className="text-lg text-center underline text-orange-1">{t("pdf")}</p>
      {!isPending &&
        events.map((event, index) => (
          <EventCard
            key={index}
            date={event.date}
            hour={event.hour}
            hour_end={event.hour_end}
            name={event.name}
            name_eng={event.name_eng}
            desc={event.desc}
            desc_eng={event.desc_eng}
            link={event.link}
            add_desc={event.add_desc}
            add_desc_eng={event.add_desc_eng}
          />
        ))}
    </main>
  );
}
