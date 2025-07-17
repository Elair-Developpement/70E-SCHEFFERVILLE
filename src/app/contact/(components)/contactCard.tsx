import Image from "next/image";

import { useTranslations } from "next-intl";

interface Props {
  photo: string;
  name: string;
  title: string;
  email: string;
  phone: string;
}

export default function ContactCard(props: Props) {
  const t = useTranslations("contact");

  return (
    <div className="flex">
      <Image
        src={`/images/contact/${props.photo}`}
        alt={props.name}
        width={666}
        height={1000}
        className="object-cover w-2/5 h-fit rounded-2xl md:max-w-1/5"
      />
      <div className="flex flex-col justify-center ps-2 md:ps-6 w-3/5 gap-1 md:gap-2">
        <h3 className="text-2xl md:text-4xl font-bold text-blue-1">
          {props.name}
        </h3>
        <p className="text-lg md:text-2xl text-blue-2">{props.title}</p>
        <div className="max-md:flex-2 md:flex-row md:flex-nowrap wrap-break-word text-lg md:text-2xl">
          <p className="w-fit">{t("email")}</p>
          <a
            href={`mailto:${props.email}`}
            target="_blank"
            className="font-bold text-orange-1 underline "
          >
            {props.email}
          </a>
        </div>
        <div className="max-md:flex-2 md:flex-row md:flex-nowrap wrap-break-word text-lg md:text-2xl">
          <p className="w-fit">{t("phone")}</p>
          <a
            href={`tel:${props.phone}`}
            target="_blank"
            className="font-bold text-orange-1 underline"
          >
            {props.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
