import type { Metadata } from "next";
import { Noto_Sans_KR, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./style.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-korean",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-english",
});

export const metadata: Metadata = {
  title: "Studio Quiet Lux | Premium Wedding Photo Retouching",
  description: "한국적 미학과 자연스러운 보정 스타일의 프리미엄 웨딩 사진 보정 서비스",
  openGraph: {
    title: "Studio Quiet Lux",
    description: "Premium Wedding Photo Retouching",
    type: "website",
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} ${playfairDisplay.variable} antialiased`}
      >
        <JsonLd />
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
