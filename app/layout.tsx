import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prakhar Kumar | Digital India Infrastructure Portfolio",
  description:
    "Award-style interactive portfolio for Prakhar Kumar, Software Engineer, Full Stack Developer, Backend Engineer, and IEEE-published researcher.",
  keywords: [
    "Prakhar Kumar",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "Socket.IO",
    "Portfolio"
  ],
  authors: [{ name: "Prakhar Kumar" }],
  openGraph: {
    title: "Prakhar Kumar | Building scalable digital infrastructure across India",
    description:
      "Interactive 3D India map portfolio with projects, skills, certifications, research, and contact terminal.",
    type: "website",
    locale: "en_IN"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04060a"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
