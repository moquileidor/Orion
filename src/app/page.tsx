import Image from 'next/image'
import { Metadata } from 'next'
import NavigationMenu from '@/components/NavigationMenu'
import HeroButtons from '@/components/HeroButtons'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'ORION - Transformación Digital Empresarial',
  description: 'Empresa líder en desarrollo de software empresarial estratégico. No vendemos código, entregamos resultados, impacto y evolución digital.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationMenu />
      
      {/* Sección Hero */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="fixed inset-0 bg-[url('/fondo.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-black opacity-80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-24">
              <div className="relative w-[1000px] h-[200px] group">
                <Image
                  src="/imagen.png"
                  alt="ORION Logo Personalizado"
                  fill
                  className="object-contain drop-shadow-[0_0_60px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_80px_rgba(255,255,255,0.7)] transition-all duration-700 scale-110 group-hover:scale-105"
                  priority
                  unoptimized
                />
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="relative">
                  <span className="text-5xl font-bold text-white">
                    No vendemos código.
                  </span>
                  <br />
                  <span className="text-5xl font-bold bg-gradient-to-r from-electric via-electric-light to-electric bg-clip-text text-transparent">
                    Entregamos evolución digital.
                  </span>
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-electric to-transparent"></div>
                </h2>
                <p className="text-2xl text-accent-silver max-w-3xl mx-auto font-light tracking-wide">
                  Transformamos empresas a través de software estratégico y tecnología de vanguardia.
                </p>
              </div>
              <div className="pt-4">
                <HeroButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="relative min-h-screen" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
          <div className="absolute inset-0 bg-[url('/fondo.jpg')] bg-cover bg-center opacity-70" />
          <div className="absolute inset-0 bg-black opacity-80" />
          
          {/* Símbolo de fondo */}
          <div className="fixed inset-0" style={{ top: '100vh' }}>
            <div className="absolute -top-[400px] right-0 w-[1200px] h-[800px] opacity-[0.02]">
              <Image
                src="/orion-symbol.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Contenido de las secciones */}
          <div className="relative z-10">
            {/* Sección de Servicios */}
            <section id="servicios" className="relative py-32 overflow-hidden">
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="section-title text-center mb-16">Soluciones Empresariales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div className="card group backdrop-blur-md">
                    <div className="mb-4 text-electric group-hover:text-electric-light transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-electric-light transition-colors">
                      Software Empresarial a Medida
                    </h3>
                    <p className="text-metallic">
                      Desarrollamos soluciones personalizadas que se adaptan perfectamente a tus procesos y objetivos de negocio.
                    </p>
                  </div>
                  <div className="card group backdrop-blur-md">
                    <div className="mb-4 text-electric group-hover:text-electric-light transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-electric-light transition-colors">
                      Integración y Modernización
                    </h3>
                    <p className="text-metallic">
                      Actualizamos y conectamos tus sistemas existentes para crear un ecosistema digital eficiente.
                    </p>
                  </div>
                  <div className="card group backdrop-blur-md">
                    <div className="mb-4 text-electric group-hover:text-electric-light transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-electric-light transition-colors">
                      Transformación Digital
                    </h3>
                    <p className="text-metallic">
                      Implementamos tecnologías emergentes y automatización para impulsar tu competitividad.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sección Para Quién */}
            <section id="para-quien" className="relative py-32 overflow-hidden">
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="section-title text-center mb-16">¿Para Quién es ORION?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="p-6 backdrop-blur-md bg-black/30 rounded-xl border border-metallic/10 hover:border-electric/30 transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-4 text-electric">Corporaciones</h3>
                    <p className="text-metallic">
                      Soluciones empresariales de alto nivel para grandes organizaciones que buscan ventaja competitiva.
                    </p>
                  </div>
                  <div className="p-6 backdrop-blur-md bg-black/30 rounded-xl border border-metallic/10 hover:border-electric/30 transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-4 text-electric">Startups</h3>
                    <p className="text-metallic">
                      Arquitecturas escalables para empresas emergentes con visión de crecimiento acelerado.
                    </p>
                  </div>
                  <div className="p-6 backdrop-blur-md bg-black/30 rounded-xl border border-metallic/10 hover:border-electric/30 transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-4 text-electric">PyMEs</h3>
                    <p className="text-metallic">
                      Digitalización accesible y efectiva para pequeñas y medianas empresas.
                    </p>
                  </div>
                  <div className="p-6 backdrop-blur-md bg-black/30 rounded-xl border border-metallic/10 hover:border-electric/30 transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-4 text-electric">Instituciones Educativas</h3>
                    <p className="text-metallic">
                      Sistemas innovadores para modernizar la gestión y experiencia educativa.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sección Sobre Nosotros */}
            <section id="sobre-nosotros" className="relative py-32 overflow-hidden">
              <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="backdrop-blur-md p-12 rounded-xl border border-metallic/5 bg-black/70">
                    <h2 className="section-title mb-8">Nuestro Enfoque</h2>
                    <div className="space-y-6">
                      <p className="text-lg text-metallic">
                        En ORION, no solo desarrollamos software; creamos soluciones estratégicas que impulsan 
                        el crecimiento empresarial. Entendemos tu negocio antes de escribir una sola línea de código.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="text-electric mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-metallic">
                            <span className="text-white font-medium">Arquitecturas Modulares:</span>{' '}
                            Diseñadas para crecer sin necesidad de reescribir desde cero.
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="text-electric mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-metallic">
                            <span className="text-white font-medium">Metodologías Ágiles Plus:</span>{' '}
                            Desarrollo rápido con visión estratégica empresarial.
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="text-electric mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-metallic">
                            <span className="text-white font-medium">Tecnologías Emergentes:</span>{' '}
                            IA, automatización y sistemas cloud integrados.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[500px] overflow-hidden rounded-xl shadow-2xl border border-metallic/10">
                    <Image
                      src="/about-image.jpg"
                      alt="Sobre ORION"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            </section>

            {/* Sección de Contacto */}
            <section id="contacto" className="relative py-32 overflow-hidden">
              <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="backdrop-blur-md p-12 rounded-xl border border-metallic/5 bg-black/70">
                    <h2 className="section-title mb-8">Inicia Tu Transformación Digital</h2>
                    <p className="text-lg text-metallic mb-8">
                      ¿Listo para llevar tu empresa al siguiente nivel? Agenda una consulta gratuita 
                      y descubre cómo ORION puede potenciar tu negocio con tecnología estratégica.
                    </p>
                    <ContactForm />
                  </div>
                  <div className="space-y-8">
                    <div className="backdrop-blur-md p-8 rounded-xl border border-metallic/5 bg-black/70">
                      <h3 className="text-xl font-bold text-electric mb-4">Ubicación</h3>
                      <p className="text-metallic">Medellín, Colombia</p>
                    </div>
                    <div className="backdrop-blur-md p-8 rounded-xl border border-metallic/5 bg-black/70">
                      <h3 className="text-xl font-bold text-electric mb-4">Correo Electrónico</h3>
                      <p className="text-metallic">contacto@orion.mx</p>
                    </div>
                    <div className="backdrop-blur-md p-8 rounded-xl border border-metallic/5 bg-black/70">
                      <h3 className="text-xl font-bold text-electric mb-4">Horario de Atención</h3>
                      <p className="text-metallic">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 