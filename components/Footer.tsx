"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/socials";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              {!logoError ? (
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    fill
                    className="object-contain"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <span className="text-xl font-bold gradient-text">Ümmi Altın</span>
              )}
            </motion.div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Tüm hakları saklıdır.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target={social.id === "email" ? undefined : "_blank"}
                  rel={social.id === "email" ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-all"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
