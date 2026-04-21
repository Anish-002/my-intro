
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'AnishDev Folio | Mobile & Frontend Developer',
  description: 'Portfolio of Anish Kushwaha, a skilled Mobile and Frontend Developer with a passion for AI and interactive digital experiences.',
  keywords: ["Anish Kushwaha", "Developer Portfolio", "Next.js", "Mobile Developer", "Frontend Developer", "AI Enthusiast", "Gujarat Developer"],
  openGraph: {
    title: 'AnishDev Folio',
    description: 'Explore the digital works and expertise of Anish Kushwaha.',
    url: 'https://anishdev.folio',
    siteName: 'AnishDev Folio',
    locale: 'en_US',
    type: 'website',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
