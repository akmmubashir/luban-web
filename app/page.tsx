import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import StorySection from "@/components/story-section"
import ProductGallery from "@/components/product-gallery"
// import BlogSection from "@/components/blog-section"
import SubscriptionCTA from "@/components/subscription-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Benefits />
        <StorySection />
        <ProductGallery />
        {/* <BlogSection /> */}
        <SubscriptionCTA />
        <Footer />
      </div>
    </main>
  )
}
