"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import QuoteModal from "./quote-modal"

export default function SubscriptionCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    <section className="relative w-full min-h-[700px] overflow-hidden flex items-center">
      {/* Background Image */}
      <Image
        src="/luxury-soaps-essential-oils-spa.jpg"
        alt="Subscription background"
        fill
        className="object-cover scale-105"
        quality={85}
      />

      {/* Modern Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary-dark/50 to-black/60"
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-24 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-subtitle text-white/90 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Made with essential oils
        </motion.p>

        <motion.h2
          className="heading-md md:heading-lg mb-6 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Luxury Soaps
          <br />
          <span className="gradient-text bg-gradient-to-r from-white via-primary-light to-white bg-clip-text text-transparent">
            Delivered Monthly!
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-10 text-white/90 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Get a curated collection of our finest handmade soaps delivered to your door every month.
          Experience the luxury of natural skincare.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
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

        {/* Feature Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {["Free Shipping", "Cancel Anytime", "Premium Quality"].map((feature) => (
            <div
              key={feature}
              className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium"
            >
              {feature}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>

    {/* Quote Modal */}
    <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
