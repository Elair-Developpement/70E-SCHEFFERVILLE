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
    const supabase = createClient();
    startTransition(async () => {
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
    <main className="block pt-[5rem] px-2 md:max-w-[80rem] md:mx-auto min-h-[calc(screen-20rem)]">
      <BackToHomeButton />
      <h1 className="text-3xl text-center font-bold text-blue-1">
        {t("title")}
      </h1>
      <p className="text-lg text-center underline text-orange-1">{t("pdf")}</p>
      {isPending && <div>Loading...</div>}
      {events &&
        events.map((event, index) => <EventCard key={index} {...event} />)}
    </main>
  );
}
