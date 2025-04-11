'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function HomePage() {
  return (
    <main className={`min-h-screen bg-red-100 flex items-center justify-center ${inter.variable}`}>
      <Image
        src="/IMG_1032.JPG"
        alt="Elmira Kalhor"
        width={320}
        height={320}
        className="rounded-full shadow-md"
      />
    </main>
  );
}
