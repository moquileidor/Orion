'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí irá la lógica de registro
    console.log('Register attempt:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formControls = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.05, duration: 0.2 }
    })
  }

  return (
    <motion.div 
      className="p-8 backdrop-blur-md bg-black/30 rounded-2xl border border-metallic/10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div 
        className="flex justify-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <div className="relative w-32 h-8">
          <Image
            src="/orion-symbol.png"
            alt="ORION"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
      <motion.h1 
        className="text-2xl font-bold text-center mb-8 text-electric"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        Crear Cuenta
      </motion.h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          custom={1}
          variants={formControls}
          initial="hidden"
          animate="visible"
        >
          <label htmlFor="name" className="block text-sm font-medium text-metallic mb-2">
            Nombre Completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/50 border border-metallic/20 rounded-lg text-white focus:outline-none focus:border-electric transition-colors"
            required
          />
        </motion.div>
        <motion.div
          custom={2}
          variants={formControls}
          initial="hidden"
          animate="visible"
        >
          <label htmlFor="email" className="block text-sm font-medium text-metallic mb-2">
            Correo Electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/50 border border-metallic/20 rounded-lg text-white focus:outline-none focus:border-electric transition-colors"
            required
          />
        </motion.div>
        <motion.div
          custom={3}
          variants={formControls}
          initial="hidden"
          animate="visible"
        >
          <label htmlFor="password" className="block text-sm font-medium text-metallic mb-2">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/50 border border-metallic/20 rounded-lg text-white focus:outline-none focus:border-electric transition-colors"
            required
          />
        </motion.div>
        <motion.div
          custom={4}
          variants={formControls}
          initial="hidden"
          animate="visible"
        >
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-metallic mb-2">
            Confirmar Contraseña
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/50 border border-metallic/20 rounded-lg text-white focus:outline-none focus:border-electric transition-colors"
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          className="w-full py-3 px-4 bg-electric hover:bg-electric-light text-white rounded-lg transition-colors"
          custom={5}
          variants={formControls}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Registrarse
        </motion.button>
      </form>
      <motion.p 
        className="mt-6 text-center text-metallic"
        custom={6}
        variants={formControls}
        initial="hidden"
        animate="visible"
      >
        ¿Ya tienes una cuenta?{' '}
        <Link href="/auth/login" className="text-electric hover:text-electric-light transition-colors">
          Inicia Sesión
        </Link>
      </motion.p>
    </motion.div>
  )
}