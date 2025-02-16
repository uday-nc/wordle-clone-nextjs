// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Tech Wordle',
    description: 'A Wordle clone with tech-related words',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`}>
                <div className="flex flex-col items-center justify-start min-h-screen py-8 px-4">
                    {children}
                </div>
            </body>
        </html>
    );
}