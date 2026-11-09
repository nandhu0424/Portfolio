import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Nandhini N | Full Stack Developer | Software Developer",
    description:
        "Portfolio of Nandhini N, a final-year Computer Science Engineering student interested in full-stack development, software development, AI, and Generative AI.",
    keywords: [
        "Nandhini N",
        "Full Stack Developer",
        "Software Developer",
        "MERN Stack",
        "React",
        "Node.js",
        "Python",
        "AI",
        "Generative AI",
        "Portfolio",
        "Computer Science",
    ],
    authors: [{ name: "Nandhini N" }],
    openGraph: {
        title: "Nandhini N | Full Stack Developer | Software Developer",
        description:
            "Portfolio of Nandhini N, a final-year Computer Science Engineering student passionate about full-stack development and AI.",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nandhini N | Full Stack Developer",
        description:
            "Portfolio of Nandhini N — Full Stack Developer, Software Developer, AI & GenAI Enthusiast.",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-navy-950 text-slate-200 antialiased">{children}</body>
        </html>
    );
}
