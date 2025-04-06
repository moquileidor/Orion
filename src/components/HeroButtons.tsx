'use client'

export default function HeroButtons() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex justify-center gap-6">
      <button 
        onClick={() => scrollToSection('servicios')}
        className="px-8 py-3 bg-electric hover:bg-electric-light text-white rounded-lg transition-colors"
      >
        Descubre Nuestras Soluciones
      </button>
      <button 
        onClick={() => scrollToSection('contacto')}
        className="px-8 py-3 border border-metallic hover:border-electric text-metallic hover:text-electric rounded-lg transition-colors"
      >
        Agenda una Consulta
      </button>
    </div>
  )
} 