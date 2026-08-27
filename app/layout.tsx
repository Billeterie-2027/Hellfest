import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://hellfest.example'),
    title: 'HELLFEST',
    description: 'Festival de metal fictif, édition 2027.',
    keywords: ['festival de metal', 'HELLFEST', 'music festival', 'Clisson'],
    openGraph: {
        title: 'HELLFEST',
        description: 'Festival de metal fictif, édition 2027.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HELLFEST',
        description: 'Festival de metal fictif, édition 2027.',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
