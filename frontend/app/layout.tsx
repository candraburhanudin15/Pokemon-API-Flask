import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//providers wrap around our application and give them access to data
// next theme provider - give out application access to light / dark mode
// provider are generally on the client side ('use client)
// switch from light mode to dark mode <-- user interaction / needs the client to exist
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <Link href="/"><h2 className="text-2xl text-bold">Pokemon Dex</h2></Link>
              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/pokemon-23.svg"
                    alt="Pokemon Logo"
                    className=""
                    width={160}
                    height={28}
                    priority
                  />
                </a>
              </div>
            </div>
        {children}
        </main>
        </ThemeProvider>
        </body>
    </html>
  );
}
