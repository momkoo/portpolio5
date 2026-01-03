"use client";

import { useState } from "react";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import Link from "next/link";

const PORTFOLIO_ITEMS = [
    {
        category: "wedding",
        title: "서울 그랜드 Hyatt 웨딩",
        imageSrc: "https://i.ibb.co/xqTLtcPf/portfolio-wedding-1.jpg"
    },
    {
        category: "pre-wedding",
        title: "부산 해운대 프리웨딩",
        imageSrc: "https://i.ibb.co/sdsbLksH/portfolio-pre-wedding-1.jpg"
    },
    {
        category: "profile",
        title: "네이버 본사 프로필",
        imageSrc: "https://i.ibb.co/Tz83Y9f/portfolio-profile-1.jpg"
    },
    {
        category: "wedding",
        title: "코엑스 웨딩홀",
        imageSrc: "https://i.ibb.co/xqTLtcPf/portfolio-wedding-1.jpg"
    },
    {
        category: "pre-wedding",
        title: "서울숲 프라이빗",
        imageSrc: "https://i.ibb.co/sdsbLksH/portfolio-pre-wedding-1.jpg"
    },
    {
        category: "wedding",
        title: "백제 호텔 그랜드볼룸",
        imageSrc: "https://i.ibb.co/xqTLtcPf/portfolio-wedding-1.jpg"
    },
    // New Items for pagination demo (Shuffled images to show page change)
    {
        category: "wedding",
        title: "신라호텔 다이너스티",
        imageSrc: "https://i.ibb.co/sdsbLksH/portfolio-pre-wedding-1.jpg" // Swapped
    },

    {
        category: "profile",
        title: "전문직 프로필",
        imageSrc: "https://i.ibb.co/xqTLtcPf/portfolio-wedding-1.jpg" // Swapped
    },
    {
        category: "wedding",
        title: "야외 웨딩 스냅",
        imageSrc: "https://i.ibb.co/Tz83Y9f/portfolio-profile-1.jpg" // Swapped
    },
];

interface PortfolioProps {
    limit?: number;
    enablePagination?: boolean;
    itemsPerPage?: number;
}

export default function Portfolio({ limit, enablePagination = false, itemsPerPage = 6 }: PortfolioProps) {
    const [activeFilter, setActiveFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const allItems =
        activeFilter === "all"
            ? PORTFOLIO_ITEMS
            : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (typeof window !== 'undefined') {
            const grid = document.getElementById('portfolio-grid');
            if (grid) {
                grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    let displayedItems = allItems;
    let totalPages = 0;

    if (limit) {
        displayedItems = allItems.slice(0, limit);
    } else if (enablePagination) {
        totalPages = Math.ceil(allItems.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        displayedItems = allItems.slice(startIndex, startIndex + itemsPerPage);
    }

    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <div className="section-header reveal">
                    <p className="section-label">Portfolio</p>
                    <h2 className="section-title">
                        실제 보정 <em>사례</em>
                    </h2>
                    <p className="section-description">
                        Studio Quiet Lux의 디테일한 보정 전후를 비교해보세요.
                    </p>
                </div>

                <div className="portfolio-filters reveal">
                    {["all", "wedding", "pre-wedding", "profile"].map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                            onClick={() => handleFilterChange(filter)}
                        >
                            {filter === "all" && "전체"}
                            {filter === "wedding" && "웨딩"}
                            {filter === "pre-wedding" && "프리웨딩"}
                            {filter === "profile" && "프로필"}
                        </button>
                    ))}
                </div>

                <div
                    className={`portfolio-grid ${limit || enablePagination ? 'grid-2-cols' : ''}`}
                    id="portfolio-grid"
                    style={limit || enablePagination ? { gridTemplateColumns: 'repeat(2, 1fr)' } : {}}
                >
                    {displayedItems.map((item, index) => (
                        <div key={index} className="reveal active">
                            <BeforeAfterSlider
                                category={item.category}
                                title={item.title}
                                imageSrc={item.imageSrc}
                            />
                        </div>
                    ))}
                </div>

                {enablePagination && totalPages > 1 && (
                    <div className="pagination-controls reveal active" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid var(--color-border)',
                                borderRadius: '4px',
                                opacity: currentPage === 1 ? 0.5 : 1,
                                cursor: currentPage === 1 ? 'default' : 'pointer',
                                background: 'transparent'
                            }}
                        >
                            &lt;
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                style={{
                                    padding: '8px 16px',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '4px',
                                    backgroundColor: currentPage === page ? 'var(--color-secondary)' : 'transparent',
                                    color: currentPage === page ? 'white' : 'inherit',
                                    fontWeight: currentPage === page ? 'bold' : 'normal',
                                    cursor: 'pointer'
                                }}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid var(--color-border)',
                                borderRadius: '4px',
                                opacity: currentPage === totalPages ? 0.5 : 1,
                                cursor: currentPage === totalPages ? 'default' : 'pointer',
                                background: 'transparent'
                            }}
                        >
                            &gt;
                        </button>
                    </div>
                )}

                {!enablePagination && (
                    <div className="portfolio-more reveal">
                        <Link href="/portfolio" className="btn btn-outline">
                            {limit ? "더 많은 사례 보기" : "문의하기"}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
