import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PENSi",
  description: "Kalkulator Pensiun Online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={urbanist.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
