import Pricing from "@/components/sections/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | Studio Quiet Lux",
    description: "합리적이고 투명한 Studio Quiet Lux의 가격을 확인하세요.",
};

export default function PricingPage() {
    return (
        <main>
            <div style={{ marginTop: "80px" }}></div>
            <Pricing />
        </main>
    );
}
