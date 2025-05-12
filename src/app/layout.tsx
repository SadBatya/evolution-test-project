import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Navigation } from "@/widgets";
import { Providers } from "@/widgets/Providers/Providers";
import { CreateDocument } from "@/entities/createDocument/createDocument";
import { Backdrop } from "@/shared/ui";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} antialiased relative overflow-hidden`}
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
