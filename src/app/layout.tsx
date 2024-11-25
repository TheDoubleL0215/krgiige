import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const AlegreyaRegular = localFont({
  src: "./fonts/Alegreya-Regular.ttf",
  variable: "--font-alegreya-regular",
  weight: "100 900",
});
const AlegreyaMedium = localFont({
  src: "./fonts/Alegreya-Medium.ttf",
  variable: "--font-alegreya-medium",
  weight: "100 900",
});

const SourceSerif4Regular = localFont({
  src: "./fonts/SourceSerif4-Regular.ttf",
  variable: "--font-SourceSerif4-Regular ",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Napkezdő ige",
  description: "Kecskeméti Református Gimnázium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${AlegreyaRegular.variable} ${AlegreyaMedium.variable} ${SourceSerif4Regular.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
