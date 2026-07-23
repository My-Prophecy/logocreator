import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/app/components/ui/toaster";

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
});

const title = "MedAI Logo Generator";
const description = "Generate logos for MedAI.care";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${jura.variable} dark min-h-full bg-[#343434] font-jura antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
