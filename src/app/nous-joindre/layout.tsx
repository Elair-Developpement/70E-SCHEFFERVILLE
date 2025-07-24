import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Nous joindre",
};

export default function HomeLayout({children}: {children: React.ReactNode}) {
return (
    <main>
           {children}
    </main>
)
}