import HomeCarousel from "./(components)/homeCarousel";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="block pt-[5rem] px-2 md:container md:mx-auto md:max-w-[100rem]">
      <div className="hidden">
        <HomeCarousel />
      </div>
      <Image
        src="/logos/70e-Logo-V.png"
        alt="Logo vertical du 70e anniversaire de la Ville de Schefferville"
        width={4320}
        height={3745}
        className="object-contain w-4/5 h-auto mx-auto"
      />
      <div className="bg-teal-1 p-3 rounded-lg">
        <h1 className="text-center text-l font-bold text-white pb-2">
          Bienvenue sur le site du 70e anniversaire de la Ville de Schefferville
        </h1>
        <p className="text-justify text-white">
          TEXTE DINTRODUCTION Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut ligula diam, viverra quis varius non, pharetra et diam.
          Praesent ut est elit. Nulla fringilla semper tincidunt. Duis accumsan
          interdum placerat. Vestibulum facilisis vel tellus at pulvinar. Donec
          vel eros sed lacus dignissim feugiat. Pellentesque elit lectus, porta
          eu placerat ut, ultricies consequat tortor. In sed metus est. Nunc et
          tellus sapien. Praesent diam metus, scelerisque et eleifend sed,
          lobortis at ex. Integer ut rhoncus nisl. Nulla facilisi. Sed dictum
          diam a ipsum semper, id porta risus auctor. Vivamus ultricies orci sit
          amet diam malesuada, eu dapibus mauris tristique. Quisque porta
          rhoncus dictum. Praesent elementum velit a pulvinar iaculis.
        </p>
      </div>
      <div className="flex flex-col py-2">
        <h1 className="text-2xl text-blue-1 font-bold">Manchettes</h1>
        <h2 className="text-lg text-blue-2">Dernier communiqué</h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
          diam, viverra quis varius non, pharetra et diam.
        </p>
        <Link href="/press" className="text-orange-1 underline self-end pt-2">
          Voir tous les communiqués
        </Link>
      </div>
      <div>
        
      </div>
    </main>
  );
}
