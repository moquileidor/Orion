'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavigationMenu() {
  const [showNav, setShowNav] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.5)
      
      const sections = ['hero', 'servicios', 'para-quien', 'sobre-nosotros', 'contacto']
      
      let nearestSection = 'hero'
      let minDistance = Infinity

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementCenter = rect.top + rect.height / 2
          const screenCenter = window.innerHeight / 2
          const distance = Math.abs(elementCenter - screenCenter)
          
          if (distance < minDistance) {
            minDistance = distance
            nearestSection = section
          }
        }
      })
      
      setActiveSection(nearestSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="mx-auto px-6 py-4 backdrop-blur-md bg-black/30">
        <div className="container mx-auto flex items-center justify-between">
          <div className="relative w-24 h-8">
            <Image
              src="/orion-symbol.png"
              alt="ORION"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-12">
            <button
              onClick={() => scrollToSection('servicios')}
              className={`text-lg transition-colors ${
                activeSection === 'servicios' ? 'text-electric' : 'text-metallic hover:text-electric-light'
              }`}
            >
              Soluciones
            </button>
            <button
              onClick={() => scrollToSection('para-quien')}
              className={`text-lg transition-colors ${
                activeSection === 'para-quien' ? 'text-electric' : 'text-metallic hover:text-electric-light'
              }`}
            >
              Para Quién
            </button>
            <button
              onClick={() => scrollToSection('sobre-nosotros')}
              className={`text-lg transition-colors ${
                activeSection === 'sobre-nosotros' ? 'text-electric' : 'text-metallic hover:text-electric-light'
              }`}
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className={`text-lg transition-colors ${
                activeSection === 'contacto' ? 'text-electric' : 'text-metallic hover:text-electric-light'
              }`}
            >
              Contacto
            </button>
            <div className="flex items-center gap-4 ml-8 border-l border-metallic/20 pl-8">
              <Link 
                href="/auth/login"
                className="text-lg text-metallic hover:text-electric-light transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
                </svg>
                Iniciar Sesión
              </Link>
              <Link 
                href="/auth/register"
                className="text-lg text-metallic hover:text-electric-light transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Registro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 