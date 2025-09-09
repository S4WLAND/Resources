import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />

      {/* Demo content to show scroll behavior */}
      <div className="pt-32 px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <section id="home" className="text-center py-20">
            <h1 className="text-4xl md:text-6xl text-white mb-6">
              Modern Navbar Design
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Un navbar premium con glassmorphism, animaciones
              fluidas y diseño responsive. Scroll hacia abajo
              para ver el efecto de blur aumentado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-orange-500/25">
                Ver Demo
              </button>
              <button className="px-8 py-3 border border-zinc-600 text-zinc-300 rounded-lg font-medium hover:bg-zinc-800 transition-colors">
                Documentación
              </button>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Características
              </h2>
              <p className="text-zinc-400 text-lg">
                Todas las especificaciones implementadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Glassmorphism",
                  description:
                    "Efecto de vidrio con backdrop-blur y transparencias suaves",
                  icon: "✨",
                },
                {
                  title: "Animaciones Fluidas",
                  description:
                    "Transiciones suaves con cubic-bezier y efectos hover",
                  icon: "🎭",
                },
                {
                  title: "Responsive Design",
                  description:
                    "Adaptable a desktop y mobile con menú overlay",
                  icon: "📱",
                },
                {
                  title: "Theme Toggle",
                  description:
                    "Cambio entre tema claro y oscuro con animación",
                  icon: "🌙",
                },
                {
                  title: "Estados Interactivos",
                  description:
                    "Hover, active y scroll states con indicadores visuales",
                  icon: "⚡",
                },
                {
                  title: "Paleta Premium",
                  description:
                    "Colores vibrantes con gradientes y sombras",
                  icon: "🎨",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-800/70 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl text-white mb-8">
                Especificaciones Técnicas
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl text-cyan-400 mb-4">
                    Estilo Visual
                  </h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>
                      • Backdrop-blur con rgba(255,255,255,0.1)
                    </li>
                    <li>
                      • Bordes sutiles con rgba(255,255,255,0.2)
                    </li>
                    <li>
                      • Sombras con colores primary/accent
                    </li>
                    <li>• Border radius: 16px/8px</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl text-emerald-400 mb-4">
                    Interacciones
                  </h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>
                      • Hover: escala 1.05, sombra aumentada
                    </li>
                    <li>• Active states con indicadores</li>
                    <li>• Transiciones 0.3s cubic-bezier</li>
                    <li>• Mobile stagger animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl text-white mb-8">
                Componentes
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    name: "Logo JP",
                    desc: "Gradiente circular",
                  },
                  {
                    name: "Menu Items",
                    desc: "Emojis + texto",
                  },
                  {
                    name: "Theme Toggle",
                    desc: "Sol/Luna switch",
                  },
                  {
                    name: "CTA Button",
                    desc: "Gradiente premium",
                  },
                ].map((component, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-600 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <h4 className="text-white mb-2">
                      {component.name}
                    </h4>
                    <p className="text-sm text-zinc-400">
                      {component.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Engineering Section */}
          <section id="engineering" className="py-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl text-white mb-8">
                Tecnologías
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "React",
                  "Motion/React",
                  "Tailwind CSS",
                  "TypeScript",
                  "Lucide Icons",
                  "CSS Variables",
                  "Glassmorphism",
                  "Responsive Design",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-full text-zinc-300 text-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Extra content for scroll testing */}
          <div className="py-40 text-center">
            <p className="text-zinc-500 text-lg">
              Scroll hacia arriba para ver el navbar sticky con
              efecto glassmorphism
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}