"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const categories = ["All", "Body Lotion", "Essential Oil", "Handwash", "Insence Stick", "Moisturizing Cream", "Sanitizer", "Soaps", "Shampoo", "Shower Gel", "Skin Protectant", "Soap", "Water"]

const allProducts = [
  // // Floral
  // { id: 1, name: "Lavender Dream", category: "Floral", scent: "Calming Lavender", price: "$9.99", image: "/organic-soap-with-lavender-flowers-and-spa-element.jpg" },
  // { id: 2, name: "Rose Garden", category: "Floral", scent: "Delicate Rose", price: "$10.99", image: "/wrapped-handmade-organic-soap-bars-with-lavender-s.jpg" },
  // { id: 3, name: "Jasmine Bliss", category: "Floral", scent: "Sweet Jasmine", price: "$10.99", image: "/organic-soap-lavender-spa.jpg" },

  // // Herbal
  // { id: 4, name: "Eucalyptus Mint", category: "Herbal", scent: "Cooling & Refreshing", price: "$9.99", image: "/organic-soap-bar-.jpg" },
  // { id: 5, name: "Peppermint Bark", category: "Herbal", scent: "Energizing Mint", price: "$9.99", image: "/soap-bars-on-a-plate.jpg" },
  // { id: 6, name: "Tea Tree Fresh", category: "Herbal", scent: "Purifying Tea Tree", price: "$9.99", image: "/stacked-organic-soap-bars-with-natural-twine.jpg" },

  // // Citrus
  // { id: 7, name: "Citrus Burst", category: "Citrus", scent: "Fresh Lemon & Orange", price: "$9.99", image: "/organic-soap-ingredients-and-bottles.jpg" },
  // { id: 8, name: "Grapefruit Zest", category: "Citrus", scent: "Tangy Grapefruit", price: "$9.99", image: "/luxury-soaps-essential-oils-bottles-spa-wellness.jpg" },
  // { id: 9, name: "Lime Refresh", category: "Citrus", scent: "Zesty Lime", price: "$9.99", image: "/artisan-soap-making-process.jpg" },

  // // Luxury
  // { id: 10, name: "Honey Oat", category: "Luxury", scent: "Soothing & Nourishing", price: "$10.99", image: "/stacked-organic-soap-bars-with-natural-twine.jpg" },
  // { id: 11, name: "Charcoal Detox", category: "Luxury", scent: "Fresh & Purifying", price: "$11.99", image: "/soap-bars-on-a-plate.jpg" },
  // { id: 12, name: "Shea Butter Luxe", category: "Luxury", scent: "Vanilla & Shea", price: "$12.99", image: "/luxury-soaps-essential-oils-spa.jpg" },

  // Insence Stick
  { id: 1, name: "Insence Stick Amber", category: "Insence Stick", scent: "Amber", price: "$9.99*", image: "/products/insence-stick-amber.png" },
  { id: 2, name: "Insence Stick Cherry", category: "Insence Stick", scent: "Cherry", price: "$9.99*", image: "/products/insence-stick-cherry.png" },
  { id: 3, name: "Insence Stick Jasmine", category: "Insence Stick", scent: "Jasmine", price: "$9.99*", image: "/products/insence-stick-jasmine.png" },
  { id: 4, name: "Insence Stick Lavender", category: "Insence Stick", scent: "Lavender", price: "$9.99*", image: "/products/insence-stick-lavender.png" },
  { id: 5, name: "Insence Stick Lemon Grass", category: "Insence Stick", scent: "Lemon Grass", price: "$9.99*", image: "/products/insence-stick-lemon-grass.png" },
  { id: 6, name: "Insence Stick Mint", category: "Insence Stick", scent: "Mint", price: "$9.99*", image: "/products/insence-stick-mint.png" },
  { id: 7, name: "Insence Stick Musk", category: "Insence Stick", scent: "Musk", price: "$9.99*", image: "/products/insence-stick-musk.png" },
  { id: 8, name: "Insence Stick Myrrh", category: "Insence Stick", scent: "Myrrh", price: "$9.99*", image: "/products/insence-stick-myrrh.png" },
  { id: 9, name: "Insence Stick Rose", category: "Insence Stick", scent: "Rose", price: "$9.99*", image: "/products/insence-stick-rose.png" },
  { id: 10, name: "Insence Stick Sandal", category: "Insence Stick", scent: "Sandal", price: "$9.99*", image: "/products/insence-stick-sandal.png" },
  { id: 11, name: "Oud Incense Sticks", category: "Insence Stick", scent: "Oud", price: "$9.99*", image: "/products/oud-incense-sticks.png" },
  { id: 12, name: "Frankincense Incense Sticks", category: "Insence Stick", scent: "Natural Resin", price: "$9.99*", image: "/products/frankincense-incense-sticks.png" },
  // Essential Oil
  { id: 13, name: "Frankincense Oil 200ml", category: "Essential Oil", scent: "Natural & Pure", price: "$9.99*", image: "/products/frankincense-oil-200ml.png" },
  { id: 14, name: "MYRRH Essential Oil 10ml", category: "Essential Oil", scent: "Soft & Nourishing", price: "$9.99*", image: "/products/myrrh-essential-oil-10ml.png" },
  { id: 15, name: "Frankincense Essential Oil 10ml", category: "Essential Oil", scent: "Soft & Nourishing", price: "$9.99*", image: "/products/frankincense-essential-oil-10ml.png" },
  { id: 16, name: "Frankincense Oil 100ml", category: "Essential Oil", scent: "Soft & Nourishing", price: "$9.99*", image: "/products/frankincense-oil-100ml.png" },
  // Shampoo
  { id: 17, name: "Frankincense Shampoo 100ml", category: "Shampoo", scent: "Soft & Nourishing", price: "$9.99*", image: "/products/frankincense-shampoo-100ml.png" },
  { id: 18, name: "Frankincense Shampoo 200ml", category: "Shampoo", scent: "Soft & Nourishing", price: "$9.99*", image: "/products/frankincense-shampoo-200ml.png" },
  // Water
  { id: 19, name: "Frankincense Water 100ml", category: "Water", scent: "Soft & Nourishing", price: "$9.99*", image: "/products/frankincense-water-100ml.png" },
  // Handwash
  { id: 20, name: "Frankincense Handwash 200ml", category: "Handwash", scent: "Anti Bacterial", price: "$9.99*", image: "/products/frankincense-handwash-200ml.png" },
  // Shower Gel
  { id: 21, name: "Frankincense Shower Gel 500ml", category: "Shower Gel", scent: "Anti Bacterial", price: "$9.99*", image: "/products/frankincense-shower-gel-500ml.png" },
  // Body Lotion
  { id: 22, name: "Frankincense Body Lotion 100ml", category: "Body Lotion", scent: "Pure & Gentle", price: "$9.99*", image: "/products/frankincense-body-lotion-100ml.png" },
  { id: 23, name: "Frankincense Body Lotion 500ml", category: "Body Lotion", scent: "Pure & Gentle", price: "$9.99*", image: "/products/frankincense-body-lotion-500ml.png" },
  // Moisturizing Cream
  { id: 24, name: "Frankincense Moisturizing Cream 120gm", category: "Moisturizing Cream", scent: "100% Natural", price: "$9.99*", image: "/products/frankincense-moisturizing-cream-120gm.png" },
  { id: 25, name: "Frankincense Moisturizing Cream 70gm", category: "Moisturizing Cream", scent: "100% Natural", price: "$9.99*", image: "/products/frankincense-moisturizing-cream-70gm.png" },
  // Scrub
  { id: 26, name: "Frankincense Scrub 180gm", category: "Scrub", scent: "100% Natural", price: "$9.99*", image: "/products/frankincense-scrub-180gm.png" },
  // Jelly
  { id: 27, name: "Frankincense Jelly 70gm", category: "Skin Protectant", scent: "100% Natural", price: "$9.99*", image: "/products/frankincense-jelly-70gm.png" },
  { id: 28, name: "Frankincense Jelly 120gm", category: "Skin Protectant", scent: "100% Natural", price: "$9.99*", image: "/products/frankincense-jelly-120gm.png" },
  // Soaps
  { id: 29, name: "Almond Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/almond.png" },
  { id: 30, name: "Charcoal Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/charcoal.png" },
  { id: 31, name: "Dates Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/dates.png" },
  { id: 32, name: "Frankincense Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/frankincense.png" },
  { id: 33, name: "Camel Milk Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/camel-milk.png" },
  { id: 34, name: "Green Apple Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/green-apple.png" },
  { id: 35, name: "Indigo Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/indigo.png" },
  { id: 36, name: "Jasmine Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/jasmine.png" },
  { id: 37, name: "Lavender Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/lavender.png" },
  { id: 38, name: "Lemon Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/lemon.png" },
  { id: 39, name: "Musk Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/musk.png" },
  { id: 40, name: "Myrrh Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/myrrh.png" },
  { id: 41, name: "Neem Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/neem.png" },
  { id: 42, name: "Oudh Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/oudh.png" },
  { id: 43, name: "Papaya Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/papaya.png" },
  { id: 44, name: "Rose Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/rose.png" },
  { id: 45, name: "Saffron Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/saffron.png" },
  { id: 46, name: "Sandalwood Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/sandalwood.png" },
  { id: 47, name: "Turmeric Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/turmeric.png" },
  { id: 48, name: "Vanilla Soap", category: "Soaps", scent: "100% Natural & Pure", price: "$9.99*", image: "/products/soaps/vanilla.png" },
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
              {categories.map((category) => {
                const hasProducts = category === "All" || allProducts.some(product => product.category === category)
                return hasProducts ? (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer px-6 py-2 rounded-sm text-sm font-medium transition-all ${selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                      }`}
                  >
                    {category}
                  </button>
                ) : null
              })}
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
