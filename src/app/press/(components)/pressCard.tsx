import Image from "next/image";

import IPress from "@/lib/types/iPress";

export default function PressCard(pressProp: IPress) {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-center text-lg font-bold text-green-1">
        {pressProp.title}
      </h1>
      <Image
        src={pressProp.image_link}
        alt={pressProp.title}
        width={1}
        height={1}
        className=""
      />
    </div>
  );
}
