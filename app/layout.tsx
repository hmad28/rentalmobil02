import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Rental Mobil Magelang | Yaya Trans Tour & Travel",
  description: "Rental mobil Magelang lepas kunci atau dengan driver untuk wisata, antar-jemput, bisnis, dan perjalanan luar kota.",
  keywords: ["rental mobil Magelang", "sewa mobil Magelang", "rental mobil Borobudur", "rental Hiace Magelang"],
  openGraph: {
    title: "Yaya Trans — Partner Perjalanan Magelang–Jogja",
    description: "Armada terawat dan layanan perjalanan yang responsif untuk Magelang dan sekitarnya.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
