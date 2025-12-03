"use client"

import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { Package, Sparkles, Leaf } from "lucide-react"

const benefits = [
  {
    icon: Package,
    title: "No Commitment",
    description: "Cancel anytime. No questions asked. Enjoy your delivery calendar!",
  },
  {
    icon: Sparkles,
    title: "Moisturize Your Skin",
    description: "Rich, natural moisturizing properties help soothe, dry skin, rashes and irritation.",
  },
  {
    icon: Leaf,
    title: "No Chemicals",
    description: "Zero carcinogens, colorants or perfumes. Pure organic ingredients only.",
  },
]

export default function Benefits() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding bg-background">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Grid of Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="group relative"
              >
                <div className="card-modern p-8 h-full flex flex-col items-center text-center bg-white dark:bg-card">
                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </motion.div>
                  
                  <h3 className="heading-sm mb-4 text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-body flex-grow">{benefit.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
