import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Programmation",
};

export default function HomeLayout({children}: {children: React.ReactNode}) {
return (
    <main>
           {children}
    </main>
)
}