import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-background">
                <Image
                    src="https://i.ibb.co/1YmsQph5/hero-main.jpg"
                    alt="Studio Quiet Lux Wedding"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                />
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
                <p className="hero-subtitle fade-up">Premium Wedding Photo Retouching</p>
                <h1 className="hero-title fade-up">
                    당신의 소중한 순간을
                    <br />
                    <em>더 완벽하게</em>
                </h1>
                <p className="hero-description fade-up">
                    한국적 미학을 담은 자연스러운 보정으로
                    <br />
                    평생의 추억을 아름답게 간직하세요
                </p>
                <div className="hero-buttons fade-up">
                    <Link href="/portfolio" className="btn btn-white">
                        포트폴리오 보기
                    </Link>
                    <Link href="/contact" className="btn btn-outline-white">
                        무료 샘플 보정
                    </Link>
                </div>
            </div>

        </section>
    );
}
