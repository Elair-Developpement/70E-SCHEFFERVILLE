"use client";

import Image from "next/image";
import { use } from "react";

import { useTranslations } from "next-intl";
import { useState, useEffect, useTransition } from "react";
import ReactMarkdown from "react-markdown";

import { createClient } from "@/lib/supabase/client";
import BackToHomeButton from "@/components/navigation/backToHomeButton";
import IPress from "@/lib/types/iPress";

export default function PressPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const t = useTranslations("press");
  const { slug } = use(params);
  const [press, setPress] = useState<IPress>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const supabase = createClient();

    startTransition(async () => {
      const { data, error } = await supabase
        .from("press")
        .select("*")
        .eq("link", slug)
        .limit(1)
        .single();

      if (error) {
        console.error(
          "Erreur lors de l'obtention du communiqué de presse avec lien :",
          error
        );
        return;
      }

      setPress(data);
    });
  }, [slug]);

  return (
    <main className="block pt-[5rem] md:max-w-[80rem] md:mx-auto md:min-h-screen">
      {isPending && <div>Chargement...</div>}
      {press && (
        <div className="">
          <Image
            src={press.image_link}
            alt={press.title}
            width={600}
            height={600}
            className="object-cover w-full "
          />
          <BackToHomeButton />
          <div className="flex flex-col px-2 gap-2">
            <div className="flex w-full gap-1 md:flex-col">
              <h1 className="text-center text-xl md:text-2xl font-bold text-green-1">
                {press.title}
              </h1>
            </div>
            <div className="flex flex-col md:justify-center">
              <div className="space-y-4 text-left">
                <ReactMarkdown>{press.body}</ReactMarkdown>
              </div>
              {press.footer && (
                <div className="space-y-4 text-left mt-6 text-gray-500">
                  <ReactMarkdown>{press.footer}</ReactMarkdown>
                </div>
              )}
              {press.pdf_link && (
                <a
                  href={press.pdf_link}
                  target="_blank"
                  className="text-orange-1 underline mt-2"
                >
                  {t("pdf")}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
