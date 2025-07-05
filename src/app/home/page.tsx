import Header from "@/components/running/header";
import HomeCarousel from "./(components)/homeCarousel";

export default function Home() {
  return (
    <main className="container mx-auto pt-70">
      <Header />
      <HomeCarousel />
      <p>Hello World !</p>
      <h1>Bienvenue sur le site de la 70e Schefferville</h1>
    </main>
  );
}
