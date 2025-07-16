import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import ReactMarkdown from "react-markdown";

import IPress from "@/lib/types/iPress";

export default function PressCard(pressProp: IPress) {
  const t = useTranslations("press");

  return (
    <div className="flex flex-col w-full border-2 border-blue-2 rounded-2xl p-2">
      <div className="flex w-full">
        <h1 className="text-center text-lg font-bold text-green-1">
          {pressProp.title}
        </h1>
        <Image
          src={pressProp.image_link}
          alt={pressProp.title}
          width={600}
          height={600}
          className="object-cover w-full rounded-xl"
        />
      </div>
      <div className="line-clamp-3 text-justify">
        <ReactMarkdown>{pressProp.body}</ReactMarkdown>
      </div>
      <div>
        <Link
          href={`/press/${pressProp.link}`}
          className="text-orange-1 underline"
        >
          {t("read-more")}
        </Link>
      </div>
    </div>
  );
}
