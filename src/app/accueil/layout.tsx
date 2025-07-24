import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Accueil",
};

export default function HomeLayout({children}: {children: React.ReactNode}) {
return (
    <main>
           {children}
    </main>
)
}