"use client";

import { motion } from "framer-motion";
import { 
  Cpu, 
  Globe, 
  Zap, 
  BrainCircuit, 
  Rocket, 
  HeartPulse, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const features = [
    {
      icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
      title: "Sağlıkta Devrim",
      desc: "Hastalıkların erken teşhisi, kişiselleştirilmiş tedavi yöntemleri ve robotik cerrahi ile insan ömrü uzuyor."
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
      title: "Sürdürülebilirlik",
      desc: "İklim değişikliği ile mücadelede akıllı enerji yönetimi ve kaynak optimizasyonu ile daha temiz bir dünya."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Güvenlik & Analiz",
      desc: "Siber tehditlerin anlık tespiti ve karmaşık verilerin saniyeler içinde analiz edilerek stratejik kararların alınması."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Verimlilik Artışı",
      desc: "Rutin işlerin otomasyonu sayesinde insanların yaratıcı süreçlere daha fazla vakit ayırabilmesi."
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-ai-dark selection:bg-ai-primary/30">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-ai-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-ai-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <header className="text-center mb-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block p-3 rounded-2xl bg-white/5 border border-white/10 mb-6"
          >
            <BrainCircuit className="w-12 h-12 text-ai-accent" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            AI: <span className="ai-gradient-text">Geleceğin Bilimi</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Yapay zeka, sadece bir teknoloji değil; insanlığın potansiyelini katlayan yeni bir evrimsel adım. Bilim ve teknik dünyasında yeni bir çağ başlıyor.
          </motion.p>
        </header>

        {/* Features Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={itemVariants} className="glass-card group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Innovation Section */}
        <section className="mb-32">
          <div className="glass-card overflow-hidden !p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-ai-accent font-bold mb-4">
                  <Rocket className="w-5 h-5" />
                  <span>Yenilikler</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sınırları Zorlayan Teknolojiler</h2>
                <ul className="space-y-4">
                  {[
                    "Kuantum Yapay Zeka Entegrasyonu",
                    "Otonom Şehir Yönetim Sistemleri",
                    "Yapay Sinir Ağları ile Uzay Keşfi",
                    "Bilişsel Robotik ve İnsan-Makine Etkileşimi"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <Sparkles className="w-5 h-5 text-ai-secondary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 p-12 flex items-center justify-center border-l border-white/10">
                <Cpu className="w-48 h-48 text-white/10 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories / Achievements */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Başarı Hikayeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Tanı Doğruluğu", value: "%99.4" },
              { label: "Enerji Tasarrufu", value: "%40+" },
              { label: "İşlem Hızı", value: "1000x" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5"
              >
                <div className="text-4xl font-black text-ai-primary mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-40 pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2026 AI Bilim ve Teknik Projesi. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </main>
  );
}
