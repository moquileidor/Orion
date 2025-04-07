'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí irá la lógica de envío del formulario
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <h2 className="section-title mb-6 md:mb-8">Inicia Tu Transformación Digital</h2>
      <p className="text-base md:text-lg text-metallic mb-6 md:mb-8">
        ¿Listo para llevar tu empresa al siguiente nivel? Agenda una consulta gratuita 
        y descubre cómo ORION puede potenciar tu negocio con tecnología estratégica.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-metallic mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/50 border border-metallic/20 rounded-lg text-white focus:outline-none focus:border-electric transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-metallic mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/50 border border-metallic/20 rounded-lg text-white focus:outline-none focus:border-electric transition-colors"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-metallic mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/50 border border-metallic/20 rounded-lg text-white focus:outline-none focus:border-electric transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-metallic mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-black/50 border border-metallic/20 rounded-lg text-white focus:outline-none focus:border-electric transition-colors"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-electric hover:bg-electric-light text-white rounded-lg transition-colors"
        >
          Enviar Mensaje
        </button>
      </form>
    </>
  )
}