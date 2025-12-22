"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import QuoteModal from "./quote-modal"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center py-20 bg-linear-to-br from-[#FFF8F0] via-[#F5EDE0] to-[#E8DCC6]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#5C4033] leading-tight"
            >
              Because Your Skin Deserves
              <br />
              <span className="text-[#D4A574]">
                Pure Luxury
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#5C4033]/80 leading-relaxed max-w-xl"
            >
              Gentle care, timeless beauty, crafted for you.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 rounded-lg bg-[#F5EDE0] border-2 border-[#5C4033] text-[#5C4033] font-medium text-sm transition-all hover:bg-[#E8DCC6]"
              >
                Take the Skin Quiz
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="block px-8 py-3 rounded-lg bg-[#5C4033] text-white font-medium text-sm transition-all hover:bg-[#8B6F47] text-center"
                >
                  Shop Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Product Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-150 lg:h-175"
          >
            {/* Gradient Background Shape */}
            <div className="absolute inset-0 bg-linear-to-br from-[#F5EDE0] via-[#E8DCC6] to-[#D4C4B0] rounded-3xl transform rotate-3 shadow-2xl" />

            {/* Product Images Container */}
            <div className="relative h-full flex items-center justify-center p-8">
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                {/* Product 1 - Top Left */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative h-64 bg-white/80 rounded-2xl p-6 shadow-lg flex items-center justify-center"
                >
                  <div className="w-24 h-48 bg-linear-to-b from-[#F5E6D3] to-[#E8DCC6] rounded-lg shadow-md overflow-hidden">
                    <Image src="/products/frankincense-oil-200ml.png" alt="Product 1" className="object-cover w-full h-full" width={1000} height={1000} />
                  </div>
                </motion.div>

                {/* Product 2 - Top Right */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative h-64 bg-white/80 rounded-2xl p-6 shadow-lg flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-linear-to-br from-[#D4A574] to-[#C97D60] rounded-full shadow-md overflow-hidden" >
                    <Image src="/products/insence-stick-lavender.png" alt="Product 2" className="object-cover w-full h-full" width={1000} height={1000} />
                  </div>
                </motion.div>

                {/* Product 3 - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative h-64 bg-white/80 rounded-2xl p-6 shadow-lg flex items-center justify-center"
                >
                  <div className="w-28 h-40 bg-linear-to-b from-[#F5EDE0] to-[#E8DCC6] rounded-lg shadow-md overflow-hidden">
                    <Image src="/products/myrrh-essential-oil-10ml.png" alt="Product 3" className="object-cover w-full h-full" width={1000} height={1000} />
                 
                  </div>
                </motion.div>

                {/* Product 4 - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative h-64 bg-white/80 rounded-2xl p-6 shadow-lg flex items-center justify-center"
                >
                  <div className="w-20 h-52 bg-linear-to-b from-[#D4A574] to-[#8B6F47] rounded-lg shadow-md overflow-hidden">
                    <Image src="/products/frankincense-shampoo-100ml.png" alt="Product 4" className="object-cover w-full h-full" width={1000} height={1000} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
