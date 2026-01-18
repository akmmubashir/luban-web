"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"

const products = [
  { id: 1, name: "Oudh Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/oudh.png" },
  { id: 2, name: "Papaya Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/papaya.png" },
  { id: 3, name: "Rose Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/rose.png" },
  { id: 4, name: "Saffron Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/saffron.png" },
  { id: 5, name: "Sandalwood Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/sandalwood.png" },
]

export default function ProductGallery() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="products" className="section-padding bg-background">
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
