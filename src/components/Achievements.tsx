"use client";

import { achievements } from "@/data/portfolio";

export default function Achievements() {
    return (
        <section id="achievements" className="section-padding bg-[#F4F5F7]" aria-label="Achievements">
            <div className="container-custom">
                <div className="ref-section-header">
                    <h2 className="section-title-main">Achievements</h2>
                    <span className="section-number">( 08 )</span>
                </div>
                <hr className="section-rule" />

                {/* Achievements */}
                <div className="grid md:grid-cols-3 gap-5 mb-12">
                    {achievements.map((ach, i) => (
                        <div key={i} className="card p-6 text-center group">
                            <div className="text-5xl mb-3 h-12 flex justify-center items-center" aria-hidden="true">
                                {String(ach.icon).startsWith("http") ? (
                                    <img src={ach.icon} alt="" className="w-12 h-12 object-contain" />
                                ) : (
                                    ach.icon
                                )}
                            </div>
                            <h3 className="font-bold text-ink mb-2 group-hover:text-accent transition-colors">{ach.title}</h3>
                            <p className="text-ink-2 text-sm leading-relaxed mb-4">{ach.description}</p>
                            <div className="space-y-1.5 text-left pt-4 border-t border-gray-100">
                                {ach.details.map((d) => (
                                    <div key={d.label} className="flex justify-between text-xs">
                                        <span className="text-ink-3">{d.label}</span>
                                        <span className={`font-bold ${d.value.includes("97") ? "text-accent" : "text-ink"}`}>{d.value}</span>
                                    </div>
                                ))}
                            </div>
                            {ach.note && <p className="text-xs text-ink-3 italic mt-2 text-left">{ach.note}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
