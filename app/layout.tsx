import type { Metadata } from "next";
import React, { useState, useEffect } from 'react';
import localFont from "next/font/local";
import Head from "next/head";
import 'swiper/swiper-bundle.css';
import "./globals.css";
import Navbar from "./navBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yitbarek Portfolio",
  description: "project and bio overview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('yit-portfolio-theme');
    if (storedTheme !== 'dark') {
      setIsDarkMode(false);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = (): void => {
    if (!isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('yit-portfolio-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('yit-portfolio-theme', 'dark'); 
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-full  bg-white ring-zinc-50 dark:bg-black`}
      >
       
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full  bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>

          <div className="relative flex w-full flex-col">
            <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
            <div className="sm:px-8 top-0 order-last -mb-3 pt-3">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="top-[var(--avatar-top,theme(spacing.3))] w-full">
                      <div className="relative"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-0 z-10 h-16 pt-6">
              <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="relative flex gap-4">
                        <div className="flex flex-1"></div>
                        <Navbar />
                        <div className="flex justify-end md:flex-1">
                        <div className="flex items-center space-x-4">
       
       <span className="text-foreground  text-zinc-600  dark:text-zinc-100">Dark</span>
       <label className="relative inline-block w-10 h-6">
         <input
           type="checkbox"
           checked={isDarkMode}
           onChange={toggleTheme}
           className="sr-only"
         />
         <div className="slider  text-zinc-600 dark:text-zinc-100 bg-gray-600 dark:bg-gray-600 absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all"></div>
         <div
           className={`dot absolute left-1 top-1  text-zinc-600 bg-white dark:bg-gray-300 w-4 h-4 rounded-full transition-transform transform ${
             isDarkMode ? 'translate-x-4' : ''
           }`}
         ></div>
       </label>
       <span className="text-foreground  text-zinc-600 dark:text-zinc-100">Light</span>
     </div>

                          <div className="pointer-events-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-none"></div>
            <main className="flex-auto">
              <div className="sm:px-8 mt-9">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">

                  {/* pages render */}
                    {children}


                  </div>
                </div>
              </div>
            </main>
            <footer className="mt-32 flex-none">
              <div className="sm:px-8">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                      <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                            <a
                              className="transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/"
                            >
                              Home
                            </a>
                           
                            <a
                              className="transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/#about"
                            >
                              About Me
                            </a>
                            <a
                              className="transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/articles"
                            >
                            Tech Articles
                            </a>
                            
                          </div>
                          <p className="text-sm text-zinc-400 dark:text-zinc-500">
                            © 2024 Yitbarek Wolde. All rights reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
