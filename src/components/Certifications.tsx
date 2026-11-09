"use client";

import { certifications } from "@/data/portfolio";

export default function Certifications() {
    return (
        <section id="certifications" className="section-padding bg-white" aria-label="Certifications">
            <div className="container-custom">
                <div className="ref-section-header">
                    <h2 className="section-title-main">Certifications</h2>
                    <span className="section-number">( 07 )</span>
                </div>
                <hr className="section-rule" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {certifications.map((cert, i) => (
                        <div key={i} className="card p-5 group">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-ink text-sm leading-tight group-hover:text-accent transition-colors">{cert.name}</h3>
                                    <p className="text-ink-3 text-xs mt-1">{cert.organization}</p>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        {cert.score && (
                                            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
                                                Score: {cert.score}
                                            </span>
                                        )}
                                        {cert.achievement && (
                                            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100 flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                {cert.achievement}
                                            </span>
                                        )}
                                    </div>
                                    {cert.certificateUrl && cert.certificateUrl !== "#" && (
                                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer"
                                            className="text-xs text-accent hover:underline mt-2 inline-block">
                                            View Certificate →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
