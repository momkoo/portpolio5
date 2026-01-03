"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (pathname === "/") {
                setScrolled(window.scrollY > 100);
            } else {
                setScrolled(true);
            }
        };

        // Initial check
        if (pathname !== "/") {
            setScrolled(true);
        } else {
            handleScroll();
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
                <div className="nav-container">
                    <Link href="/" className="nav-logo" onClick={closeMobileMenu}>
                        <span className="logo-korean">Studio Quiet Lux</span>
                        <span className="logo-english uppercase">Premium Retouching</span>
                    </Link>
                    <ul className="nav-menu" id="nav-menu">
                        <li>
                            <Link href="/about" className="nav-link">
                                소개
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="nav-link">
                                서비스
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="nav-link">
                                포트폴리오
                            </Link>
                        </li>
                        <li>
                            <Link href="/process" className="nav-link">
                                프로세스
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="nav-link">
                                가격 안내
                            </Link>
                        </li>
                        <li>
                            <Link href="/location" className="nav-link">
                                오시는 길
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="nav-link">
                                문의하기
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-actions">
                        <Link href="/contact" className="btn btn-primary nav-cta">
                            무료 견적 요청
                        </Link>
                        <button
                            className={`nav-toggle ${mobileMenuOpen ? "active" : ""}`}
                            id="nav-toggle"
                            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
                            onClick={toggleMobileMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link href="/about" className="nav-link" onClick={closeMobileMenu}>
                            소개
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="nav-link" onClick={closeMobileMenu}>
                            서비스
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="nav-link" onClick={closeMobileMenu}>
                            포트폴리오
                        </Link>
                    </li>
                    <li>
                        <Link href="/process" className="nav-link" onClick={closeMobileMenu}>
                            프로세스
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="nav-link" onClick={closeMobileMenu}>
                            가격 안내
                        </Link>
                    </li>
                    <li>
                        <Link href="/location" className="nav-link" onClick={closeMobileMenu}>
                            오시는 길
                        </Link>
                    </li>
                </ul>
                <Link
                    href="/contact"
                    className="btn btn-primary"
                    onClick={closeMobileMenu}
                >
                    무료 견적 요청
                </Link>
            </div>
        </>
    );
}
