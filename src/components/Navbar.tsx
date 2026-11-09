"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-md shadow-black/5" : "bg-transparent"
                }`}
            aria-label="Main navigation"
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo badge */}
                    <a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
                        className="avatar-badge text-lg hover:scale-105 transition-transform"
                        aria-label="Nandhini N — Home"
                    >
                        N
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden lg:flex items-center gap-1" role="menubar">
                        {navLinks.map((link) => {
                            const id = link.href.replace("#", "");
                            const active = activeSection === id;
                            return (
                                <li key={link.href} role="none">
                                    <a
                                        href={link.href}
                                        role="menuitem"
                                        onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                                        className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-accent ${active ? "text-accent" : "text-ink-2 hover:text-ink"
                                            }`}
                                        aria-current={active ? "page" : undefined}
                                    >
                                        {link.label}
                                        {active && (
                                            <span className="block mx-auto mt-0.5 h-0.5 w-4 rounded-full bg-accent" />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA + hamburger */}
                    <div className="flex items-center gap-3">
                        <a
                            href="/resume"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline hidden md:inline-flex text-sm"
                            aria-label="View and download resume"
                        >
                            <DownloadIcon />
                            Download PDF Resume
                        </a>
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                        >
                            <span className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                            <span className={`block w-5 h-0.5 bg-ink my-1 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
                            <span className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden bg-white border-t border-border overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}>
                <ul className="container-custom py-4 flex flex-col gap-1">
                    {navLinks.map((link) => {
                        const id = link.href.replace("#", "");
                        const active = activeSection === id;
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                                    className={`block px-4 py-3 rounded-lg text-sm font-semibold ${active ? "text-accent bg-accent/5" : "text-ink-2 hover:bg-black/4"}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                    <li className="pt-2">
                        <a href="/resume" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
                            <DownloadIcon /> Download PDF Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function DownloadIcon() {
    return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
    );
}
