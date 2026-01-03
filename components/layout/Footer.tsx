import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-korean">Studio Quiet Lux</span>
                            <span className="logo-english uppercase">Premium Retouching</span>
                        </div>
                        <p className="footer-desc">
                            프리미엄 웨딩 사진 보정 서비스
                            <br />
                            한국적 미학을 담은 자연스러운 보정
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Instagram">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="18" cy="6" r="1" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="KakaoTalk">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12c0 3.69 2.47 6.86 6 8.25V22l3.5-2c.5.14 1.02.22 1.5.22 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Blog">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>서비스</h4>
                            <ul>
                                <li>
                                    <Link href="/services">스탠다드 보정</Link>
                                </li>
                                <li>
                                    <Link href="/services">프리미엄 보정</Link>
                                </li>
                                <li>
                                    <Link href="/services">알앤비 필터</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>회사 정보</h4>
                            <ul>
                                <li>
                                    <Link href="/about">스튜디오 소개</Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">포트폴리오</Link>
                                </li>
                                <li>
                                    <Link href="/location">오시는 길</Link>
                                </li>
                                <li>
                                    <Link href="/testimonials">고객 후기</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>고객 지원</h4>
                            <ul>
                                <li>
                                    <Link href="/contact">견적 요청</Link>
                                </li>
                                <li>
                                    <Link href="/process">보정 프로세스</Link>
                                </li>
                                <li>
                                    <Link href="/pricing">가격 안내</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Studio Quiet Lux. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link href="/terms">이용약관</Link>
                        <Link href="/privacy">개인정보처리방침</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
