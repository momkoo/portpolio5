import Portfolio from "@/components/sections/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Studio Quiet Lux",
    description: "Studio Quiet Lux의 실제 보정 사례를 확인하세요.",
};

export default function PortfolioPage() {
    return (
        <main>
            <div style={{ marginTop: "80px" }}></div>
            <Portfolio enablePagination={true} itemsPerPage={4} />
        </main>
    );
}
