import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("running");

  return (
    <footer className="flex w-full rounded-t-2xl mx-auto bg-blue-1 text-white py-4 mt-4 md:max-w-[80rem]">
      <div className="container mx-auto text-center">
        <p className="text-sm">Allo</p>
      </div>
    </footer>
  );
}
