export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Studio Quiet Lux",
        "image": "https://i.ibb.co/1YmsQph5/hero-main.jpg",
        "description": "한국적 미학과 자연스러운 보정 스타일의 프리미엄 웨딩 사진 보정 서비스",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "강남대로 123",
            "addressLocality": "서울",
            "addressRegion": "KR",
            "postalCode": "06000",
            "addressCountry": "KR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.5665,
            "longitude": 126.9780
        },
        "url": "https://your-domain.com",
        "telephone": "+82-10-1234-5678",
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
