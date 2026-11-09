"use client";

import { education } from "@/data/portfolio";

export default function Education() {
    return (
        <section id="education" className="section-padding bg-[#F4F5F7]" aria-label="Education">
            <div className="container-custom">
                <div className="ref-section-header">
                    <h2 className="section-title-main">Education</h2>
                    <span className="section-number">( 04 )</span>
                </div>
                <hr className="section-rule" />

                <div className="max-w-3xl mx-auto space-y-5">
                    {education.map((edu, i) => (
                        <div key={i} className="card p-6 flex gap-5 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20" aria-hidden="true">
                                {edu.type === "University" ? (
                                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                    </svg>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                    <h3 className="font-bold text-ink">{edu.degree}</h3>
                                    <span className="px-3 py-0.5 rounded-full text-sm font-bold text-accent bg-accent/10 border border-accent/15 flex-shrink-0">
                                        {edu.score}
                                    </span>
                                </div>
                                <p className="text-accent text-sm font-semibold">{edu.institution}</p>
                                {edu.affiliation && <p className="text-ink-3 text-xs mt-0.5">{edu.affiliation}</p>}
                                <p className="text-ink-3 text-xs mt-1 flex items-center gap-1">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                                    </svg>
                                    {edu.duration}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
