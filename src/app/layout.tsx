import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { MonitorSmartphone, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Digital Shop',
  description: 'Modern e-commerce with HeroUI',
};

export default function RootLayout({
  children, // slot for children
  ads, // slot for ads
}: Readonly<{
  children: React.ReactNode;
  ads: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <main className="flex flex-col justify-between min-h-screen w-full">
          <header className="fixed z-10 flex items-center justify-between px-4 py-4 shadow-xl bg-white w-full h-20">
            <div className="flex items-center space-x-2">
              <MonitorSmartphone />
              <Link className="font-bold text-lg" href="/">
                Digital Shop
              </Link>
            </div>
            <div>
              <ShoppingCart />
            </div>
          </header>
          <div className="px-4 pt-24 pb-4 max-w-7xl mx-auto w-full">
            {children}
          </div>
          <div className="my-10 mx-auto flex justify-center">{ads}</div>
          <footer className="bg-black text-white w-full flex items-center justify-center h-10 px-4 py-2">
            <p className="text-center">
              &copy; <span>2025 Digital Shop. All rights reserved.</span>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
