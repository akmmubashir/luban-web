"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { Leaf, Sparkles, Star } from "lucide-react"
import QuoteModal from "./quote-modal"

export default function StorySection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="story" ref={ref} className="section-padding bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-subtitle">Our Story</p>
            
            <h2 className="heading-md text-foreground leading-tight">
              It's All About
              <br />
              <span className="text-foreground! gradient-text bg-linear-to-r from-primary via-primary-dark to-accent bg-clip-text">
                Chemical-Free Soap
              </span>
            </h2>
            
            <p className="text-body text-lg leading-relaxed">
              We make the world's best soap. We never use chemicals, GMO oils, synthetic colors or perfumes. Our
              ingredients come from organic farms and the purest essential oils from nature — lavender, patchouli,
              lemon, rose, frankincense, eucalyptus, cinnamon, lime tree oil and many more as well as mixed varieties!
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100% Natural</p>
                  <p className="text-sm text-muted-foreground">Organic ingredients</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Handcrafted</p>
                  <p className="text-sm text-muted-foreground">Made with love</p>
                </div>
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary mt-4"
            >
              Get a Quote
            </motion.button>
          </motion.div>

          {/* Image - Right */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-125 lg:h-150 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/wrapped-handmade-organic-soap-bars-with-lavender-s.jpg" 
                alt="Chemical-free handmade soap" 
                fill 
                className="object-cover" 
              />
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
            </div>

            {/* Testimonial Card Overlay */}
            <motion.div
              className="absolute -bottom-8 left-6 right-6 lg:left-auto lg:-bottom-12 lg:right-8 lg:w-96 card-glass p-6 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-4 text-lg">
                "Love the smell. Love the texture, love the lather!!!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-primary-dark" />
                <div>
                  <p className="font-bold text-foreground">Jenny Vollmer</p>
                  <p className="text-sm text-muted-foreground">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
