"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const categories = ["All", "Floral", "Herbal", "Citrus", "Luxury"]

const allProducts = [
  // Floral
  { id: 1, name: "Lavender Dream", category: "Floral", scent: "Calming Lavender", price: "$9.99", image: "/organic-soap-with-lavender-flowers-and-spa-element.jpg" },
  { id: 2, name: "Rose Garden", category: "Floral", scent: "Delicate Rose", price: "$10.99", image: "/wrapped-handmade-organic-soap-bars-with-lavender-s.jpg" },
  { id: 3, name: "Jasmine Bliss", category: "Floral", scent: "Sweet Jasmine", price: "$10.99", image: "/organic-soap-lavender-spa.jpg" },
  
  // Herbal
  { id: 4, name: "Eucalyptus Mint", category: "Herbal", scent: "Cooling & Refreshing", price: "$9.99", image: "/organic-soap-bar-.jpg" },
  { id: 5, name: "Peppermint Bark", category: "Herbal", scent: "Energizing Mint", price: "$9.99", image: "/soap-bars-on-a-plate.jpg" },
  { id: 6, name: "Tea Tree Fresh", category: "Herbal", scent: "Purifying Tea Tree", price: "$9.99", image: "/stacked-organic-soap-bars-with-natural-twine.jpg" },
  
  // Citrus
  { id: 7, name: "Citrus Burst", category: "Citrus", scent: "Fresh Lemon & Orange", price: "$9.99", image: "/organic-soap-ingredients-and-bottles.jpg" },
  { id: 8, name: "Grapefruit Zest", category: "Citrus", scent: "Tangy Grapefruit", price: "$9.99", image: "/luxury-soaps-essential-oils-bottles-spa-wellness.jpg" },
  { id: 9, name: "Lime Refresh", category: "Citrus", scent: "Zesty Lime", price: "$9.99", image: "/artisan-soap-making-process.jpg" },
  
  // Luxury
  { id: 10, name: "Honey Oat", category: "Luxury", scent: "Soothing & Nourishing", price: "$10.99", image: "/stacked-organic-soap-bars-with-natural-twine.jpg" },
  { id: 11, name: "Charcoal Detox", category: "Luxury", scent: "Fresh & Purifying", price: "$11.99", image: "/soap-bars-on-a-plate.jpg" },
  { id: 12, name: "Shea Butter Luxe", category: "Luxury", scent: "Vanilla & Shea", price: "$12.99", image: "/luxury-soaps-essential-oils-spa.jpg" },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-subtitle mb-4">Our Collection</p>
              <h1 className="heading-lg text-foreground mb-6">
                All Products
              </h1>
              <p className="text-body max-w-2xl mx-auto">
                Explore our complete range of handcrafted organic soaps, each made with love and natural ingredients
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-sm text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="group"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  <div className="card-modern overflow-hidden bg-white dark:bg-card h-full">
                    {/* Product Image */}
                    <div className="relative h-72 overflow-hidden bg-secondary/30">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-500"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <div className="mb-2">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{product.scent}</p>
                      
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
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
