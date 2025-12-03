"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"

const blogPosts = [
  {
    id: 1,
    title: "You Can Eat My Soap",
    excerpt: "Learn why natural ingredients make all the difference...",
    date: "January 30, 2024",
    image: "/soap-bars-on-a-plate.jpg",
  },
  {
    id: 2,
    title: "We Can Do Better",
    excerpt: "Exploring sustainable practices in soap making...",
    date: "January 28, 2024",
    image: "/artisan-soap-making-process.jpg",
  },
  {
    id: 3,
    title: "Charging Forward",
    excerpt: "How we're revolutionizing the handmade soap industry...",
    date: "January 25, 2024",
    image: "/organic-soap-ingredients-and-bottles.jpg",
  },
]

export default function BlogSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-subtitle mb-4">Blog</p>
          <h2 className="heading-md text-foreground mb-4">
            Latest News & Stories
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover tips, stories, and insights about natural skincare
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="card-modern overflow-hidden bg-white dark:bg-card h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-secondary/30">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm shadow-sm">
                    <p className="text-xs font-medium text-muted-foreground">{post.date}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-body mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                  
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
