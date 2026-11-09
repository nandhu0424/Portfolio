"use client";

import { useState, useRef } from "react";
import { personalInfo } from "@/data/portfolio";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default function Contact() {
    const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
    const [honeypot, setHoneypot] = useState<string>("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);

    const validate = (): boolean => {
        const e: FormErrors = {};
        const trimmedName = form.name.trim();
        const trimmedEmail = form.email.trim();
        const trimmedSubject = form.subject.trim();
        const trimmedMessage = form.message.trim();

        if (!trimmedName || trimmedName.length < 2) {
            e.name = "Full Name must be at least 2 characters.";
        }
        if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            e.email = "Enter a valid email address.";
        }
        if (!trimmedSubject || trimmedSubject.length < 3) {
            e.subject = "Subject must be at least 3 characters.";
        }
        if (!trimmedMessage || trimmedMessage.length < 10) {
            e.message = "Message must be at least 10 characters.";
        }

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((p) => ({ ...p, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("idle");
        setStatusMessage("");

        if (!validate()) return;

        setIsSubmitting(true);

        const currentFormData = { ...form };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: currentFormData.name,
                    email: currentFormData.email,
                    subject: currentFormData.subject,
                    message: currentFormData.message,
                    _hp: honeypot, // Honeypot field for spam protection
                }),
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success) {
                setStatus("success");
                setStatusMessage("Thank you! Your message has been sent successfully.");
                setForm({ name: "", email: "", subject: "", message: "" });
                setErrors({});
            } else {
                setStatus("error");
                setStatusMessage(
                    data.error || "Unable to send your message. Please try again later."
                );
            }
        } catch (err: any) {
            console.error("Contact form submission error:", err);
            setStatus("error");
            setStatusMessage("A network error occurred. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding bg-[#F4F5F7]" aria-label="Contact">
            <div className="container-custom">
                <div className="ref-section-header">
                    <h2 className="section-title-main">Get In Touch</h2>
                    <span className="section-number">( 10 )</span>
                </div>
                <hr className="section-rule" />

                <div className="grid lg:grid-cols-2 gap-10 max-w-5xl">
                    {/* Info */}
                    <div className="space-y-5">
                        <p className="text-ink-2 text-sm leading-relaxed max-w-md">
                            I&apos;m actively seeking software development and full-stack opportunities. Whether you have a question, a project, or just want to connect — feel free to reach out!
                        </p>
                        <div className="space-y-3">
                            <ContactRow icon="📧" label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
                            <ContactRow icon="📞" label="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
                            <ContactRow icon="📍" label="Location" value={personalInfo.location} />
                        </div>
                        <div className="flex gap-3 pt-2">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                                <GHIcon /> GitHub
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                                <LIIcon /> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="card p-6">
                        {status === "success" && (
                            <div className="mb-4 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-2 font-medium" role="alert">
                                <span className="text-lg">✅</span>
                                <span>{statusMessage}</span>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-2 font-medium" role="alert">
                                <span className="text-lg">⚠️</span>
                                <span>{statusMessage}</span>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                            {/* Honeypot field for bot spam prevention */}
                            <input
                                type="text"
                                name="_hp"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                style={{ display: "none" }}
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                            />

                            <Field
                                id="name"
                                label="Full Name"
                                type="text"
                                name="name"
                                value={form.name}
                                error={errors.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                disabled={isSubmitting}
                            />
                            <Field
                                id="email"
                                label="Email"
                                type="email"
                                name="email"
                                value={form.email}
                                error={errors.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                disabled={isSubmitting}
                            />
                            <Field
                                id="subject"
                                label="Subject"
                                type="text"
                                name="subject"
                                value={form.subject}
                                error={errors.subject}
                                onChange={handleChange}
                                placeholder="What is this about?"
                                disabled={isSubmitting}
                            />
                            <div>
                                <label htmlFor="message" className="block text-xs font-semibold text-ink-2 mb-1.5">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Write your message here..."
                                    disabled={isSubmitting}
                                    className={`w-full bg-[#F9FAFB] border rounded-xl px-4 py-3 text-sm text-ink placeholder-ink-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none disabled:opacity-60 ${
                                        errors.message ? "border-red-300 focus:ring-red-200" : "border-gray-200"
                                    }`}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? "msg-error" : undefined}
                                />
                                {errors.message && (
                                    <p id="msg-error" className="mt-1 text-xs text-red-500" role="alert">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-accent w-full justify-center py-3 disabled:opacity-75 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <LoadingSpinner />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <SendIcon />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-ink-3 text-center">
                                Your message will be sent directly to my email inbox.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({
    id,
    label,
    type,
    name,
    value,
    error,
    onChange,
    placeholder,
    disabled = false,
}: {
    id: string;
    label: string;
    type: string;
    name: string;
    value: string;
    error?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    disabled?: boolean;
}) {
    return (
        <div>
            <label htmlFor={id} className="block text-xs font-semibold text-ink-2 mb-1.5">
                {label} *
            </label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required
                className={`w-full bg-[#F9FAFB] border rounded-xl px-4 py-2.5 text-sm text-ink placeholder-ink-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-60 ${
                    error ? "border-red-300 focus:ring-red-200" : "border-gray-200"
                }`}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
            {error && (
                <p id={`${id}-error`} className="mt-1 text-xs text-red-500" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}

function ContactRow({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
    return (
        <div className="card p-4 flex items-center gap-3">
            <span className="text-xl flex-shrink-0" aria-hidden="true">
                {icon}
            </span>
            <div>
                <p className="text-xs text-ink-3 uppercase tracking-wide font-semibold">{label}</p>
                {href ? (
                    <a href={href} className="text-sm text-ink hover:text-accent transition-colors">
                        {value}
                    </a>
                ) : (
                    <p className="text-sm text-ink">{value}</p>
                )}
            </div>
        </div>
    );
}

function SendIcon() {
    return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
    );
}

function LoadingSpinner() {
    return (
        <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
}

function GHIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LIIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}
