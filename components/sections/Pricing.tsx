import Link from "next/link";

export default function Pricing() {
    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <div className="section-header reveal">
                    <p className="section-label">Pricing</p>
                    <h2 className="section-title">
                        투명한 <em>가격 체계</em>
                    </h2>
                    <p className="section-description">
                        명확한 가격으로 추가 비용 없이 이용하세요
                    </p>
                </div>
                <div className="pricing-grid">
                    <div className="pricing-card reveal">
                        <div className="pricing-header">
                            <h3>스탠다드</h3>
                            <p className="pricing-desc">기본적인 보정이 필요할 때</p>
                        </div>
                        <div className="pricing-price">
                            <span className="price">협의 후 결정</span>
                            <span className="period">/ 건당</span>
                        </div>
                        <ul className="pricing-features">
                            <li>
                                <span className="check">✓</span> 색감 및 밝기 보정
                            </li>
                            <li>
                                <span className="check">✓</span> 피부톤 자연스럽게
                            </li>
                            <li>
                                <span className="check">✓</span> 기본 잡티 제거
                            </li>
                            <li>
                                <span className="check">✓</span> 2회 무료 수정
                            </li>
                            <li>
                                <span className="check">✓</span> 3-5일 납품
                            </li>
                            <li className="disabled">
                                <span className="x">×</span> 배경 보정
                            </li>
                            <li className="disabled">
                                <span className="x">×</span> 고급 피부 보정
                            </li>
                        </ul>
                        <Link href="/contact" className="btn btn-outline btn-full">
                            견적 요청하기
                        </Link>
                    </div>
                    <div className="pricing-card featured reveal">
                        <div className="featured-badge">Best Value</div>
                        <div className="pricing-header">
                            <h3>프리미엄</h3>
                            <p className="pricing-desc">완벽한 웨딩 앨범을 원할 때</p>
                        </div>
                        <div className="pricing-price">
                            <span className="price">협의 후 결정</span>
                            <span className="period">/ 건당</span>
                        </div>
                        <ul className="pricing-features">
                            <li>
                                <span className="check">✓</span> 스탠다드 전체 포함
                            </li>
                            <li>
                                <span className="check">✓</span> 고급 피부 보정
                            </li>
                            <li>
                                <span className="check">✓</span> 배경 보정 및 정렬
                            </li>
                            <li>
                                <span className="check">✓</span> 무제한 수정
                            </li>
                            <li>
                                <span className="check">✓</span> 5-7일 납품
                            </li>
                            <li>
                                <span className="check">✓</span> RAW 파일 처리
                            </li>
                            <li>
                                <span className="check">✓</span> 1:1 맞춤 피드백
                            </li>
                        </ul>
                        <Link href="/contact" className="btn btn-primary btn-full">
                            가장 인기있는 플랜
                        </Link>
                    </div>
                    <div className="pricing-card reveal">
                        <div className="pricing-header">
                            <h3>알앤비 필터</h3>
                            <p className="pricing-desc">감성적인 필터가 필요할 때</p>
                        </div>
                        <div className="pricing-price">
                            <span className="price">협의 후 결정</span>
                            <span className="period">/ 장당</span>
                        </div>
                        <ul className="pricing-features">
                            <li>
                                <span className="check">✓</span> R&B 필터 적용
                            </li>
                            <li>
                                <span className="check">✓</span> 웹툰/에세이 스타일
                            </li>
                            <li>
                                <span className="check">✓</span> 카톤 필터 적용
                            </li>
                            <li>
                                <span className="check">✓</span> 2회 무료 수정
                            </li>
                            <li>
                                <span className="check">✓</span> 2-3일 납품
                            </li>
                            <li className="disabled">
                                <span className="x">×</span> 색보정 포함
                            </li>
                            <li className="disabled">
                                <span className="x">×</span> 잡티 제거
                            </li>
                        </ul>
                        <Link href="/contact" className="btn btn-outline btn-full">
                            견적 요청하기
                        </Link>
                    </div>
                </div>
                <p className="pricing-note reveal">
                    * 정확한 가격은 사진 매수, 보정 범위, 납품 기한 등에 따라 달라질 수
                    있습니다.
                    <br />
                    무료 견적을 통해 정확한 가격을 확인해보세요.
                </p>
            </div>
        </section>
    );
}
