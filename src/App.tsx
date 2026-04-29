/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Package, 
  Truck, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  ShieldCheck,
  Globe,
  Users,
  Paintbrush,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart,
  ArrowUpRight
} from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/60 backdrop-blur-lg border-b border-white/5 py-2" : "bg-gradient-to-b from-black/60 to-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif font-black tracking-tighter text-2xl drop-shadow-2xl">
            <span className="text-[#FFFDD0]">AZZAHRA</span> <span className="text-red-500 italic">CELEBES</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", href: "#" },
            { label: "Our Products", href: "#products" },
            { label: "Projects", href: "#projects" },
            { label: "Reward", href: "#partners" },
            { label: "Get In Touch", href: "#contact" }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[12px] font-black uppercase tracking-[0.2em] text-white hover:text-red-500 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/40 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          {[
            { label: "Home", href: "#" },
            { label: "Our Products", href: "#products" },
            { label: "Projects", href: "#projects" },
            { label: "Reward", href: "#partners" },
            { label: "Get In Touch", href: "#contact" }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-xl font-black text-[#FFFDD0] hover:text-red-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group p-8 border border-white/10 hover:shadow-xl hover:shadow-red-600/5 transition-all cursor-default relative overflow-hidden bg-[#224d30] rounded-3xl"
  >
    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all text-red-500">
      <Icon className="w-6 h-6 shrink-0" />
    </div>
    <h3 className="text-xl font-bold italic mb-3 text-red-600">{title}</h3>
    <p className="text-white leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

export default function App() {
  const images = [
    "/projek/int 1.jpg",
    "/projek/int 4.jpg",
    "/projek/int 5.jpg"
  ];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#1a3d24] selection:bg-red-600 selection:text-white font-sans text-white relative">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/backround.jpeg" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-left"
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-tight uppercase text-white">
              Pengadaan <br /> <span className="font-serif italic font-light lowercase text-white">Barang dan Jasa</span> Profesional
            </h1>
            <p className="text-sm md:text-lg mb-20 text-white leading-relaxed max-w-3xl font-medium italic">
              Mitra terpercaya dalam pengadaan barang dan jasa yang menghadirkan solusi berkualitas, harga kompetitif, dan layanan profesional untuk memenuhi setiap kebutuhan anda.
            </p>

            {/* Restored Category Info Widget - Sleek & Left-Aligned */}
            <div className="hidden md:flex w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-2xl p-6 items-center justify-between gap-2 border border-white/10 text-left shadow-2xl transition-transform hover:scale-[1.01] duration-500">
              <div className="flex-1 border-r border-white/20 px-4">
                <label className="block text-[8px] uppercase tracking-wider text-white/50 font-black mb-1.5">Kategori Jasa</label>
                <p className="text-[12px] font-bold text-white leading-tight">Desain & Konstruksi Interior</p>
              </div>
              <div className="flex-1 border-r border-white/20 px-4">
                <label className="block text-[8px] uppercase tracking-wider text-white/50 font-black mb-1.5">Kategori Barang</label>
                <p className="text-[12px] font-bold text-white leading-tight">Alat Tulis Kantor, Kesehatan, & Lainnya</p>
              </div>
              <div className="flex-1 border-r border-white/20 px-4">
                <label className="block text-[8px] uppercase tracking-wider text-white/50 font-black mb-1.5">Wilayah Operasi</label>
                <p className="text-[12px] font-bold text-white leading-tight">Makassar & Gowa, Sulawesi Selatan</p>
              </div>
              <div className="flex-1 px-4">
                <label className="block text-[8px] uppercase tracking-wider text-white/50 font-black mb-1.5">Estimasi Skala</label>
                <p className="text-[12px] font-bold italic text-white leading-tight">Proyek Strategis</p>
              </div>
              <div className="ml-2">
                <button className="bg-[#C1211E] hover:bg-[#A01B18] text-white px-6 py-3 rounded-lg font-black text-[10px] tracking-widest uppercase transition-all shadow-lg shadow-black/40">
                  Konsultasi
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Updated to match request */}
      <section id="services" className="py-8 bg-[#1a3d24] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              { 
                icon: ShoppingCart, 
                title: "Pengadaan Barang", 
                desc: "Penyediaan berbagai komoditas berkualitas tinggi untuk kebutuhan institusi and bisnis." 
              },
              { 
                icon: Briefcase, 
                title: "Pengadaan Jasa", 
                desc: "Layanan outsourcing dan penyediaan tenaga kerja profesional yang terampil." 
              },
              { 
                icon: Paintbrush, 
                title: "Desain & Konstruksi Interior", 
                desc: "Solusi estetika ruang yang menggabungkan modernitas dengan fungsionalitas tinggi." 
              },
              { 
                icon: Users, 
                title: "Konsultasi Kebutuhan Proyek", 
                desc: "Pendampingan strategis untuk perencanaan dan eksekusi proyek yang efisien." 
              },
              { 
                icon: Truck, 
                title: "Manajemen Logistik", 
                desc: "Pengelolaan rantai pasok dan distribusi barang yang handal dan tepat waktu." 
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group bg-[#FFCC99] p-6 rounded-3xl border border-black/5"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-red-600 transition-all duration-500 group-hover:scale-110">
                   <item.icon className="w-8 h-8 opacity-90" />
                </div>
                <h4 className={`text-[17px] font-serif font-bold mb-2 leading-snug px-2 transition-colors ${item.title.toLowerCase().includes('konsultasi') ? 'text-red-600 group-hover:text-red-400' : 'text-[#1a3d24] group-hover:text-[#1a3d24]/80'}`}>
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#1a3d24]/70 leading-relaxed max-w-[180px] mx-auto font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Product - Visual Catalog Section - Updated to match request */}
      <section id="products" className="py-12 bg-[#1a3d24]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-right mb-6">
            <span className="text-[#FFFDD0] font-bold tracking-[0.3em] text-sm md:text-base uppercase">----- Our Products</span>
          </div>
          <div className="max-w-5xl mb-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-bold text-[#FFCC99] uppercase tracking-tighter leading-none mb-10">
                Quality Products, <br /> Better Deals.
              </h3>
              <p className="text-sm md:text-lg text-white/80 max-w-3xl leading-relaxed font-medium">
                Temukan berbagai kebutuhan Anda di satu tempat! Produk lengkap, harga bersaing, dan kualitas terjamin. Belanja jadi lebih praktis, hemat, dan menguntungkan.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { src: "/produk/Amlop Panjang.jpeg", label: "Amplop Panjang" },
              { src: "/produk/Bola Basket Molten.jpeg", label: "Bola Basket Molten" },
              { src: "/produk/Bola Volly Mikasa.jpeg", label: "Bola Voli Mikasa" },
              { src: "/produk/kertas A4 sidu.jpeg", label: "Kertas A4 Sidu" },
              { src: "/produk/Map bussiness.jpeg", label: "Map Business" },
              { src: "/produk/Masker.jpeg", label: "Masker Kesehatan" },
              { src: "/produk/Pulpen Standard.jpeg", label: "Pulpen Standard" },
              { src: "/produk/Raket Bulutangkis.jpeg", label: "Raket Bulutangkis" },
              { src: "/produk/Shuttlecock.jpeg", label: "Shuttlecock" },
              { src: "/produk/Timbangan Berat Badan.jpeg", label: "Timbangan Berat Badan" },
              { src: "/produk/Typex kenko.jpeg", label: "Type-X Kenko" },
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-[#224d30] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FFCC99]/30 hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-square p-4 flex items-center justify-center bg-black/20">
                  <img 
                    src={product.src} 
                    alt={product.label}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3">
                  <span className="text-[7px] font-bold uppercase tracking-widest text-white/40 block mb-1 text-center">Katalog Barang</span>
                  <h4 className="text-[10px] font-serif font-bold text-red-600 uppercase tracking-tight group-hover:text-red-400 transition-colors text-center leading-tight h-8 flex items-center justify-center">
                    {product.label}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Projects Section - Visionary Bento Grid Inspired */}
      <section id="projects" className="py-12 bg-[#1a3d24] px-6 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-right mb-6">
            <span className="text-[#FFFDD0] font-bold tracking-[0.3em] text-sm md:text-base uppercase">----- Our Projects</span>
          </div>
          {/* Section Header with Elite Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-[#FFCC99] tracking-widest uppercase leading-tight">
              Let's Create More, <br />
              <span className="text-white italic font-light lowercase">than just spaces</span>
            </h2>
          </motion.div>

          {/* Vision Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Card 1: World Class Design */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFCC99] border border-black/5 rounded-[2rem] p-10 flex flex-col justify-center text-left relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <h3 className="text-2xl font-bold text-red-600 mb-4 relative z-10">Quality Control</h3>
              <p className="text-sm text-black/70 leading-relaxed relative z-10 font-medium">
                Kami memastikan setiap proses dari awal hingga finishing memenuhi standar kualitas terbaik untuk hasil yang maksimal.
              </p>
            </motion.div>

            {/* Card 2: Image 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-zoom-in"
              onClick={() => setSelectedIndex(0)}
            >
              <img 
                src="/projek/int 1.jpg" 
                alt="Architecture Study" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>

            {/* Card 3: Quality Control */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-zoom-in"
              onClick={() => setSelectedIndex(2)}
            >
              <img 
                src="/projek/int 5.jpg" 
                alt="Quality Control" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>

            {/* Card 4: Image 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-zoom-in"
              onClick={() => setSelectedIndex(1)}
            >
              <img 
                src="/projek/int 4.jpg" 
                alt="Modern Living" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>

            {/* Card 5: Individual Project */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#FFCC99] rounded-[2rem] p-10 flex flex-col justify-center text-left relative group overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4 group-hover:text-red-700 transition-colors">Individual project</h3>
              <p className="text-sm text-black/70 leading-relaxed font-medium">
                Setiap proyek dirancang khusus sesuai kebutuhan, gaya, dan preferensi Anda untuk hasil yang benar-benar personal.
              </p>
            </motion.div>

            {/* Card 6: Premium Materials */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#FFCC99] border border-black/5 rounded-[2rem] p-10 flex flex-col justify-center text-left relative group"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">Premium materials</h3>
              <p className="text-sm text-black/70 leading-relaxed font-medium">
                Kami menggunakan material terbaik untuk memastikan daya tahan, keindahan, dan kualitas jangka panjang.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Azzahra Club - Loyalty Reward Section - Refined Cream Aesthetic */}
      <section id="partners" className="relative py-10 md:py-12 overflow-hidden text-center bg-[#FFFDD0]">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-red-600 italic mb-3">
              azzahra club
            </h2>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] font-medium text-[#1a3d24]/60 mb-6">
              LOYALTY REWARD PROGRAM
            </p>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-sm md:text-lg text-[#1a3d24] leading-[1.8] font-medium">
                Setiap pembelanjaan minimal <span className="font-bold border-b border-[#1a3d24]/20">Rp400.000</span>, kamu akan mendapatkan <span className="font-bold border-b border-[#1a3d24]/20">5 poin</span>. <br className="hidden md:block" />
                Kumpulkan poin sebanyak-banyaknya dan tukarkan dengan berbagai reward menarik. 
                <span className="block mt-4 text-lg md:text-2xl italic font-serif text-[#1a3d24]">Let's partner up and claim you're point now!</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Get In Touch Section */}
      <section id="contact" className="pt-20 pb-12 bg-[#1a3d24] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Schedule & Map */}
            <div>
              <div className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-[#FFFDD0] mb-6 italic underline decoration-red-400 underline-offset-8">Our Working Time</h2>
                <p className="text-white/70 mb-8 max-w-md leading-relaxed">
                  Kami beroperasi pada jam kerja standar untuk melayani konsultasi dan pengelolaan pengadaan Anda secara maksimal.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-5 text-white/90">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FFCC99]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm">Mon - Fri : 08:00 AM - 17:00 PM</span>
                  </div>
                  <div className="flex items-center gap-5 text-white/90">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FFCC99]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm">Sat : 09:00 AM - 15:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#FFFDD0] mb-8">Location :</h2>
                <div className="w-full h-[350px] bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-inner grayscale hover:grayscale-0 transition-all duration-1000 group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15894.13745281488!2d119.4187063!3d-5.1783856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2964e52ec77%3A0xe5a363ac46237ed7!2sSulawesi%20Interior!5e0!3m2!1sid!2sid!4v1714125000000!5m2!1sid!2sid" 
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-[#224d30] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-xl relative">
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 rounded-full text-[#FFCC99] font-bold text-[10px] uppercase tracking-widest mb-6">
                  <Send className="w-3 h-3" /> Get in touch
                </div>
                <h3 className="text-5xl md:text-6xl font-serif font-bold text-[#FFFDD0] italic">Get In Touch !</h3>
              </div>

              <form className="space-y-8">
                <div className="relative group">
                  <label className="block text-[10px] uppercase font-bold text-white/30 mb-3 tracking-widest ml-1">Email address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email..."
                    className="w-full bg-[#1a3d24] border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all text-sm font-medium text-white shadow-sm"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] uppercase font-bold text-white/30 mb-3 tracking-widest ml-1">Full name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name..."
                    className="w-full bg-[#1a3d24] border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all text-sm font-medium text-white shadow-sm"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] uppercase font-bold text-white/30 mb-3 tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your needs..."
                    className="w-full bg-[#1a3d24] border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all text-sm font-medium text-white shadow-sm resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-[#FFFDD0] py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-xl shadow-red-600/20 hover:shadow-red-700/20 transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Forest Green Theme - Updated to match request */}
      <footer className="bg-[#1a3d24] text-white pt-12 pb-6 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Brand & Description */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-serif font-black tracking-tighter text-3xl">
                  <span className="text-[#FFFDD0]">AZZAHRA</span> <span className="text-red-500 italic">CELEBES</span>
                </span>
              </div>
              <p className="text-white/80 text-[13px] leading-relaxed mb-8 max-w-lg font-medium">
                mitra terpercaya dalam pengadaan barang dan jasa yang menghadirkan solusi berkualitas, harga kompetitif, dan layanan profesional untuk memenuhi setiap kebutuhan anda.
              </p>
            </div>

            {/* Right Group: Contact Top & Links Bottom */}
            <div className="lg:col-span-8">
              {/* Top Row: Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-red-600 font-bold">
                    <Phone className="w-5 h-5 text-[#FFCC99]" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-red-600">Phone</p>
                    <p className="text-[13px] text-white/70 tracking-tight leading-none mt-1">(+62) 819 0891 0445</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-red-600 font-bold">
                    <Mail className="w-5 h-5 text-[#FFCC99]" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-red-600">Email</p>
                    <p className="text-[13px] text-white/70 tracking-tight leading-none mt-1">azzahracelebes@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-red-600 font-bold">
                    <MapPin className="w-5 h-5 text-[#FFCC99]" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-red-600">Address</p>
                    <p className="text-[13px] text-white/70 tracking-tight leading-none mt-1">Makassar & Gowa, Sulawesi</p>
                  </div>
                </div>
              </div>

              {/* Separator Dashed Line */}
              <div className="w-full border-t border-dashed border-[#FFFDD0]/30 mb-12"></div>

              {/* Bottom Row: Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-[16px] font-bold mb-8 text-[#FFFDD0]">Navigation</h4>
                  <ul className="space-y-4">
                    {["Home", "Our Products", "Projects", "Reward", "Get In Touch"].map((item) => (
                      <li key={item}>
                        <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-white/60 hover:text-red-500 transition-colors text-[13px] font-medium">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold mb-8 text-[#FFFDD0]">Quick Link</h4>
                  <ul className="space-y-4 text-white/60 text-[13px] font-medium">
                    <li><a href="#" className="hover:text-red-500 transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-red-500 transition-colors">FAQs</a></li>
                    <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-red-500 transition-colors">Gallery</a></li>
                    <li><a href="#" className="hover:text-red-500 transition-colors">Pricing</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold mb-8 text-[#FFFDD0]">Work Hours</h4>
                  <ul className="space-y-4 text-white/60 text-[13px] font-medium mb-6">
                    <li className="flex items-center gap-2">
                       <Clock className="w-4 h-4 text-[#FFCC99]" /> Mon - Fri : 08:00 AM - 17:00 PM
                    </li>
                    <li className="flex items-center gap-2">
                       <Clock className="w-4 h-4 text-[#FFCC99]" /> Sat : 09:00 AM - 15:00 PM
                    </li>
                  </ul>
                  <p className="text-[12px] text-white/40 leading-relaxed italic">
                    Kami melayani dengan sepenuh hati untuk kepuasan mitra kami.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center">
            <p className="text-[12px] text-white/30 tracking-wider">
              © {new Date().getFullYear()} AZZAHRA CELEBES · ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
    
    {/* Zoom Modal */}
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-20"
          onClick={() => setSelectedIndex(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-7xl w-full h-full flex items-center justify-center"
          >
            <img 
              src={images[selectedIndex]} 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-0 right-0 p-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
}
