import PrintButton from "./PrintButton";
import {
    personalInfo,
    education,
    experience,
    achievements,
    hackathons,
    certifications,
    technicalSkills,
} from "@/data/portfolio";

export const metadata = {
    title: `Resume — ${personalInfo.displayName}`,
    description: `Professional resume of ${personalInfo.displayName}`,
};

export default function ResumePage() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* ── Page/print setup ── */
        @page {
          size: A4 portrait;
          margin: 0;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: #d1d5db;
          font-family: 'Inter', Arial, sans-serif;
        }

        /* ── A4 sheet wrapper ── */
        .a4 {
          width: 210mm;
          height: 297mm;
          margin: 24px auto;
          background: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(0,0,0,0.18);
        }

        /* ── Colour strip header ── */
        .r-header {
          background: #0F172A;
          color: #fff;
          padding: 14px 22px 12px;
          flex-shrink: 0;
        }
        .r-header h1 {
          font-size: 18pt;
          font-weight: 700;
          letter-spacing: 0.06em;
          line-height: 1.1;
        }
        .r-header .role {
          font-size: 8.5pt;
          color: #F94D00;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-top: 2px;
        }
        .r-header .contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 6px;
          font-size: 7.5pt;
          color: #94A3B8;
        }
        .r-header .contacts a { color: #F94D00; text-decoration: none; }

        /* ── Two-column body ── */
        .r-body {
          display: grid;
          grid-template-columns: 62% 38%;
          flex: 1;
          overflow: hidden;
        }

        /* ── Left column ── */
        .r-left {
          padding: 12px 14px 10px 22px;
          border-right: 1px solid #E2E8F0;
          overflow: hidden;
        }

        /* ── Right column ── */
        .r-right {
          padding: 12px 16px 10px 14px;
          background: #F8FAFC;
          overflow: hidden;
        }

        /* ── Section ── */
        .r-section { margin-bottom: 9px; }
        .r-section:last-child { margin-bottom: 0; }

        .sec-title {
          font-size: 7pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #F94D00;
          margin-bottom: 3px;
        }
        .sec-rule {
          border: none;
          border-top: 1px solid #E2E8F0;
          margin-bottom: 5px;
        }

        /* ── Typography ── */
        .txt { font-size: 7.8pt; color: #334155; line-height: 1.45; }
        .txt-sm { font-size: 7pt; color: #64748B; line-height: 1.4; }
        .txt-accent { color: #F94D00; font-weight: 600; }
        strong { font-weight: 600; color: #0F172A; }

        /* ── Entry (exp / project) ── */
        .entry { margin-bottom: 7px; }
        .entry:last-child { margin-bottom: 0; }
        .entry-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 4px;
        }
        .entry-head .title { font-size: 8pt; font-weight: 600; color: #0F172A; }
        .entry-head .date { font-size: 7pt; color: #94A3B8; white-space: nowrap; flex-shrink: 0; }
        .entry-sub { font-size: 7pt; color: #F94D00; font-weight: 600; margin-bottom: 2px; }
        .entry-sub2 { font-size: 7pt; color: #64748B; margin-bottom: 2px; }
        ul.dots { padding-left: 10px; }
        ul.dots li {
          font-size: 7.2pt;
          color: #334155;
          line-height: 1.4;
          margin-bottom: 1.5px;
        }
        ul.dots li::marker { color: #F94D00; }

        /* ── Education rows ── */
        .edu-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          gap: 4px;
        }
        .edu-row:last-child { margin-bottom: 0; }
        .edu-name { font-size: 7.8pt; font-weight: 600; color: #0F172A; }
        .edu-deg { font-size: 7pt; color: #475569; }
        .edu-score { font-size: 7.8pt; font-weight: 700; color: #F94D00; text-align: right; white-space: nowrap; }
        .edu-yr { font-size: 7pt; color: #94A3B8; text-align: right; }

        /* ── Skill tags ── */
        .skill-group { margin-bottom: 5px; }
        .skill-group:last-child { margin-bottom: 0; }
        .skill-label { font-size: 7pt; font-weight: 600; color: #0F172A; margin-bottom: 2px; }
        .tags { display: flex; flex-wrap: wrap; gap: 2.5px; }
        .tag {
          font-size: 6.5pt;
          background: #FFF0EA;
          color: #9A2900;
          border: 1px solid rgba(249,77,0,0.2);
          border-radius: 3px;
          padding: 1px 5px;
          font-weight: 500;
        }
        .tag.blue {
          background: #EFF6FF;
          color: #1D4ED8;
          border-color: rgba(29,78,216,0.2);
        }
        .tag.green {
          background: #F0FDF4;
          color: #15803D;
          border-color: rgba(21,128,61,0.2);
        }

        /* ── Achievements ── */
        .ach-item { margin-bottom: 5px; }
        .ach-item:last-child { margin-bottom: 0; }
        .ach-name { font-size: 7.8pt; font-weight: 600; color: #0F172A; }
        .ach-val { font-size: 7pt; color: #334155; }

        /* ── Print: remove browser chrome ── */
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0 !important; padding: 0 !important; }
          .a4 {
            margin: 0;
            box-shadow: none;
            width: 210mm;
            height: 297mm;
          }
        }
      `}</style>

            <PrintButton />

            <div className="a4">
                {/* ── HEADER ── */}
                <header className="r-header">
                    <h1>{personalInfo.name}</h1>
                    <p className="role">{personalInfo.title}</p>
                    <div className="contacts">
                        <span>📍 {personalInfo.location}</span>
                        <span>📞 +91 {personalInfo.phone}</span>
                        <span>✉️ <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/nandhini-n-43532633b</a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">github.com/nandhu0424</a>
                    </div>
                </header>

                {/* ── BODY ── */}
                <div className="r-body">
                    {/* ══ LEFT ══ */}
                    <div className="r-left">
                        {/* Summary */}
                        <div className="r-section">
                            <p className="sec-title">Professional Summary</p>
                            <hr className="sec-rule" />
                            <p className="txt">
                                Computer Science &amp; Engineering student with hands-on experience in full-stack development
                                (MERN, Python, FastAPI) and Generative AI. Passionate about building scalable, practical
                                applications. GATE 2026 qualified (AIR 6271 / ~97 percentile). Seeking software development
                                and full-stack opportunities.
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="r-section">
                            <p className="sec-title">Internship</p>
                            <hr className="sec-rule" />
                            {experience.map((exp, i) => (
                                <div key={i} className="entry">
                                    <div className="entry-head">
                                        <span className="title">{exp.role}</span>
                                        <span className="date">{exp.duration}</span>
                                    </div>
                                    <p className="entry-sub">{exp.company}{exp.program ? ` — ${exp.program}` : ""}</p>
                                    <ul className="dots">
                                        {exp.bullets.slice(0, 3).map((b, j) => <li key={j}>{b}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Projects */}
                        <div className="r-section">
                            <p className="sec-title">Projects</p>
                            <hr className="sec-rule" />
                            <div className="entry">
                                <div className="entry-head">
                                    <span className="title">AI-Powered College Knowledge Assistant</span>
                                    <span className="date">In Progress</span>
                                </div>
                                <p className="entry-sub2">Python · FastAPI · LangChain · LangGraph · Qdrant · Redis</p>
                                <ul className="dots">
                                    <li>RAG-based assistant for institutional document Q&A with semantic search &amp; hallucination guardrails.</li>
                                    <li>Role-based access control, query caching, and offline-capable knowledge retrieval pipeline.</li>
                                </ul>
                            </div>
                            <div className="entry">
                                <div className="entry-head">
                                    <span className="title">Lifeline360 — Digital Health Management Platform</span>
                                    <span className="date">2024–25</span>
                                </div>
                                <p className="entry-sub2">React · Node.js · Express.js · MongoDB</p>
                                <ul className="dots">
                                    <li>Comprehensive PHC operations platform: OPD, attendance, immunization, medicine stock &amp; analytics.</li>
                                    <li>Role-based dashboards for PHC staff and DDHS; automated email alerts for attendance &amp; stock.</li>
                                </ul>
                            </div>
                            <div className="entry">
                                <div className="entry-head">
                                    <span className="title">AI-Based Personalized Drug Interaction Risk Prediction</span>
                                    <span className="date">Team: The Exception</span>
                                </div>
                                <p className="entry-sub2">React.js (Vite) · Node.js · Express.js · MongoDB · Python Flask · Java Swing</p>
                                <ul className="dots">
                                    <li>Detects dangerous drug interactions using FP-Growth pattern mining &amp; Random Forest ML model.</li>
                                    <li>Patient-specific risk prediction (age, gender, allergies) with color-coded risk levels (Low→Critical).</li>
                                    <li>Java Swing offline analysis module; secured with Helmet, Rate Limiting &amp; CORS.</li>
                                </ul>
                            </div>
                            <div className="entry">
                                <div className="entry-head">
                                    <span className="title">Offline-First Smart Library Management System</span>
                                    <span className="date">🏆 3rd Prize</span>
                                </div>
                                <p className="entry-sub2">Flutter · React.js · Flask · MongoDB · SQLite · JWT</p>
                                <ul className="dots">
                                    <li>Flutter mobile app with SQLite offline caching; auto-syncs to MongoDB via Flask REST API.</li>
                                    <li>QR attendance, barcode book renting, automated fines &amp; reservations.</li>
                                    <li>React admin dashboard with analytics, role-based access &amp; JWT authentication.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ══ RIGHT ══ */}
                    <div className="r-right">
                        {/* Education */}
                        <div className="r-section">
                            <p className="sec-title">Education</p>
                            <hr className="sec-rule" />
                            {education.map((edu, i) => (
                                <div key={i} className="edu-row">
                                    <div>
                                        <p className="edu-name">{edu.institution}</p>
                                        <p className="edu-deg">{edu.degree}</p>
                                        {edu.affiliation && <p className="edu-deg" style={{ color: "#94A3B8" }}>{edu.affiliation}</p>}
                                    </div>
                                    <div>
                                        <p className="edu-score">{edu.score}</p>
                                        <p className="edu-yr">{edu.duration}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Technical Skills */}
                        <div className="r-section">
                            <p className="sec-title">Technical Skills</p>
                            <hr className="sec-rule" />
                            {technicalSkills.filter((c) => !c.isLearning).map((cat) => (
                                <div key={cat.category} className="skill-group">
                                    <p className="skill-label">{cat.category}</p>
                                    <div className="tags">
                                        {cat.skills.map((s) => <span key={s} className="tag">{s}</span>)}
                                    </div>
                                </div>
                            ))}
                            <div className="skill-group">
                                <p className="skill-label">AI / GenAI <span style={{ color: "#94A3B8", fontWeight: 400 }}>(Learning)</span></p>
                                <div className="tags">
                                    {["GenAI", "RAG", "LangChain", "LangGraph", "Ollama", "Hugging Face", "Prompt Eng."].map((s) => (
                                        <span key={s} className="tag blue">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="skill-group">
                                <p className="skill-label">Tools</p>
                                <div className="tags">
                                    {["VS Code", "Git", "GitHub", "Docker"].map((s) => <span key={s} className="tag green">{s}</span>)}
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="r-section">
                            <p className="sec-title">Certifications</p>
                            <hr className="sec-rule" />
                            <ul className="dots">
                                {certifications.map((c, i) => (
                                    <li key={i}>
                                        <strong>{c.name}</strong> — {c.organization}
                                        {c.score ? ` (${c.score}${c.achievement ? `, ${c.achievement}` : ""})` : ""}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Achievements */}
                        <div className="r-section">
                            <p className="sec-title">Achievements</p>
                            <hr className="sec-rule" />
                            <div className="ach-item">
                                <p className="ach-name">🏆 GATE 2026</p>
                                <p className="ach-val">Score: 522 · AIR 6271 / 2,11,020 · ~97 percentile (CS &amp; IT)</p>
                            </div>
                            {hackathons.map((h, i) => (
                                <div key={i} className="ach-item">
                                    <p className="ach-name">🥉 {h.name} — {h.position}</p>
                                    <p className="ach-val">{h.duration} · Team: {h.team} · {h.year}</p>
                                </div>
                            ))}
                        </div>

                        {/* Languages & Interests */}
                        <div className="r-section">
                            <p className="sec-title">Languages &amp; Interests</p>
                            <hr className="sec-rule" />
                            <p className="txt-sm"><strong>Languages:</strong> Tamil, English</p>
                            <p className="txt-sm"><strong>Interests:</strong> Software Development, Full Stack Dev, Web Development</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
