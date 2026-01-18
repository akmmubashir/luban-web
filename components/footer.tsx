"use client"
import Image from "next/image"
import { motion } from "motion/react"
import { Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "#contact" },
  ],
  account: [
    { label: "Sign Up", href: "#signup" },
    { label: "Log In", href: "#login" },
    { label: "Cart", href: "#cart" },
  ],
}

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
    { icon: Twitter, label: "X", href: "https://twitter.com" },
  ]

  return (
    <footer id="contact" className="bg-foreground text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="relative w-40 h-16 md:w-52 md:h-20 mb-4">
              <Image
                src="/logo.png"
                alt="Handmade Soap"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Crafted with love. Made with nature. Delivered with care.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-primary"
                />
                <button className="cursor-pointer px-6 py-2 rounded-full bg-linear-to-r from-primary to-primary-dark text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all">
                  Join
                </button>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Account Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-6 text-lg">Account</h4>
            <ul className="space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-6 text-lg">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </motion.a>
                )
              })}
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Contact</p>
              <p className="text-white/70 text-sm">hello@soapclub.com</p>
              <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/60 text-sm">
            © 2025 Handmade Soap Club. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
