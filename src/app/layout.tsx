import React from 'react';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-full flex flex-row justify-center bg-black">
          <div className="flex flex-row justify-center w-full max-w-[430px] max-[860px]:max-w-full">
            <main className="flex-grow">{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
