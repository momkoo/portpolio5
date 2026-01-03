import Services from "@/components/sections/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Studio Quiet Lux",
    description: "Studio Quiet Lux의 전문적인 사진 보정 서비스를 소개합니다.",
};

export default function ServicesPage() {
    return (
        <main>
            <div style={{ marginTop: "80px" }}></div>
            <Services />
        </main>
    );
}
