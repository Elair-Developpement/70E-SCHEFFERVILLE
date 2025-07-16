"use client";

import Link from "next/link";

import { useTranslations } from "next-intl";
import { useState, useEffect, useTransition } from "react";

import { createClient } from "@/lib/supabase/client";
import IPress from "@/lib/types/iPress";
import PressCard from "@/app/press/(components)/pressCard";

export default function HomeLatestPress() {
  const t = useTranslations("home");
  const [press, setPress] = useState<IPress>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const supabase = createClient();
    startTransition(async () => {
      const { data, error } = await supabase
        .from("press")
        .select("*")
        .order("publish_date", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.error(
          "Erreur lors de l'obtention du dernier communiqué de presse",
          error
        );
        return;
      }

      setPress(data);
    });
  }, []);

  return (
    <div className="flex flex-col py-2">
      <h1 className="text-2xl text-blue-1 font-bold">{t("press-title")}</h1>
      <h2 className="text-lg text-blue-2">{t("press-latest")}</h2>
      {!isPending && (
        <div className="mt-1">
          <PressCard {...press!} />{" "}
        </div>
      )}
      <Link href="/press" className="text-orange-1 underline self-end pt-2">
        {t("press-more")}
      </Link>
    </div>
  );
}
