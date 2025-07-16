import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";

import Event from "@/lib/types/event";
import { getDayFromDate, getMonthFromDate } from "@/lib/utils";

export default function EventCard({
  date,
  //hour,
  //hour_end,
  name,
  //name_eng,
  desc,
  //desc_end,
  link,
  //add_desc,
  //add_desc_eng,
}: Event) {
  const t = useTranslations("calendar");
  const c = useTranslations("common");

  return (
    <div className="border-b-4 my-4 pb-2 border-green-2">
      <div className="flex">
        <h1 className="text-4xl font-bold text-orange-1">
          {getDayFromDate(date!)}
        </h1>
        <p className="text-xl font-bold ps-1 text-orange-1">
          {t(getMonthFromDate(date!))}
        </p>
      </div>
      <h1 className="text-xl font-bold text-green-1">{name}</h1>
      <p className="text-lg">{desc}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-orange-1 underline text-end pt-2 flex"
        >
          {c("know-more")}
          <ExternalLink size={24} className="stroke-2 ps-1" />
        </a>
      )}
    </div>
  );
}
