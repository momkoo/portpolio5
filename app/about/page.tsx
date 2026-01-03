import About from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Studio Quiet Lux",
    description: "한국적 미학을 담은 자연스러운 보정, Studio Quiet Lux의 이야기입니다.",
};

export default function AboutPage() {
    return (
        <main>
            {/* Add top padding to account for fixed navbar on non-home pages if needed, 
            or rely on the section padding. The section has padding-top. 
            However, Navbar is fixed. So we might need margin-top.
            Checking style.css: .section { padding: 120px 0; }
            Navbar height ~ 80px.
            So 120px padding is enough to clear the navbar?
            Yes.
        */}
            <div style={{ marginTop: "80px" }}></div>
            <About />
        </main>
    );
}
