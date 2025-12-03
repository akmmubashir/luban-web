"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
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
    <section id="home" className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/organic-soap-lavender-spa.jpg"
        alt="Premium handmade organic soap with natural ingredients"
        fill
        className="object-cover scale-105"
        priority
        quality={90}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-primary/20" />
      
      {/* Animated Circles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10"
      >
        <motion.p
          variants={itemVariants}
          className="text-subtitle text-white/90 mb-6"
        >
          Organic All Natural
        </motion.p>

        <motion.h1 
          variants={itemVariants} 
          className="heading-lg text-white text-center mb-6 max-w-5xl"
        >
          Handmade Soap
          <br />
          <span className="gradient-text bg-gradient-to-r from-white via-primary-light to-white bg-clip-text text-transparent">
            Crafted with Love
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-white/90 text-center max-w-2xl mb-10 leading-relaxed"
        >
          Luxurious, chemical-free soaps crafted with love and natural ingredients for your skin.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="btn-primary bg-white text-primary hover:shadow-white/30"
          >
            <span>Get a Quote</span>
          </motion.button>
          
          <motion.a
            href="/products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
          >
            View Products
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Product Image - Right side */}
      <motion.div
        className="absolute bottom-10 right-10 hidden lg:block w-56 h-56"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
          <Image
            src="/soap-product.jpg"
            alt="Featured soap product"
            width={224}
            height={224}
            className="relative w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
