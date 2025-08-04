"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Conócenos", href: "/conocenos" },
    { name: "Nuestros Servicios", href: "/nuestros-servicios" },
    { name: "Nuestra Flota", href: "/nuestra-flota" },
    { name: "Nuestros Clientes", href: "/nuestros-clientes" },
    { name: "Contacto", href: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-100 dark:border-gray-800"
          : "bg-white dark:bg-gray-900 shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/img/iconHeader.png"
                alt="Logo Tandem"
                width={320}
                height={60}
                className="object-contain pr-2 pl-2"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 font-medium transition-colors duration-300 rounded-lg group ${
                      isActive
                        ? "text-orange-600 dark:text-orange-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-blue-600 dark:text-blue-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="md:hidden flex items-center space-x-2"
          >
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="relative z-50 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: easeInOut }}
            >
              <nav className="flex flex-col p-4 space-y-2">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 font-medium transition-all duration-300 rounded-lg ${
                          isActive
                            ? "text-orange-600 dark:text-orange-400 bg-blue-50 dark:bg-blue-900/20"
                            : "text-blue-600 dark:text-blue-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:translate-x-2"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
