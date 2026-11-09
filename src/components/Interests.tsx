"use client";

import { interests } from "@/data/portfolio";

export default function Interests() {
    return (
        <section id="interests" className="section-padding bg-white" aria-label="Interests">
            <div className="container-custom">
                <div className="ref-section-header">
                    <h2 className="section-title-main">Interests</h2>
                    <span className="section-number">( 09 )</span>
                </div>
                <hr className="section-rule" />

                {/* Display interests centered in one line without wrap */}
                <div className="flex justify-center flex-wrap md:flex-nowrap gap-5">
                    {interests.map((interest) => {
                        // Use modern SVG icons based on interest name instead of the old emojis
                        let Icon;
                        switch (interest.name) {
                            case "Listening to Music":
                                Icon = (
                                    <svg className="w-10 h-10 text-accent group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                    </svg>
                                );
                                break;
                            case "Playing Outdoor Games":
                                Icon = (
                                    <svg className="w-10 h-10 text-accent group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 10.5b5 5 0 01-10 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 10.5h16.5m-16.5 0a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75L12 12l3.75 3.75" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V3.75" />
                                    </svg>
                                );
                                break;
                            case "Gardening":
                            default:
                                Icon = (
                                    <svg className="w-10 h-10 text-accent group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0a4.5 4.5 0 00-4.5-4.5h-.75A4.5 4.5 0 0012 13m0 0a4.5 4.5 0 104.5-4.5h.75a4.5 4.5 0 10-5.25 4.5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9A3.75 3.75 0 0012 5.25" />
                                    </svg>
                                );
                        }

                        return (
                            <div key={interest.name} className="card px-8 py-6 flex flex-col items-center gap-4 group min-w-[160px] cursor-default bg-white border border-gray-100 hover:border-accent/30 shadow-sm hover:shadow-md transition-all">
                                {Icon}
                                <p className="text-sm font-semibold text-ink group-hover:text-accent transition-colors text-center">{interest.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
