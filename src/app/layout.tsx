import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/running/header";
import Footer from "@/components/running/footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  applicationName: "70e-schefferville",
  title: {
    template: '%s | Célébrons le 70e anniversaire de la Ville de Schefferville ensemble',
    default: "Accueil"
  },
  description: "Célébrons le 70e anniversaire de la Ville de Schefferville ensemble",
  keywords: "Schefferville, Ville de Schefferville, Anniversaire, 70, 70ième, Matimekush"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} ${dmSans.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
