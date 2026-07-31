import type { Metadata } from "next";
import settings from "./settings";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: settings.pageTitle,
  description: settings.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="flex flex-col gap-2.5 text-center items-center justify-center mt-8">
          <strong>{settings.footer.text}</strong>
          <section className="flex flex-row gap-4">
            {settings.footer.links.map(
              (item: [string, string], index: number)=> (
                  <Link className="font-semibold underline" href={item[0]} key={index}>{item[1]}</Link>
              )
            )}
          </section>
          </footer>
      </body>
    </html>
  );
}
