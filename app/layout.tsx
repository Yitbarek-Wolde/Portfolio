import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

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
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-full bg-zinc-50 dark:bg-black`}
      >
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
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
                        <div className="flex flex-1 justify-end md:justify-center">
                          <div
                            className="pointer-events-auto md:hidden"
                            data-headlessui-state=""
                          >
                            <button
                              className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                              type="button"
                              aria-expanded="false"
                              data-headlessui-state=""
                            >
                              Menu
                              <svg
                                viewBox="0 0 8 6"
                                aria-hidden="true"
                                className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                              >
                                <path
                                  d="M1.75 1.75 4 4.25l2.25-2.5"
                                  fill="none"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            hidden
                            className="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"
                          ></div>
                          <nav className="pointer-events-auto hidden md:block">
                            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                            <li>
                                <a
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/"
                                >
                                  Home
                                </a>
                              </li>
                              <li>
                                <a
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/#about"
                                >
                                  About
                                </a>
                              </li>
                              <li>
                                <a
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/articles"
                                >
                                  Articles
                                </a>
                              </li>
                              <li>
                                <a
                                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                  href="/projects"
                                >
                                  Projects
                                </a>
                              </li>
                              
                            </ul>
                          </nav>
                        </div>
                        <div className="flex justify-end md:flex-1">
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
                              href="/articles"
                            >
                              Articles
                            </a>
                            <a
                              className="transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/#about"
                            >
                              About
                            </a>
                            <a
                              className="transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/projects"
                            >
                              Projects
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
