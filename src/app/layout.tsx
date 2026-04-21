import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: 'Anish Kushwaha | Premium Developer Portfolio',
  description: 'Flutter & Next.js Developer specializing in building high-performance apps, websites, and AI-driven solutions.',
  keywords: ["Anish Kushwaha", "Flutter Developer", "Next.js", "Firebase", "AI Tools", "Portfolio", "Mobile App Developer"],
  openGraph: {
    title: 'Anish Kushwaha | Premium Developer Portfolio',
    description: 'Explore the digital expertise of Anish Kushwaha.',
    url: 'https://anishdev.folio',
    siteName: 'AnishDev Portfolio',
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
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <ScrollProgress />
        {children}
        <Toaster />
      </body>
    </html>
  );
}