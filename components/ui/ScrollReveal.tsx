"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        // Small delay to allow DOM to update
        const timer = setTimeout(() => {
            const revealElements = document.querySelectorAll(".reveal, .fade-up");

            if ("IntersectionObserver" in window) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add("active");
                                // Once revealed, we don't un-reveal
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    {
                        threshold: 0.1,
                        rootMargin: "0px 0px -50px 0px",
                    }
                );

                revealElements.forEach((el) => observer.observe(el));
            } else {
                revealElements.forEach((el) => el.classList.add("active"));
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
