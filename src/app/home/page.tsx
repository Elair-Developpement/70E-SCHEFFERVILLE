import Header from "@/components/running/header";
import HomeCarousel from "./(components)/homeCarousel";

export default function Home() {
  return (
    <main className="block md:container md:mx-auto md:max-w-[100rem] pt-90">
      <HomeCarousel />
      <p>Hello World !</p>
      <h1>Bienvenue sur le site de la 70e Schefferville</h1>
    </main>
  );
}
