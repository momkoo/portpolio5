import Process from "@/components/sections/Process";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Process | Studio Quiet Lux",
    description: "쉽고 빠른 Studio Quiet Lux의 보정 프로세스입니다.",
};

export default function ProcessPage() {
    return (
        <main>
            <div style={{ marginTop: "80px" }}></div>
            <Process />
        </main>
    );
}
