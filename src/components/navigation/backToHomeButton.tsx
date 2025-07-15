import Link from "next/link";

import { useTranslations } from "next-intl";
import { ChevronLeft } from "lucide-react";

export default function BackToHomeButton() {
  const t = useTranslations("running");

  return (
    <Link href="/home" className="flex w-fit my-2 ">
      <ChevronLeft className="text-orange-1" />
      <span className="text-orange-1 underline ms-1">{t("back-home")}</span>
    </Link>
  );
}
