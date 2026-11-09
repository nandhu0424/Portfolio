"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
            { threshold: 0.25 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="section-padding bg-[#F4F5F7]" aria-label="Skill Proficiency">
            <div className="container-custom" ref={ref}>
                <div className="ref-section-header">
                    <h2 className="section-title-main">Skill Proficiency</h2>
                    <span className="section-number">( 02 )</span>
                </div>
                <hr className="section-rule" />

                <div className="max-w-2xl mx-auto space-y-7">
                    {skills.map((skill, i) => (
                        <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2.5">
                                <span className="text-sm font-bold text-ink">{skill.name}</span>
                                <span className="text-sm font-bold text-accent">{skill.percentage}%</span>
                            </div>
                            <div
                                className="progress-track"
                                role="progressbar"
                                aria-valuenow={skill.percentage}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={`${skill.name} — ${skill.percentage}%`}
                            >
                                <div
                                    className="progress-fill"
                                    style={{
                                        width: animated ? `${skill.percentage}%` : "0%",
                                        transitionDelay: `${i * 0.1}s`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs text-ink-3 mt-8 italic">Self-assessed skill levels</p>
            </div>
        </section>
    );
}
