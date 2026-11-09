"use client";

import { personalInfo, aboutMe } from "@/data/portfolio";

export default function About() {
    return (
        <section id="about" className="section-padding bg-white" aria-label="About Me">
            <div className="container-custom">
                {/* Section header — reference style */}
                <div className="ref-section-header mb-0">
                    <h2 className="section-title-main">About Me</h2>
                    <span className="section-number">( 01 )</span>
                </div>
                <hr className="section-rule" />

                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    {/* Left — Text (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <p className="text-ink text-lg font-medium leading-relaxed">{aboutMe.intro}</p>
                        <p className="text-ink text-lg leading-relaxed">{aboutMe.body}</p>
                        <p className="text-ink text-lg leading-relaxed">{aboutMe.closing}</p>

                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <StatBox value="8.6" label="CGPA" />
                            <StatBox value="~97%" label="GATE Percentile" />
                            <StatBox value="6+" label="Projects" />
                        </div>
                        <p className="text-xs text-ink-3 italic">* Approx. GATE 2026 percentile (AIR 6271 / 2,11,020 candidates)</p>
                    </div>

                    {/* Right — Info card (2 cols) */}
                    <div className="lg:col-span-2 card p-6 space-y-4">
                        <h3 className="font-bold text-ink mb-4">Quick Info</h3>
                        <InfoRow label="Name" value={personalInfo.displayName} />
                        <InfoRow label="Location" value={personalInfo.location} />
                        <InfoRow label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
                        <InfoRow label="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
                        <InfoRow label="Degree" value="B.E. Computer Science & Engineering" />
                        <InfoRow label="University" value="Anna University" />
                        <InfoRow label="Batch" value="2023 – 2027" />
                        <div className="flex gap-2 pt-2">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center text-xs py-2">GitHub</a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center text-xs py-2">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatBox({ value, label }: { value: string; label: string }) {
    return (
        <div className="card p-4 text-center">
            <div className="text-2xl font-black text-accent">{value}</div>
            <div className="text-xs text-ink-3 mt-1">{label}</div>
        </div>
    );
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
    return (
        <div className="flex items-start gap-3 text-sm">
            <span className="w-20 flex-shrink-0 text-ink-3 text-xs uppercase tracking-wide font-semibold pt-0.5">{label}</span>
            {href
                ? <a href={href} className="text-ink hover:text-accent transition-colors break-all">{value}</a>
                : <span className="text-ink">{value}</span>
            }
        </div>
    );
}
