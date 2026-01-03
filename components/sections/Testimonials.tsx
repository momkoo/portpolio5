"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const TESTIMONIALS = [
    {
        text: "예식 전 프리웨딩 영상을 맡겼는데, 생각보다 훨씬 감성적으로 보정해주셨어요. 색감이 너무 예뻐서 바로 저장했네요! 다음에도 꼭 이용할게요.",
        author: "김*현",
        type: "프리웨딩 보정",
        avatar: "김",
        rating: 5,
    },
    {
        text: "웨딩포토 500장 보정을 맡겼는데, 빠른 시일 내에 너무 깔끔하게 해주셨어요. 피부톤이 정말 자연스럽고, 군살이나 잡티도 예쁘게 보정해주셔서 대만족입니다!",
        author: "이*영",
        type: "웨딩 사진 보정",
        avatar: "이",
        rating: 5,
    },
    {
        text: "소셜 미디어용 프로필 사진 보정을 맡겼는데, 진짜 너무 만족스러워요! 과도하지 않게 보정해주셔서 자연스러운 매력이 살아있습니다.",
        author: "박*수",
        type: "프로필 보정",
        avatar: "박",
        rating: 4,
    },
    {
        text: "웨딩 포토그래퍼로서 많은 보정업체를 이용했는데, Studio Quiet Lux는 특히 한국인 피부톤 보정이 뛰어납니다. 고객님들도 항상 만족하시네요!",
        author: "장*호",
        type: "웨딩 포토그래퍼",
        avatar: "장",
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(1);
    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const getCardsPerView = useCallback(() => {
        if (typeof window === "undefined") return 1;
        const width = window.innerWidth;
        if (width <= 640) return 1;
        if (width <= 1024) return 2;
        return 3;
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setCardsPerView(getCardsPerView());
        };
        handleResize(); // Init
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [getCardsPerView]);

    useEffect(() => {
        // Auto play
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, cardsPerView]); // Depend on current state

    const nextSlide = () => {
        const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const prevSlide = () => {
        const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const goToSlide = (index: number) => {
        const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);
        setCurrentIndex(Math.min(index, maxIndex));
    };

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="section-header reveal">
                    <p className="section-label">Testimonials</p>
                    <h2 className="section-title">
                        고객님들의 <em>실제 후기</em>
                    </h2>
                    <p className="section-description">
                        Studio Quiet Lux를 이용하신 고객들의 생생한 후기를 확인하세요
                    </p>
                </div>
                <div className="testimonials-slider reveal" id="testimonials-slider" ref={sliderRef}>
                    <div
                        className="testimonial-track"
                        id="testimonial-track"
                        ref={trackRef}
                        style={{
                            transform: `translateX(-${currentIndex * (trackRef.current?.children[0]?.clientWidth || 0)}px)`,
                            // Note: The original JS used offsetWidth + 30. We need to match that.
                            // React way: Use calc or dynamic style. Simpler: Update style via useEffect or assume fixed width.
                            // Better: Use styling class or just rely on CSS grid if we can.
                            // Let's stick to the inline style logic using state.
                            // We'll calculate offset in render or effect.
                        }}
                    >
                        {/* 
               Issue: Reading clientWidth in render is bad. 
               Correction: We'll put the translate logic in style map, assuming card width is consistent.
               The CSS defines card width. 
               
               Actually, let's use the same logic as main.js: 
               translateX(-${currentIndex * cardWidth}px) where cardWidth = card.offsetWidth + 30
            */}
                        <ClientSideTrack
                            currentIndex={currentIndex}
                            testimonials={TESTIMONIALS}
                        />
                    </div>
                    <div className="slider-controls">
                        <button
                            className="slider-btn prev"
                            id="slider-prev"
                            aria-label="이전 후기"
                            onClick={prevSlide}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <div className="slider-dots" id="slider-dots">
                            {Array.from({ length: Math.max(1, TESTIMONIALS.length - cardsPerView + 1) }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`slider-dot ${i === currentIndex ? "active" : ""}`}
                                    onClick={() => goToSlide(i)}
                                    aria-label={`후기 ${i + 1}로 이동`}
                                />
                            ))}
                        </div>
                        <button
                            className="slider-btn next"
                            id="slider-next"
                            aria-label="다음 후기"
                            onClick={nextSlide}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="social-proof reveal">
                    <div className="instagram-embed">
                        <p>📸 Instagram에서 더 많은 사례 보기</p>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            className="instagram-link"
                        >
                            @studio_quiet_lux
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ClientSideTrack({ currentIndex, testimonials }: { currentIndex: number, testimonials: any[] }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (trackRef.current && trackRef.current.firstElementChild) {
                // @ts-ignore
                setCardWidth(trackRef.current.firstElementChild.offsetWidth + 30);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <div
            className="testimonial-track-inner"
            ref={trackRef}
            style={{
                display: 'flex',
                gap: '30px',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${currentIndex * cardWidth}px)`
            }}
        >
            {testimonials.map((t, i) => (
                <div className="testimonial-card" key={i}>
                    <div className="testimonial-rating">
                        {Array.from({ length: 5 }).map((_, r) => (
                            <span key={r}>{r < t.rating ? "★" : "☆"}</span>
                        ))}
                    </div>
                    <p className="testimonial-text">"{t.text}"</p>
                    <div className="testimonial-author">
                        <div className="author-avatar">{t.avatar}</div>
                        <div className="author-info">
                            <strong>{t.author}</strong>
                            <span>{t.type}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
