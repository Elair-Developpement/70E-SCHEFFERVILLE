"use client";

import Link from "next/link";

import { useTranslations } from "next-intl";
import { useState, useEffect, useTransition } from "react";
import { ExternalLink } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import Event from "@/lib/types/event";
import { getDayFromDate, getMonthFromDate } from "@/lib/utils";

/**
 * Module de la page d'accueil qui affiche le prochain événement
 * @returns JSX.Element
 */
export default function HomeUpcomingEvent() {
  const t = useTranslations("home");
  const c = useTranslations("calendar");
  const com = useTranslations("common");
  const [events, setEvents] = useState<Event[]>([]);
  const [upcomingEvent, setUpcomingEvent] = useState<Event | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const supabase = await createClient();

      const { data, error } = await supabase.from("events").select("*");

      if (error) {
        console.error("Erreur lors de l'obtention des événements", error);
        return;
      }

      setEvents(data);
    });
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const sortedEvents = [...events].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      const nextEvent = sortedEvents.find(
        (event) => new Date(event.date) >= new Date()
      );
      setUpcomingEvent(nextEvent || null);
    }
  }, [events]);

  return (
    <div className="flex flex-col py-2">
      <h1 className="text-2xl text-blue-1 font-bold">{t("events-title")}</h1>
      <h2 className="text-lg text-blue-2">{t("events-upcoming")}</h2>
      {isPending && <p className="text-gray-500">{com("loading")}</p>}
      <div className="flex">
        <h1 className="text-4xl font-bold text-orange-1">
          {getDayFromDate(upcomingEvent?.date || "")}
        </h1>
        <p className="text-xl font-bold ps-1 text-orange-1">
          {c(getMonthFromDate(upcomingEvent?.date || ""))}
        </p>
      </div>
      {upcomingEvent?.link ? (
        <a
          href={upcomingEvent?.link}
          target="_blank"
          className="flex underline"
        >
          <h1 className="text-xl font-bold text-green-1">
            {upcomingEvent?.name}
          </h1>
          <ExternalLink size={26} className="stroke-3 text-green-1 ps-1" />
        </a>
      ) : (
        <h1 className="text-xl font-bold text-green-1">
          {upcomingEvent?.name}
        </h1>
      )}
      <p className="">{upcomingEvent?.desc}</p>
      <Link href="/events" className="text-orange-1 underline self-end pt-2">
        {t("events-more")}
      </Link>
    </div>
  );
}
