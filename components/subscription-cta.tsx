"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import QuoteModal from "./quote-modal"

export default function SubscriptionCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    <section className="relative w-full py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/luxury-soaps-essential-oils-spa.jpg"
          alt="Subscription background"
          fill
          className="object-cover"
          quality={85}
        />
        {/* Simple overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <motion.p
          className="text-sm sm:text-base font-medium text-white/90 mb-4 tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Made with essential oils
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Luxury Soaps
          <br />
          <span className="text-primary">
            Delivered Monthly!
          </span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Get a curated collection of our finest handmade soaps delivered to your door every month.
          Experience the luxury of natural skincare.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="btn-primary bg-white text-primary cursor-pointer"
          >
            Get a Quote
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
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {["Free Shipping", "Cancel Anytime", "Premium Quality"].map((feature) => (
            <div
              key={feature}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
            >
              {feature}
            </div>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Quote Modal */}
    <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
