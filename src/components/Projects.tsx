"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/portfolio";

export default function Projects() {
    const [filter, setFilter] = useState<"all" | "featured">("all");
    const list = filter === "featured" ? projects.filter((p) => p.isFeatured) : projects;

    return (
        <section id="projects" className="section-padding bg-[#F4F5F7]" aria-label="Projects">
            <div className="container-custom">
                <div className="ref-section-header mb-0">
                    <h2 className="section-title-main">Projects</h2>
                    <span className="section-number">( 06 )</span>
                </div>
                <hr className="section-rule" />

                {/* Filter */}
                <div className="flex gap-3 mb-8" role="tablist">
                    {(["all", "featured"] as const).map((f) => (
                        <button
                            key={f}
                            role="tab"
                            aria-selected={filter === f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${filter === f
                                ? "bg-accent text-white shadow-accent"
                                : "bg-white text-ink-2 border border-border hover:border-accent hover:text-accent"
                                }`}
                        >
                            {f === "all" ? "All Projects" : "Featured"}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {list.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [imgErr, setImgErr] = useState(false);
    return (
        <article className="card overflow-hidden group flex flex-col" aria-label={`Project: ${project.title}`}>
            {/* Image */}
            <div className="relative h-44 bg-[#F4F5F7] overflow-hidden">
                {!imgErr ? (
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                        onError={() => setImgErr(true)}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-ink-3">
                        <span className="text-4xl mb-1.5" aria-hidden="true">💻</span>
                        <span className="text-xs">Screenshot coming soon</span>
                    </div>
                )}
                <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-0.5 text-xs font-semibold bg-white/90 text-ink rounded">
                        {project.type}
                    </span>
                    {project.isCurrentProject && (
                        <span className="px-2 py-0.5 text-xs font-bold bg-green-100 text-green-700 border border-green-200 rounded flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                            In Progress
                        </span>
                    )}
                </div>
                <div className="absolute bottom-2 right-3 text-4xl font-black text-black/5">
                    {String(index + 1).padStart(2, "0")}
                </div>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-ink text-base mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-ink-2 text-sm leading-relaxed mb-3 flex-1">{project.description}</p>

                {project.features.length > 0 && (
                    <ul className="mb-3 space-y-0.5">
                        {project.features.slice(0, 3).map((f) => (
                            <li key={f} className="text-xs text-ink-3 flex gap-2">
                                <span className="text-accent" aria-hidden="true">›</span>{f}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>

                <div className="flex gap-2 mt-auto">
                    <a href={project.githubUrl} target={project.githubUrl !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                        className="btn-outline flex-1 justify-center text-xs py-2" aria-label={`${project.title} source code`}>
                        <GHIcon /> Code
                    </a>
                    <a href={project.liveUrl} target={project.liveUrl !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                        className="btn-accent flex-1 justify-center text-xs py-2" aria-label={`${project.title} live demo`}>
                        <ExtIcon /> Demo
                    </a>
                </div>
            </div>
        </article>
    );
}

function GHIcon() {
    return <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>;
}
function ExtIcon() {
    return <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;
}
