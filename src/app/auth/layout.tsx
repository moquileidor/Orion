'use client'

import { motion } from 'framer-motion'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/fondo.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/80" />
      <motion.div 
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.2,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}