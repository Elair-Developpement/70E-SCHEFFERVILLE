import Link from "next/link";

export default function EventCard() {
  return (
    <div className="border-b-4 my-4 pb-2 border-green-2">
      <div className="flex">
        <h1 className="text-4xl font-bold text-orange-1">01</h1>
        <p className="text-xl font-bold ps-1 text-orange-1">Août</p>
      </div>
      <h1 className="text-xl font-bold text-green-1">
        Lancement du Musée Virtuel
      </h1>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula diam,
        viverra quis varius non, pharetra et diam.
      </p>
      <Link href="/events" className="text-orange-1 underline text-end pt-2">
        En savoir plus
      </Link>
    </div>
  );
}
