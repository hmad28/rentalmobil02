import { CarFront, KeyRound, MapPin, Plane, Route, UsersRound } from "lucide-react";

export const services = [
  { title: "Lepas Kunci", description: "Sewa mobil dengan fleksibilitas penuh untuk perjalanan pribadi Anda.", icon: KeyRound },
  { title: "Dengan Driver", description: "Nikmati perjalanan bersama driver ramah dan berpengalaman.", icon: UsersRound },
  { title: "Antar-Jemput", description: "Melayani bandara, stasiun, hotel, dan lokasi pilihan Anda.", icon: Plane },
  { title: "Perjalanan Luar Kota", description: "Kendaraan nyaman untuk perjalanan antarkota dan jarak jauh.", icon: Route },
  { title: "Tour & Travel", description: "Paket wisata fleksibel yang dapat disesuaikan dengan kebutuhan Anda.", icon: MapPin },
];

export const fleet = [
  { name: "All New Brio", category: "City Car", seats: 4, transmission: "Manual / Matic", price: "Rp 250.000", image: "/cars/brio.svg" },
  { name: "Toyota Avanza", category: "MPV", seats: 7, transmission: "Manual / Matic", price: "Rp 300.000", image: "/cars/avanza.svg" },
  { name: "Innova Reborn", category: "MPV Premium", seats: 7, transmission: "Manual / Matic", price: "Rp 500.000", image: "/cars/innova.svg" },
  { name: "Toyota Hiace", category: "Minibus", seats: 14, transmission: "Manual", price: "Hubungi kami", image: "/cars/hiace.svg" },
];

export const routes = [
  { name: "Borobudur", description: "Kunjungi mahakarya dunia di Magelang yang memukau.", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=900&q=85" },
  { name: "Bandara YIA", description: "Antar jemput nyaman dari Magelang ke Bandara YIA.", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85" },
  { name: "Jogja", description: "Nikmati suasana istimewa Kota Yogyakarta.", image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=85" },
  { name: "Dieng", description: "Jelajahi pesona alam pegunungan yang menakjubkan.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85" },
];

export const faqs = [
  ["Apakah tersedia rental lepas kunci?", "Tersedia untuk unit tertentu, dengan persyaratan identitas dan verifikasi sesuai kebijakan Yaya Trans."],
  ["Apa saja syarat sewa mobil?", "Silakan hubungi admin untuk informasi syarat terbaru karena dapat berbeda berdasarkan unit dan durasi sewa."],
  ["Apakah tersedia layanan dengan driver?", "Ya. Driver profesional tersedia untuk perjalanan wisata, bisnis, antar-jemput, dan luar kota."],
  ["Apakah bisa digunakan untuk perjalanan luar kota?", "Bisa. Informasikan kota tujuan dan estimasi durasi agar admin dapat menyarankan kendaraan yang tepat."],
  ["Apakah tersedia antar-jemput Bandara YIA?", "Ya, tersedia layanan antar-jemput Magelang–YIA maupun arah sebaliknya."],
  ["Berapa durasi sewa yang tersedia?", "Pilihan sewa harian, mingguan, dan bulanan dapat dikonsultasikan langsung melalui WhatsApp."],
  ["Apakah harga sudah termasuk BBM?", "Komponen harga bergantung pada jenis layanan. Admin akan memberikan rincian transparan sebelum pemesanan."],
  ["Apakah tersedia Hiace untuk rombongan?", "Tersedia pilihan minibus untuk perjalanan rombongan, bergantung pada jadwal unit."],
];

export const whatsappNumber = "6285799414903";
export const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
