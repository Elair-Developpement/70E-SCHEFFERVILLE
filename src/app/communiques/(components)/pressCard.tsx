import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import ReactMarkdown from "react-markdown";

import IPress from "@/lib/types/iPress";

export default function PressCard(pressProp: IPress) {
  const t = useTranslations("press");

  return (
    <div className="flex flex-col w-full border-2 border-blue-2 rounded-2xl gap-1 p-2 md:flex-row md:gap-4">
      <div className="flex flex-col w-full gap-1">
        <h1 className="text-center text-lg font-bold text-green-1 md:hidden">
          {pressProp.title}
        </h1>
        {pressProp.image_link && (
          <Image
            src={pressProp.image_link}
            alt={pressProp.title}
            width={600}
            height={600}
            className="object-cover w-full rounded-xl"
          />
        )}
      </div>
      <div className="flex flex-col md:justify-center">
        <h1 className="text-center text-lg font-bold text-green-1 max-md:hidden">
          {pressProp.title}
        </h1>
        <div className="line-clamp-4 md:line-clamp-6 mt-1">
          <ReactMarkdown>{pressProp.body}</ReactMarkdown>
        </div>
        <div>
          <Link
            href={`/communiques/${pressProp.link}`}
            className="text-orange-1 underline"
          >
            {t("read-more")}
          </Link>
        </div>
      </div>
    </div>
  );
}
