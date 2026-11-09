"use client";

import { technicalSkills } from "@/data/portfolio";

// SVG icon map keyed by category name
const CategoryIcon = ({ category }: { category: string }) => {
    const cls = "w-5 h-5 text-accent shrink-0";
    switch (category) {
        case "Frontend":
            return (
                <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3M3.375 19.5h17.25a1.125 1.125 0 001.125-1.125v-13.5A1.125 1.125 0 0020.625 3.75H3.375A1.125 1.125 0 002.25 4.875v13.5A1.125 1.125 0 003.375 19.5z" />
                </svg>
            );
        case "Backend":
            return (
                <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3M5.25 14.25V6.75m0 7.5h13.5V6.75M5.25 6.75a3 3 0 013-3h7.5a3 3 0 013 3" />
                </svg>
            );
        case "Full Stack":
            return (
                <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            );
        case "AI / Generative AI":
            return (
                <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
            );
        case "Databases":
            return (
                <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            );
        case "Tools":
        default:
            return (
                <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
            );
    }
};

export default function TechnicalSkills() {
    return (
        <section id="technical-skills" className="section-padding bg-white" aria-label="Technical Skills">
            <div className="container-custom">
                <div className="ref-section-header">
                    <h2 className="section-title-main">Technical Skills</h2>
                    <span className="section-number">( 03 )</span>
                </div>
                <hr className="section-rule" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {technicalSkills.map((cat) => (
                        <div key={cat.category} className="card p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                    <CategoryIcon category={cat.category} />
                                </div>
                                <h3 className="font-bold text-ink">{cat.category}</h3>
                            </div>
                            {cat.isLearning && (
                                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-1.5 mb-3 flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    Currently Learning
                                </p>
                            )}
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => {
                                    const isLearning = skill.includes("— Learning");
                                    const display = skill.replace(" — Learning", "");
                                    return (
                                        <span key={skill} className={`tech-tag ${isLearning ? "learning" : ""}`}>
                                            {isLearning ? `${display} ✦` : display}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs text-ink-3 mt-6 italic">✦ Actively learning — not production-level expertise</p>
            </div>
        </section>
    );
}
