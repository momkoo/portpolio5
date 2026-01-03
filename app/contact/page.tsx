import Contact from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Studio Quiet Lux",
    description: "무료 견적 요청 및 상담을 받아보세요.",
};

export default function ContactPage() {
    return (
        <main>
            <div style={{ marginTop: "80px" }}></div>
            <Contact />
        </main>
    );
}
