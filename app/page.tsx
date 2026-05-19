"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Car,
  CheckCircle2,
  Clock3,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const telefon = "0538 505 19 85";
const telefonLink = "tel:+905385051985";

const whatsappLink =
  "https://wa.me/905385051985?text=Merhaba%2C%2007AutoRepair%20Premium%20Servis%20web%20sitesinden%20yaz%C4%B1yorum.%20Arac%C4%B1m%20i%C3%A7in%20destek%20almak%20istiyorum.";

const kurumsalWhatsappLink =
  "https://wa.me/905385051985?text=Merhaba%2C%2007AutoRepair%20Premium%20Servis%20web%20sitesinden%20yaz%C4%B1yorum.%20Firmam%C4%B1z%C4%B1n%20ara%C3%A7lar%C4%B1%20i%C3%A7in%20kurumsal%20servis%20ve%20destek%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const mail = "07autorepair@gmail.com";
const mailLink = "mailto:07autorepair@gmail.com";
const konum = "Antalya";
const firmaAdi = "07AutoRepair Premium Servis";

const menuItems = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz?", href: "#neden-biz" },
  { label: "Kurumsal", href: "#kurumsal" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

const heroImages = [
  "/07auto-hero-yazisiz.jpg",
  "/07auto-motor-bakim.jpg",
  "/07auto-mobil-servis.jpg",
];

const hizmetler = [
  {
    title: "Arıza Tespit",
    desc: "Motor, elektronik sistemler, uyarı ışıkları ve performans sorunları için hızlı ön kontrol.",
    icon: Gauge,
    tags: ["Diagnostik", "Kontrol", "Hızlı çözüm"],
  },
  {
    title: "Yağ Değişimi",
    desc: "Motor yağı, filtre kontrolü ve temel bakım işlemleriyle aracınızın ömrünü koruyun.",
    icon: Wrench,
    tags: ["Motor yağı", "Filtre", "Bakım"],
  },
  {
    title: "Ön Düzen Kontrolü",
    desc: "Direksiyon titremesi, sağa sola çekme ve yol tutuş problemleri için ön düzen kontrolü.",
    icon: Car,
    tags: ["Rot", "Balans", "Yol tutuş"],
  },
  {
    title: "Yerinde Onarım",
    desc: "Antalya içinde mümkün olan arızalarda bulunduğunuz yere gelerek pratik müdahale.",
    icon: Zap,
    tags: ["Mobil servis", "Yerinde destek", "7/24"],
  },
];

const kanitlar = [
  "7/24 açık mobil oto servis",
  "Antalya içi hızlı destek",
  "Arıza tespit ve yerinde müdahale",
  "Yağ değişimi ve temel bakım",
  "Ön düzen kontrol yönlendirmesi",
  "Telefon ve WhatsApp ile hızlı iletişim",
];

const kurumsalAvantajlar = [
  {
    title: "Firma araçlarına düzenli destek",
    desc: "İşletmenize ait araçların bakım, arıza ve acil servis süreçleri için hızlı destek sağlanır.",
    icon: Building2,
  },
  {
    title: "Saha ve filo araçları için çözüm",
    desc: "Sahada aktif kullanılan araçlarda arıza, akü, lastik ve yerinde kontrol süreçleri için pratik yönlendirme yapılır.",
    icon: Truck,
  },
  {
    title: "Tek noktadan iletişim",
    desc: "Kurumsal firmalar, araçları için servis taleplerini telefon veya WhatsApp üzerinden kolayca iletebilir.",
    icon: BriefcaseBusiness,
  },
];

const galeri = [
  {
    title: "Motor Bakım Kontrolü",
    img: "/07auto-motor-bakim.jpg",
  },
  {
    title: "Arıza Tespit Cihazı",
    img: "/07auto-ariza-tespit-tablet.jpg",
  },
  {
    title: "Profesyonel Ekipman",
    img: "/07auto-takim-cantasi.jpg",
  },
  {
    title: "Lastik Müdahale",
    img: "/07auto-lastik-mudahale.jpg",
  },
  {
    title: "Akü Kontrol ve Destek",
    img: "/07auto-aku-destek.jpg",
  },
  {
    title: "Yerinde Motor Onarım",
    img: "/07auto-motor-onarim.jpg",
  },
  {
    title: "Mobil Servis Aracı",
    img: "/07auto-mobil-servis.jpg",
  },
];

const yorumlar = [
  {
    name: "Antalya içi hızlı destek",
    text: "Arıza durumunda doğrudan arama ve WhatsApp üzerinden hızlı servis talebi oluşturulabilir.",
  },
  {
    name: "Güven veren servis algısı",
    text: "Net hizmet listesi, güçlü görseller ve 7/24 açık servis vurgusu ile profesyonel görünüm sunar.",
  },
  {
    name: "Kurumsal araç desteği",
    text: "Firma araçları için bakım, arıza ve saha desteği talepleri tek noktadan iletilebilir.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#ff2d2d]/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#0ea5e9]/20 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[20%] h-[520px] w-[520px] rounded-full bg-[#f97316]/10 blur-[150px]" />
      </div>

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070b12]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a
            href="#"
            className="group relative block h-16 w-[200px] overflow-hidden md:h-20 md:w-[260px]"
          >
            <img
              src="/logo.png"
              alt="07AutoRepair Premium Servis Logo"
              className="absolute left-1/2 top-1/2 h-[150px] w-[250px] -translate-x-1/2 -translate-y-1/2 object-contain md:h-[200px] md:w-[330px]"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={telefonLink}
              className="rounded-full border border-red-400/40 bg-red-500/10 px-5 py-3 text-sm font-bold text-red-100 transition hover:border-red-300/60 hover:bg-red-500/20"
            >
              Hemen Ara
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              className="rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-500/25 transition hover:scale-105"
            >
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
            aria-label="Menü"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#080d16] px-4 pb-5 md:hidden">
            <div className="flex flex-col gap-2 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-white/5 px-4 py-4 text-sm font-bold text-white/80"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={telefonLink}
                className="mt-2 rounded-2xl bg-red-500 px-4 py-4 text-center text-sm font-black text-white"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative z-10 px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100 shadow-xl shadow-red-500/10">
              <Sparkles className="h-4 w-4 text-red-300" />
              Antalya 7/24 Mobil Oto Servis
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Aracınız yolda kalmasın.{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                Servis desteği bulunduğunuz yere gelsin.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-xl">
              {firmaAdi}, Antalya’da arıza tespit, yağ değişimi, ön düzen
              kontrolü, yerinde onarım ve kurumsal araç destek hizmetleri sunar.
              7/24 açık yapısıyla acil durumlarda hızlı iletişim kurabilir,
              aracınız için destek alabilirsiniz.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-7 py-4 text-base font-black text-white shadow-2xl shadow-red-500/30 transition hover:scale-[1.03]"
              >
                WhatsApp’tan Servis İste
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href={telefonLink}
                className="flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                <Phone className="h-5 w-5" />
                Hemen Ara
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["7/24", "Açık Servis"],
                ["Antalya", "Mobil Destek"],
                ["Kurumsal", "Araç Desteği"],
              ].map(([big, small]) => (
                <div
                  key={big}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
                >
                  <p className="text-3xl font-black text-white">{big}</p>
                  <p className="mt-1 text-sm font-semibold text-white/60">
                    {small}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-br from-red-500/30 via-sky-500/20 to-orange-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <img
                src={heroImages[0]}
                alt="Antalya mobil oto servis arıza tespit"
                className="h-[430px] w-full object-cover md:h-[620px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-[#070b12]/25 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[28px] border border-white/10 bg-black/45 p-5 backdrop-blur-2xl md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <p className="text-lg font-black">
                      Arıza tespit + yerinde destek
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Uygun durumlarda aracın bulunduğu noktada kontrol ve
                      müdahale süreci başlatılır.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-8 hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-2xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/20">
                  <Clock3 className="h-5 w-5 text-emerald-300" />
                </div>

                <div>
                  <p className="text-sm font-black">7/24 Açık</p>
                  <p className="text-xs text-white/60">Acil servis hattı</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.04] px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 text-sm font-bold text-white/70 md:justify-between">
          <span>Arıza Tespit</span>
          <span className="hidden text-red-300 md:inline">•</span>
          <span>Yağ Değişimi</span>
          <span className="hidden text-red-300 md:inline">•</span>
          <span>Ön Düzen Kontrolü</span>
          <span className="hidden text-red-300 md:inline">•</span>
          <span>Yerinde Onarım</span>
          <span className="hidden text-red-300 md:inline">•</span>
          <span>Kurumsal Araç Desteği</span>
          <span className="hidden text-red-300 md:inline">•</span>
          <span>Antalya 7/24 Servis</span>
        </div>
      </section>

      <section
        id="hizmetler"
        className="relative z-10 px-4 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-red-300">
                Hizmetler
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
                Aracınız için ihtiyaç duyulan temel servis desteği tek yerde.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-white/60">
              Antalya mobil oto servis, arıza tespit, yerinde oto servis, yağ
              değişimi, ön düzen kontrolü ve kurumsal araç desteği için
              doğrudan iletişim kurulabilir.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {hizmetler.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group rounded-[32px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-red-400/40 hover:bg-white/[0.09]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 shadow-lg shadow-red-500/20">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-black">{item.title}</h3>

                  <p className="mt-4 min-h-[96px] text-sm leading-7 text-white/60">
                    {item.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="neden-biz" className="relative z-10 px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30">
            <img
              src={heroImages[1]}
              alt="Antalya oto servis motor bakım hizmeti"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-400/10 px-4 py-2 text-sm font-bold text-orange-100">
              <BadgeCheck className="h-4 w-4" />
              Antalya’da 7/24 Mobil Servis
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
              Aracınızın sorununu hızlıca anlayıp en uygun servis desteğini
              sunuyoruz.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/65">
              07AutoRepair Premium Servis olarak Antalya’da arıza tespit, yağ
              değişimi, ön düzen kontrolü ve yerinde onarım hizmetleri
              sunuyoruz. Aracınızda yaşadığınız sorunu bize iletin, bulunduğunuz
              konuma ve arızanın durumuna göre en doğru yönlendirmeyi
              sağlayalım.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {kanitlar.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-red-300" />
                  <span className="text-sm font-semibold text-white/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                className="rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-red-500/25 transition hover:scale-[1.03]"
              >
                WhatsApp’tan Yaz
              </a>

              <a
                href={telefonLink}
                className="rounded-full border border-red-400/40 bg-red-500/10 px-7 py-4 text-center text-sm font-black text-red-100 transition hover:border-red-300/60 hover:bg-red-500/20"
              >
                Telefonla Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 p-1 shadow-2xl shadow-red-500/20">
          <div className="grid gap-8 rounded-[36px] bg-[#080d16] p-6 md:grid-cols-[1fr_0.8fr] md:p-10 lg:p-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-red-200">
                Acil durum
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                Araç arıza yaptıysa önce konumunuzu ve sorunu yazın.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                WhatsApp üzerinden marka, model, bulunduğunuz konum ve yaşanan
                arıza belirtildiğinde daha hızlı yönlendirme yapılabilir.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: MapPin, title: "Konum", desc: "Antalya içi destek" },
                  { icon: CalendarClock, title: "Saat", desc: "7/24 açık" },
                  { icon: Phone, title: "İletişim", desc: telefon },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"
                    >
                      <Icon className="h-6 w-6 text-red-300" />
                      <p className="mt-4 text-lg font-black">{item.title}</p>
                      <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/10">
              <img
                src={heroImages[2]}
                alt="Antalya yerinde oto onarım hizmeti"
                className="h-full min-h-[360px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-500/30 transition hover:scale-[1.03] hover:shadow-orange-500/30"
                >
                  Konum Gönderip Servis İste
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kurumsal" className="relative z-10 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="rounded-[40px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-100">
                <BriefcaseBusiness className="h-4 w-4" />
                Kurumsal Servis ve Destek
              </div>

              <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
                Firma araçlarınız için hızlı servis, bakım ve yol destek
                çözümleri.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/65">
                07AutoRepair Premium Servis; şirket araçları, saha ekipleri,
                servis araçları ve işletme filoları için Antalya’da destek
                sağlayabilir. Arıza tespit, yerinde müdahale, akü desteği,
                lastik problemi, yağ değişimi ve bakım ihtiyaçlarında kurumsal
                firmalara pratik çözüm sunar.
              </p>

              <div className="mt-8 grid gap-4">
                {kurumsalAvantajlar.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-[26px] border border-white/10 bg-black/25 p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-400">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/60">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={kurumsalWhatsappLink}
                  target="_blank"
                  className="rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-red-500/25 transition hover:scale-[1.03]"
                >
                  Kurumsal Destek Al
                </a>

                <a
                  href={telefonLink}
                  className="rounded-full border border-red-400/40 bg-red-500/10 px-7 py-4 text-center text-sm font-black text-red-100 transition hover:border-red-300/60 hover:bg-red-500/20"
                >
                  Telefonla Görüş
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06]">
                <img
                  src="/07auto-mobil-servis.jpg"
                  alt="Kurumsal firmalara mobil oto servis desteği"
                  className="h-80 w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] sm:mt-12">
                <img
                  src="/07auto-aku-destek.jpg"
                  alt="Firma araçları için akü ve servis desteği"
                  className="h-80 w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] sm:col-span-2">
                <img
                  src="/07auto-lastik-mudahale.jpg"
                  alt="Kurumsal araçlar için lastik ve yol destek hizmeti"
                  className="h-80 w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
  id="galeri"
  className="relative z-10 px-4 py-20 md:px-8 md:py-28"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-300">
        Servis Sürecimiz
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
        Aracınıza müdahale ederken kullandığımız ekipmanları ve sahadaki servis
        sürecimizi yakından inceleyin.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
        Arıza tespitinden motor kontrolüne, akü desteğinden yerinde onarıma
        kadar tüm süreçlerde hızlı, düzenli ve güven veren bir servis deneyimi
        sunuyoruz.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {galeri.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.05 }}
          className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06]"
        >
          <img
            src={item.img}
            alt={item.title}
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xl font-black">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Antalya’da 7/24 mobil servis ve yerinde destek.
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {yorumlar.map((item) => (
              <div
                key={item.name}
                className="rounded-[32px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl"
              >
                <div className="mb-5 flex gap-1 text-orange-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>

                <h3 className="text-xl font-black">{item.name}</h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="iletisim"
        className="relative z-10 px-4 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-300">
              İletişim
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Aracınız için destek almak istiyorsanız hemen iletişime geçin.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/65">
              Antalya’da mobil oto servis, arıza tespit, yağ değişimi, ön düzen
              kontrolü, yerinde onarım ve kurumsal araç desteği için
              07AutoRepair Premium Servis’e ulaşabilirsiniz.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={telefonLink}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500">
                  <Phone className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-white/50">Telefon</p>
                  <p className="font-black">{telefon}</p>
                </div>
              </a>

              <a
                href={mailLink}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">
                  <Mail className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-white/50">E-posta</p>
                  <p className="font-black">{mail}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500">
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-white/50">Hizmet Bölgesi</p>
                  <p className="font-black">{konum}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100">
              <Clock3 className="h-4 w-4 text-red-300" />
              7/24 Servis Hattı
            </div>

            <h3 className="mt-5 text-2xl font-black md:text-3xl">
              Aracınız için hızlı destek alın.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
              Aracınızda arıza, yağ değişimi, ön düzen problemi veya yolda kalma
              gibi bir durum varsa bizimle hemen iletişime geçebilirsiniz.
              Konumunuzu ve aracınızdaki sorunu ilettiğinizde en uygun servis
              yönlendirmesi yapılır.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-black/25 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-500/20 text-red-300">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-black text-white">
                    Bulunduğunuz konumu paylaşın
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    Antalya içi mobil servis için konum bilgisi hızlı
                    yönlendirme sağlar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-black/25 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-300">
                  <Car className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-black text-white">
                    Araç bilgilerinizi yazın
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    Marka, model ve yaşanan arıza bilgisi servis sürecini
                    hızlandırır.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-black/25 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300">
                  <Wrench className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-black text-white">
                    Servis desteği başlasın
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    Arıza tespit, yerinde onarım veya bakım için uygun çözüm
                    belirlenir.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={whatsappLink}
                target="_blank"
                className="rounded-2xl bg-gradient-to-r from-red-500 to-orange-400 px-6 py-4 text-center text-sm font-black text-white shadow-lg shadow-red-500/25 transition hover:scale-[1.03]"
              >
                WhatsApp’tan Servis İste
              </a>

              <a
                href={telefonLink}
                className="rounded-2xl border border-red-400/40 bg-red-500/10 px-6 py-4 text-center text-sm font-black text-red-100 transition hover:border-red-300/60 hover:bg-red-500/20"
              >
                Hemen Ara
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
              <iframe
                title="Antalya Harita"
                src="https://www.google.com/maps?q=Antalya&output=embed"
                className="h-[320px] w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {firmaAdi}. Antalya mobil oto servis.
          </p>

          <div className="flex gap-4">
            <a href={telefonLink} className="hover:text-white">
              {telefon}
            </a>

            <a href={mailLink} className="hover:text-white">
              {mail}
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a
          href={telefonLink}
          className="flex items-center justify-center gap-2 rounded-2xl border border-red-400/40 bg-[#111827] px-4 py-4 text-sm font-black text-red-100 shadow-2xl shadow-red-500/20"
        >
          <Phone className="h-5 w-5" />
          Ara
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-orange-400 px-4 py-4 text-sm font-black text-white shadow-2xl"
        >
          <Wrench className="h-5 w-5" />
          WhatsApp
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={telefonLink}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-red-400/40 bg-[#111827] text-red-100 shadow-2xl shadow-red-500/20 transition hover:scale-110 hover:bg-red-500"
          aria-label="Telefonla ara"
        >
          <Phone className="h-6 w-6" />
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-400 text-white shadow-2xl shadow-red-500/30 transition hover:scale-110"
          aria-label="WhatsApp"
        >
          <Wrench className="h-6 w-6" />
        </a>
      </div>
    </main>
  );
}