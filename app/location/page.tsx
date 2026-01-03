import Image from "next/image";

export default function LocationPage() {
    return (
        <main>
            <section className="section" style={{ paddingTop: "140px" }}>
                <div className="container">
                    <div className="section-header reveal active">
                        <p className="section-label">Location</p>
                        <h2 className="section-title">
                            오시는 <em>길</em>
                        </h2>
                        <p className="section-description">
                            Studio Quiet Lux에 방문하여<br />
                            직접 상담을 받아보세요.
                        </p>
                    </div>

                    <div className="location-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>

                        {/* Map Placeholder */}
                        <div className="map-wrapper reveal active" style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            backgroundColor: '#f0f0f0',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <div style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                                <p style={{ marginBottom: '10px', fontSize: '1.2rem' }}>🗺️</p>
                                <p>지도 영역 (Kakao/Google Map)</p>
                                <p style={{ fontSize: '0.8rem' }}>추후 실제 지도로 교체될 예정입니다</p>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="location-info reveal active" style={{ animationDelay: '0.2s' }}>
                            <div className="info-group" style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Address</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                                    서울특별시 강남구 테헤란로 123<br />
                                    (역삼동) 콰이어트 럭스 빌딩 3층
                                </p>
                            </div>

                            <div className="info-group" style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Contact</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                                    Email: help@quietlux.com<br />
                                    Tel: 010-1234-5678
                                </p>
                            </div>

                            <div className="info-group">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-primary)' }}>Open Hours</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                                    Mon - Fri: 10:00 AM - 07:00 PM<br />
                                    Sat: 11:00 AM - 05:00 PM<br />
                                    Sun & Holiday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
