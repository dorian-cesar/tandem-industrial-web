"use client"

import Link from "next/link"
import { MapPin, Phone, Linkedin, Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { easeOut } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div
              className="flex items-start space-x-4 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg">Casa matriz: San Francisco de Borja 1251</p>
                <p className="text-blue-200">Estación Central - Santiago</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-lg font-medium">+562 2520 5119</p>
            </motion.div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

            <motion.div
              className="flex items-start space-x-4 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg">Antofagasta: Pedro Aguirre Cerda 12160</p>
                <p className="text-blue-200">Sector La Chimba.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-lg font-medium">+55 2211 5954</p>
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/trabaja-con-nosotros"
                className="flex items-center space-x-4 hover:text-orange-300 transition-colors duration-300 group p-4 rounded-xl hover:bg-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📋</span>
                </div>
                <span className="text-lg font-medium">Trabaja con nosotros</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/canal-denuncias"
                className="flex items-center space-x-4 hover:text-orange-300 transition-colors duration-300 group p-4 rounded-xl hover:bg-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📢</span>
                </div>
                <span className="text-lg font-medium">Canal de denuncias</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Logo and Social */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div className="flex items-center group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <span className="text-4xl font-bold italic">Tándem</span>
              <motion.div
                className="w-12 h-6 bg-gradient-to-r from-orange-500 to-orange-600 ml-3 transform skew-x-12 rounded-sm"
                whileHover={{ skewX: 6 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <p className="text-blue-200 leading-relaxed">
              Mantente actualizado acerca de nuestras iniciativas o contáctanos si quieres saber más de nosotros,
              síguenos en:
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#", color: "from-blue-600 to-blue-700" },
                { icon: Facebook, href: "#", color: "from-blue-500 to-blue-600" },
                { icon: Instagram, href: "#", color: "from-pink-500 to-purple-600" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={social.href}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 group`}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom border */}
        <motion.div
          className="mt-12 pt-8 border-t border-blue-500/30 text-center text-blue-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; 2025 Tandem Industrial. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
