import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Navigation } from "@/widgets";
import { Providers } from "@/widgets/Providers/Providers";
import { CreateDocument } from "@/entities/createDocument/createDocument";
import { Backdrop } from "@/shared/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evolution Dashboard",
  description: "Manage your tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-hidden`}
      >
        <Providers>
          <Header />
          <Navigation />
          <CreateDocument />
          <Backdrop />
          {children}
        </Providers>
      </body>
    </html>
  );
}
