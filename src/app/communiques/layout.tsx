import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Communiqués"
};

export default function PressLayout({children}: {children: React.ReactNode}) {
return (
    <main>
           {children}
    </main>
)
}