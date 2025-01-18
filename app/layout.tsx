// app/layout.tsx
import { ReactNode } from 'react';  // Importando ReactNode para tipar children
import { Geist, Geist_Mono } from 'next/font/google';
import '../app/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Portfolio Amanda',
  description: 'Portfólio desenvolvido em Next.js',
};

// Definição da interface RootLayoutProps
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
