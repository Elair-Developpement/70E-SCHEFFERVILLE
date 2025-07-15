import Image from "next/image";

/**
 * Gros logo d'en-tête affiché sur la page d'accueil. S'ajuste automatiquement selon la taille de l'écran.
 * @returns JSX Element
 */
export default function Home70eLogo() {
  return (
    <>
      <Image
        src="/logos/70e-Logo-V.png"
        alt="Logo vertical du 70e anniversaire de la Ville de Schefferville"
        width={4320}
        height={3745}
        className="object-contain w-4/5 h-auto mx-auto md:hidden"
      />
      <Image
        src="/logos/70e-Logo-H.png"
        alt="Logo horizontal du 70e anniversaire de la Ville de Schefferville"
        width={6481}
        height={1988}
        className="object-contain w-5/6 h-auto mx-auto max-md:hidden"
      />
    </>
  );
}
