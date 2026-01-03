import Link from "next/link";

export default function Services() {
    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="section-header reveal">
                    <p className="section-label">Services</p>
                    <h2 className="section-title">
                        전문적인 <em>보정 서비스</em>
                    </h2>
                    <p className="section-description">
                        예비 신랑신부와 웨딩 전문가들을 위해 설계된
                        <br />
                        다양한 보정 서비스를 제공합니다
                    </p>
                </div>
                <div className="services-grid">
                    <div className="service-card reveal">
                        <div className="service-icon">
                            <svg
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="24"
                                    cy="24"
                                    r="20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M24 14v10l7 7"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <h3>스탠다드 보정</h3>
                        <p>
                            기본적인 색보정과 밝기 조절, 피부톤 보정을 통해 사진을
                            최적화합니다.
                        </p>
                        <ul className="service-list">
                            <li>색감 및 밝기 보정</li>
                            <li>피부톤 자연스럽게</li>
                            <li>잡티 제거 (기본)</li>
                            <li>납품: 3-5일</li>
                        </ul>
                        <Link href="/services" className="service-link">
                            자세히 보기 →
                        </Link>
                    </div>
                    <div className="service-card featured reveal">
                        <div className="featured-badge">Most Popular</div>
                        <div className="service-icon">
                            <svg
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="24"
                                    cy="24"
                                    r="20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M14 24l6 6 12-12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3>프리미엄 보정</h3>
                        <p>
                            스탠다드 보정 + 고급 보정으로 완벽한 웨딩 앨범을 만들어드립니다.
                        </p>
                        <ul className="service-list">
                            <li>스탠다드 전체 포함</li>
                            <li>고급 피부 보정</li>
                            <li>배경 보정 및 정렬</li>
                            <li>무제한 수정 반영</li>
                            <li>납품: 5-7일</li>
                        </ul>
                        <Link href="/services" className="service-link">
                            자세히 보기 →
                        </Link>
                    </div>
                    <div className="service-card reveal">
                        <div className="service-icon">
                            <svg
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="8"
                                    y="8"
                                    width="32"
                                    height="32"
                                    rx="4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <circle cx="18" cy="18" r="3" fill="currentColor" />
                                <path
                                    d="M8 38l10-10 6 6 12-12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3>알앤비 필터 적용</h3>
                        <p>
                            감성적인 R&B 필터를 적용하여 트렌디하고 감성적인 분위기를
                            연출합니다.
                        </p>
                        <ul className="service-list">
                            <li>감성 필터 적용</li>
                            <li>웹툰/에세이 스타일</li>
                            <li>카톤 필터 적용</li>
                            <li>납품: 2-3일</li>
                        </ul>
                        <Link href="/services" className="service-link">
                            자세히 보기 →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
