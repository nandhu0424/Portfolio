"use client";

import { experience } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="section-padding bg-white" aria-label="Experience">
            <div className="container-custom">
                <div className="ref-section-header">
                    <h2 className="section-title-main">Experience</h2>
                    <span className="section-number">( 05 )</span>
                </div>
                <hr className="section-rule" />

                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent to-transparent hidden sm:block" aria-hidden="true" />

                    <div className="space-y-7">
                        {experience.map((exp, i) => (
                            <div key={i} className="sm:pl-16 relative">
                                {/* Dot */}
                                <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-accent bg-white hidden sm:flex items-center justify-center" aria-hidden="true">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                </div>

                                <div className="card p-6">
                                    <div className="flex flex-wrap gap-3 justify-between items-start mb-3">
                                        <div>
                                            <h3 className="font-bold text-ink text-base">{exp.role}</h3>
                                            <p className="text-accent text-sm font-semibold mt-0.5">{exp.company}</p>
                                            {exp.program && <p className="text-ink-3 text-xs">Program: {exp.program}</p>}
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/15">
                                                {exp.type}
                                            </span>
                                            <p className="text-ink-3 text-xs mt-1">{exp.duration}</p>
                                            <p className="text-ink-3 text-xs">📍 {exp.location}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 mt-2">
                                        {exp.bullets.map((b, j) => (
                                            <li key={j} className="flex gap-2 text-sm text-ink-2">
                                                <span className="text-accent mt-1 flex-shrink-0" aria-hidden="true">▸</span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
