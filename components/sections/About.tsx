import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header reveal">
                    <p className="section-label">About Us</p>
                    <h2 className="section-title">
                        한국적 미학을 담은
                        <br />
                        <em>자연스러운 보정</em>
                    </h2>
                </div>
                <div className="about-content">
                    <div className="about-image reveal">
                        <div className="image-frame">
                            <div style={{ position: "relative", width: "100%", aspectRatio: "4/5" }}>
                                <Image
                                    src="https://i.ibb.co/TDTMtWK7/about-story.jpg"
                                    alt="Studio Quiet Lux Brand Story"
                                    fill
                                    style={{ objectFit: "cover", borderRadius: "8px" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="about-text reveal">
                        <h3>Studio Quiet Lux 이야기</h3>
                        <p className="about-lead">
                            우리는 단순한 사진 보정을 넘어, 평생의 추억을 아름답게 간직할 수
                            있도록 돕습니다.
                        </p>
                        <p>
                            10년 이상의 경험을 가진 전문 보정팀은 한국인 피부를 자연스럽게
                            표현하고, Wedding Mood를 완벽하게 살려드립니다. 과도한 수정 없이
                            본연의 아름다움을 극대화하는 것이 우리의 철학입니다.
                        </p>
                        <ul className="about-features">
                            <li>
                                <span className="feature-icon">✦</span>
                                <span>한국인 피부 톤 전문 보정</span>
                            </li>
                            <li>
                                <span className="feature-icon">✦</span>
                                <span>자연스러운 색감과 감성 보정</span>
                            </li>
                            <li>
                                <span className="feature-icon">✦</span>
                                <span>웨딩 전문가 10년+ 경험</span>
                            </li>
                            <li>
                                <span className="feature-icon">✦</span>
                                <span>1:1 맞춤 피드백 시스템</span>
                            </li>
                        </ul>
                        <Link href="/contact" className="btn btn-primary">
                            보정 시작하기
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
