import Image from "next/image";

import { useTranslations } from "next-intl";

interface Contact {
  photo: string;
  name: string;
  title: string;
  email: string;
  phone: string;
}

export default function ContactCard({
  photo,
  name,
  title,
  email,
  phone,
}: Contact) {
  const t = useTranslations("contact");

  return (
    <div className="flex">
      <Image
        src={`/images/contact/${photo}`}
        alt={name}
        width={666}
        height={1000}
        className="w-2/5 rounded-2xl md:max-w-1/5"
      />
      <div className="flex flex-col justify-center ps-2 md:ps-6 w-3/5 gap-1 md:gap-2">
        <h3 className="text-2xl md:text-4xl font-bold text-blue-1">{name}</h3>
        <p className="text-lg md:text-2xl text-blue-2">{title}</p>
        <div className="max-md:flex-2 md:flex-row md:flex-nowrap wrap-break-word text-lg md:text-2xl">
          <p className="w-fit">{t("email")}</p>
          <a
            href={`mailto:${email}`}
            target="_blank"
            className="font-bold text-orange-1 underline "
          >
            {email}
          </a>
        </div>
        <div className="max-md:flex-2 md:flex-row md:flex-nowrap wrap-break-word text-lg md:text-2xl">
          <p className="w-fit">{t("phone")}</p>
          <a
            href={`tel:${phone}`}
            target="_blank"
            className="font-bold text-orange-1 underline"
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}
