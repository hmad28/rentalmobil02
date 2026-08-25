"use client";

import Image from "next/image";
import { useEffect, useState, FormEvent } from "react";
import {
  ArrowRight, CalendarDays, CarFront, Check, ChevronDown, Clock3, Gauge,
  Instagram, MapPin, Menu, MessageCircle, Phone, ShieldCheck,
  Star, ThumbsUp, UserRound, UsersRound, X, Zap
} from "lucide-react";
import { faqs, fleet, routes, services, whatsappLink } from "./data";

const generalWa = whatsappLink("Halo Yaya Trans, saya ingin bertanya tentang layanan rental mobil di Magelang.");

function Logo() {
  return (
    <a className="logo" href="#beranda" aria-label="Yaya Trans beranda">
      <Image src="/images/logo-yaya-trans.png" alt="Yaya Trans Rent Car, Tour & Travel" width={512} height={512} priority />
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["Beranda", "#beranda"], ["Armada", "#armada"], ["Layanan", "#layanan"], ["Paket Wisata", "#rute"], ["Tentang Kami", "#tentang"]];
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-wrap"><Logo />
        <nav className={open ? "open" : ""} aria-label="Navigasi utama">
          {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-mobile-wa" href={generalWa}>Chat WhatsApp</a>
        </nav>
        <a className="btn btn-gold nav-cta" href={generalWa} target="_blank"><MessageCircle size={18} /> Hubungi Kami</a>
        <button className="menu" aria-label="Buka navigasi" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function BookingBar() {
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("1 hari");
  const [service, setService] = useState("Lepas kunci");
  const [passengers, setPassengers] = useState("1–4 orang");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const message = `Halo Yaya Trans, saya ingin mengecek ketersediaan kendaraan untuk tanggal ${date || "yang akan saya konfirmasi"}, durasi ${duration}, layanan ${service}, untuk ${passengers}.`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };
  return (
    <form className="booking-bar" onSubmit={submit}>
      <label><span>Tanggal Sewa</span><div className="control"><CalendarDays /><input type="date" value={date} onChange={e => setDate(e.target.value)} aria-label="Tanggal sewa" /></div></label>
      <label><span>Durasi</span><div className="control"><Clock3 /><select value={duration} onChange={e => setDuration(e.target.value)}><option>1 hari</option><option>2–3 hari</option><option>4–7 hari</option><option>Mingguan</option><option>Bulanan</option></select><ChevronDown /></div></label>
      <label><span>Jenis Layanan</span><div className="control"><CarFront /><select value={service} onChange={e => setService(e.target.value)}><option>Lepas kunci</option><option>Dengan driver</option><option>Antar-jemput</option><option>Tour & travel</option><option>Perjalanan luar kota</option></select><ChevronDown /></div></label>
      <label><span>Jumlah Penumpang</span><div className="control"><UsersRound /><select value={passengers} onChange={e => setPassengers(e.target.value)}><option>1–4 orang</option><option>5–7 orang</option><option>8–14 orang</option></select><ChevronDown /></div></label>
      <button className="btn btn-gold booking-submit">Cek Ketersediaan <ArrowRight size={17} /></button>
    </form>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow?: string, title: string, text?: string }) {
  return <div className="section-title">{eyebrow && <span>{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function FleetCard({ car }: { car: typeof fleet[number] }) {
  const link = whatsappLink(`Halo Yaya Trans, saya tertarik menyewa ${car.name}. Apakah unit tersedia untuk tanggal yang saya rencanakan?`);
  return (
    <article className="fleet-card">
      <div className="fleet-image"><span className="badge">{car.category}</span><Image src={car.image} alt={`${car.name} rental mobil Magelang`} fill sizes="(max-width: 700px) 85vw, 300px" /></div>
      <div className="fleet-content"><h3>{car.name}</h3><div className="fleet-spec"><span><UsersRound /> {car.seats} Kursi</span><span><Gauge /> {car.transmission}</span></div>
        <div className="price"><small>Mulai dari*</small><strong>{car.price}</strong><em>/ 12 jam</em></div>
        <div className="fleet-actions"><a className="btn btn-outline" href="#faq">Lihat Detail</a><a className="btn btn-wa" href={link} target="_blank"><MessageCircle /> Tanya Unit</a></div>
      </div>
    </article>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("Semua Armada");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const filteredFleet = filter === "Semua Armada" ? fleet : fleet.filter(car => car.category.includes(filter));
  return (
    <main>
      <Header />
      <section className="hero" id="beranda">
        <div className="hero-bg" />
        <div className="hero-shell">
          <div className="hero-copy">
            <h1>Rental Mobil Magelang untuk <span>Perjalanan yang Lebih Nyaman</span></h1>
            <p>Lepas kunci atau dengan driver untuk wisata, bisnis, antar-jemput, dan perjalanan luar kota.</p>
            <div className="hero-actions"><a className="btn btn-gold" href={generalWa} target="_blank">Cek Mobil Tersedia <ArrowRight size={18} /></a><a className="btn btn-ghost" href="#armada">Lihat Armada</a></div>
            <div className="trust-row"><span><Star /> Rating Draft 5.0</span><span><ShieldCheck /> Armada Terawat</span><span><Zap /> Respons Cepat</span></div>
          </div>
        </div>
      </section>
      <div className="booking-wrap"><BookingBar /></div>

      <section className="section services" id="layanan"><div className="container"><SectionTitle title="Layanan untuk Setiap Perjalanan" text="Pilih layanan sesuai kebutuhan perjalanan pribadi, keluarga, wisata, maupun perusahaan." />
        <div className="service-grid">{services.map(({ title, description, icon: Icon }) => <a href={whatsappLink(`Halo Yaya Trans, saya ingin bertanya tentang layanan ${title}.`)} target="_blank" className="service-card" key={title}><Icon /><h3>{title}</h3><p>{description}</p><span>Selengkapnya <ArrowRight /></span></a>)}</div>
      </div></section>

      <section className="section fleet" id="armada"><div className="container"><SectionTitle eyebrow="Armada Yaya Trans" title="Pilihan Armada Favorit" text="Armada terawat, bersih, dan siap menemani berbagai kebutuhan perjalanan Anda." />
        <div className="filters">{["Semua Armada", "City Car", "MPV", "Premium", "Minibus"].map(item => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <div className="fleet-grid">{filteredFleet.map(car => <FleetCard car={car} key={car.name} />)}</div>
        <p className="draft-note">*Harga, spesifikasi, dan ketersediaan pada tampilan ini masih berupa data draft dan perlu dikonfirmasi.</p>
      </div></section>

      <section className="section why" id="tentang"><div className="container why-grid">
        <div className="why-photo"><Image src="https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=85" alt="Staf profesional membantu pelanggan rental mobil" fill sizes="(max-width: 800px) 100vw, 50vw" /><span className="experience"><b>24/7</b> siap bantu perjalanan</span></div>
        <div className="why-copy"><span className="mini-title">ALASAN MEMILIH KAMI</span><h2>Perjalanan tenang dimulai dari partner yang tepat.</h2><p>Kami berkomitmen memberikan layanan terbaik dengan armada yang terawat dan tim profesional untuk kenyamanan perjalanan Anda.</p>
          <div className="benefits">{[[ShieldCheck,"Armada Terawat & Bersih","Setiap kendaraan diperiksa dan dibersihkan sebelum digunakan."],[UserRound,"Driver Profesional","Berpengalaman, ramah, dan mengutamakan keselamatan."],[Zap,"Layanan Cepat & Responsif","Konsultasi dan pemesanan praktis melalui WhatsApp."],[ThumbsUp,"Harga Transparan","Rincian harga disampaikan dengan jelas sejak awal."]].map(([Icon,title,text], i) => { const I = Icon as typeof ShieldCheck; return <div className="benefit" key={i}><I /><div><h3>{String(title)}</h3><p>{String(text)}</p></div></div> })}</div>
        </div>
      </div></section>

      <section className="section routes" id="rute"><div className="container"><SectionTitle eyebrow="Jelajahi Lebih Jauh" title="Rute & Perjalanan Populer" text="Berangkat dari Magelang menuju destinasi favorit dengan perjalanan yang lebih nyaman." />
        <div className="route-grid">{routes.map(route => <article className="route-card" key={route.name}><div className="route-image"><Image src={route.image} alt={`Perjalanan menuju ${route.name}`} fill sizes="(max-width: 700px) 90vw, 300px" /></div><div><h3>{route.name}</h3><p>{route.description}</p><a href={whatsappLink(`Halo Yaya Trans, saya ingin bertanya tentang perjalanan ke ${route.name}.`)} target="_blank">Tanya rute <ArrowRight /></a></div></article>)}</div>
      </div></section>

      <section className="testimonials"><div className="container"><SectionTitle eyebrow="Cerita Perjalanan" title="Dipercaya untuk Berbagai Perjalanan" />
        <div className="testi-layout"><div className="rating-block"><div><Star fill="currentColor" /><b>5.0</b></div><p>Contoh tampilan rating pelanggan</p><span>Rating dan jumlah ulasan akan ditampilkan setelah terverifikasi.</span></div>
          <div className="review-grid">{[["Pelayanan ramah, respons admin cepat, dan mobil terasa bersih selama perjalanan keluarga.","Rina W.","Wisata keluarga"],["Driver komunikatif dan sangat membantu selama rute perjalanan luar kota.","Andi P.","Perjalanan bisnis"],["Proses konsultasi mudah dan informasi harga disampaikan dengan jelas sejak awal.","Dewi L.","Antar-jemput"]].map(([quote,name,type]) => <article className="review" key={name}><div className="stars">★★★★★</div><p>“{quote}”</p><div><span>{name.charAt(0)}</span><b>{name}<small>{type} • contoh testimoni</small></b></div></article>)}</div>
        </div></div></section>

      <section className="section faq" id="faq"><div className="container faq-grid"><div><span className="mini-title">INFORMASI SEWA</span><h2>Pertanyaan yang Sering Ditanyakan</h2><p>Belum menemukan jawaban yang Anda butuhkan? Tim kami siap membantu melalui WhatsApp.</p><a className="btn btn-dark" href={generalWa} target="_blank"><MessageCircle /> Tanya Admin</a></div><div className="accordion">{faqs.map(([q,a], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={q}><button className="faq-question" type="button" aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{q}<ChevronDown /></button><div className="faq-answer" id={`faq-answer-${index}`} hidden={openFaq !== index}><p>{a}</p></div></div>)}</div></div></section>

      <section className="final-cta"><div className="container"><div className="cta-copy"><span>Rencanakan perjalanan Anda</span><h2>Siap Memulai Perjalanan Bersama Yaya Trans?</h2><p>Hubungi kami sekarang dan dapatkan rekomendasi kendaraan terbaik untuk perjalanan Anda.</p><div><a className="btn btn-gold" href={generalWa} target="_blank"><MessageCircle /> Hubungi Kami Sekarang</a><a className="btn btn-ghost" href="#armada">Lihat Armada</a></div></div></div></section>

      <footer><div className="container footer-grid"><div><Logo /><p>Partner rental mobil dan perjalanan Magelang–Jogja untuk wisata, keluarga, bisnis, dan rombongan.</p><div className="socials"><a href="#" aria-label="Instagram"><Instagram /></a><a href={generalWa} aria-label="WhatsApp"><MessageCircle /></a></div></div><div><h3>Kontak Kami</h3><p><Phone /> 0857-9941-4903</p><p><MapPin /> Magelang, Jawa Tengah</p><p><Clock3 /> Pelayanan setiap hari</p></div><div><h3>Navigasi</h3><a href="#beranda">Beranda</a><a href="#armada">Armada</a><a href="#layanan">Layanan</a><a href="#tentang">Tentang Kami</a></div><div><h3>Layanan Kami</h3><a href="#layanan">Lepas Kunci</a><a href="#layanan">Dengan Driver</a><a href="#rute">Antar-Jemput</a><a href="#rute">Perjalanan Luar Kota</a></div></div><div className="copyright container">© 2026 Yaya Trans Tour & Travel. All rights reserved. <span>Konten harga, rating, dan testimoni masih berupa draft.</span></div></footer>

      <a className="floating-wa" href={generalWa} target="_blank" aria-label="Chat WhatsApp"><MessageCircle /><span>Chat WhatsApp</span></a>
      <a className="mobile-wa" href={generalWa} target="_blank"><MessageCircle /> Chat WhatsApp</a>
    </main>
  );
}
