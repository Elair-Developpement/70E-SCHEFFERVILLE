"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useTransition } from "react";

import { createClient } from "@/lib/supabase/client";
import BackToHomeButton from "@/components/navigation/backToHomeButton";
import IPress from "@/lib/types/iPress";
import PressCard from "./(components)/pressCard";

export default function Press() {
  const t = useTranslations("press");
  const [presses, setPresses] = useState<IPress[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const supabase = createClient();
    startTransition(async () => {
      const { data, error } = await supabase
        .from("press")
        .select("*")
        .order("publish_date", { ascending: false });

      if (error) {
        console.error(
          "Erreur lors de l'obtention des communiqués de presse",
          error
        );
        return;
      }

      setPresses(data);
    });
  }, []);

  return (
    <main className="block pt-[5rem] px-2 md:max-w-[80rem] md:mx-auto min-h-[calc(100vh-25rem)]">
      <BackToHomeButton />
      <h1 className="text-3xl text-center font-bold text-blue-1">
        {t("title")}
      </h1>
      {!isPending &&
        presses.map((press, index) => (
          <div key={index} className="mt-3">
            <PressCard {...press} />
          </div>
        ))}
    </main>
  );
}
