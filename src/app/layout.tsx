import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Subcribtion";

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
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <Footer /> {/* Hapus ini kalau Footer hanya di Home */}
      </body>
    </html>
  );
}
