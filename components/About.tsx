"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Rocket, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Code,
    title: "iOS & SwiftUI",
    description: "Modern iOS uygulamaları geliştiriyorum",
  },
  {
    icon: Rocket,
    title: "Ürün Geliştirme",
    description: "Kullanıcı odaklı ürünler tasarlıyorum",
  },
  {
    icon: Sparkles,
    title: "AI ile Üretkenlik",
    description: "AI araçları ile iş akışımı optimize ediyorum",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hakkımda</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              Merhaba! Ben Ümmi Altın, 22 yaşında bir Bilgisayar Mühendisliği 4. sınıf
              öğrencisiyim. iOS geliştirme odağım var ve SwiftUI ile modern,
              kullanıcı dostu uygulamalar geliştiriyorum.
            </p>
            <p>
              Son zamanlarda AI araçlarını keşfediyorum ve bunları günlük
              iş akışıma entegre ediyorum. ChatGPT, Cursor gibi araçlarla
              üretkenliğimi artırıyor, yeni fikirler üretiyorum.
            </p>
            <p>
              Sosyal biriyim, ekip işini seviyorum ve üretmeyi seviyorum.
              Sürekli öğrenmeye açığım ve yeni teknolojileri denemekten
              keyif alıyorum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)" }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-gray-400">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
