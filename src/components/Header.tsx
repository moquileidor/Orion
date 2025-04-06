import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-black/95 to-space-black/80 backdrop-blur-sm border-b border-metallic/10" />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 relative mr-2">
              <Image
                src="/orion-logo.png"
                alt="Logo ORION"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-electric via-electric-light to-accent-cyan bg-clip-text text-transparent group-hover:from-electric-light group-hover:to-electric transition-all duration-300">ORION</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/servicios" className="text-metallic hover:text-electric transition-colors">
              Servicios
            </Link>
            <Link href="/nosotros" className="text-metallic hover:text-electric transition-colors">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-metallic hover:text-electric transition-colors">
              Contacto
            </Link>
            <button className="btn-primary">Empezar</button>
          </nav>

          <button className="md:hidden text-electric" aria-label="Menú">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}