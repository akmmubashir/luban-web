"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"
import QuoteModal from "./quote-modal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  // Navigation links matching Veloura style
  const navLinks = [
    { label: "Home", href: pathname === "/" ? "#hero" : "/#hero" },
    { label: "Products", href: "/products" },
    // { label: "Sale", href: "/products?filter=sale" },
    // { label: "Consultation", href: pathname === "/" ? "#contact" : "/#contact" },
    { label: "About", href: pathname === "/" ? "#story" : "/#story" },
    { label: "Contact", href: pathname === "/" ? "#contact" : "/#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8DCC6]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="relative w-40 h-16 md:w-52 md:h-20">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav - Centered rounded buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => {
              const isActive = pathname === "/" && link.href === "#hero"
              return (
                <motion.div key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-[#D4C4B0] text-[#5C4033]"
                          : "bg-[#F5EDE0] text-[#5C4033] hover:bg-[#E8DCC6]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <motion.a
                      href={link.href}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-[#D4C4B0] text-[#5C4033]"
                          : "bg-[#F5EDE0] text-[#5C4033] hover:bg-[#E8DCC6]"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                    </motion.a>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Get Quote Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer hidden lg:block px-6 py-2.5 rounded-lg font-medium text-sm bg-[#5C4033] text-white shadow-md hover:bg-[#8B6F47] transition-all"
            >
              Get a Quote
            </motion.button>

            {/* Mobile Menu Button */}
            <button 
              className="cursor-pointer lg:hidden p-2 rounded-lg hover:bg-[#F5EDE0] transition-colors text-[#5C4033]" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6 space-y-2"
          >
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.href.startsWith('/') ? (
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-[#5C4033] hover:bg-[#F5EDE0] rounded-lg transition-all bg-[#F5EDE0]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="block py-3 px-4 text-[#5C4033] hover:bg-[#F5EDE0] rounded-lg transition-all bg-[#F5EDE0]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <button 
              onClick={() => {
                setIsModalOpen(true)
                setIsOpen(false)
              }}
              className="cursor-pointer w-full mt-4 px-6 py-3 rounded-lg font-medium bg-[#5C4033] text-white shadow-md hover:bg-[#8B6F47] transition-all"
            >
              Get a Quote
            </button>
          </motion.div>
        )}
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.nav>
  )
}
