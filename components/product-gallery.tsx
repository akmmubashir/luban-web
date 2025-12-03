"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"

const products = [
  { id: 1, name: "Lavender Dream", scent: "Calming Lavender", price: "$9.99", image: "/organic-soap-with-lavender-flowers-and-spa-element.jpg" },
  { id: 2, name: "Honey Oat", scent: "Soothing & Nourishing", price: "$10.99", image: "/stacked-organic-soap-bars-with-natural-twine.jpg" },
  { id: 3, name: "Rose Garden", scent: "Delicate Rose", price: "$10.99", image: "/wrapped-handmade-organic-soap-bars-with-lavender-s.jpg" },
  { id: 4, name: "Eucalyptus Mint", scent: "Cooling & Refreshing", price: "$9.99", image: "/organic-soap-bar-.jpg" },
  { id: 5, name: "Charcoal Detox", scent: "Fresh & Purifying", price: "$11.99", image: "/soap-bars-on-a-plate.jpg" },
]

export default function ProductGallery() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-subtitle mb-4">Featured Collection</p>
          <h2 className="heading-md text-foreground mb-4">
            Our Premium Soaps
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover our handcrafted soaps made with the finest natural ingredients
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="card-modern overflow-hidden bg-white dark:bg-card h-full">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-secondary/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.scent}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-serif text-primary">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="/products" className="btn-secondary">
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  )
}
