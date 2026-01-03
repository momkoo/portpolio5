"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
    category: string;
    title: string;
    imageSrc: string;
}

export default function BeforeAfterSlider({
    category,
    title,
    imageSrc,
}: BeforeAfterSliderProps) {
    const [showAfter, setShowAfter] = useState(false);

    const handleClick = () => {
        setShowAfter(!showAfter);
    };

    return (
        <div className="portfolio-item" data-category={category}>
            <div
                className="before-after-slider"
                onClick={handleClick}
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    cursor: 'pointer',
                    borderRadius: '8px'
                }}
            >
                {/* Before Image (Grayscale) */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: showAfter ? 0 : 1,
                        transition: 'opacity 0.5s ease'
                    }}
                >
                    <Image
                        src={imageSrc}
                        alt={`${title} Before`}
                        fill
                        style={{ objectFit: "cover", filter: "grayscale(100%) brightness(0.9)" }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            background: 'rgba(0,0,0,0.6)',
                            color: 'white',
                            padding: '6px 14px',
                            borderRadius: 20,
                            fontSize: '0.8rem',
                            fontWeight: 500
                        }}
                    >
                        Before
                    </div>
                </div>

                {/* After Image (Color) */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: showAfter ? 1 : 0,
                        transition: 'opacity 0.5s ease'
                    }}
                >
                    <Image
                        src={imageSrc}
                        alt={`${title} After`}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            background: 'var(--color-secondary)',
                            color: 'white',
                            padding: '6px 14px',
                            borderRadius: 20,
                            fontSize: '0.8rem',
                            fontWeight: 600
                        }}
                    >
                        After
                    </div>
                </div>

                {/* Toggle Hint */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(255,255,255,0.9)',
                        color: '#333',
                        padding: '8px 16px',
                        borderRadius: 20,
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    클릭하여 {showAfter ? 'Before' : 'After'} 보기
                </div>
            </div>
            <div className="portfolio-info">
                <span className="portfolio-category">
                    {category === "wedding" && "웨딩"}
                    {category === "pre-wedding" && "프리웨딩"}
                    {category === "profile" && "프로필"}
                </span>
                <h4>{title}</h4>
            </div>
        </div>
    );
}
