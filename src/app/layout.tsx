import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StableD3 Medium - Free trial of Stable Diffusion 3 Medium",
  description: "Generating images from text using the Stable Diffusion 3 Medium model.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}
