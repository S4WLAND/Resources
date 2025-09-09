import React from 'react';

const ColorPalette: React.FC = () => {
  const colorScheme = {
    grays: [
      { name: 'zinc-900', value: '#18181b', usage: 'Fondo principal' },
      { name: 'zinc-800', value: '#27272a', usage: 'Cards y contenedores' },
      { name: 'zinc-700', value: '#3f3f46', usage: 'Bordes y divisores' },
      { name: 'zinc-600', value: '#52525b', usage: 'Bordes hover' },
      { name: 'zinc-400', value: '#a1a1aa', usage: 'Texto secundario' },
      { name: 'zinc-300', value: '#d4d4d8', usage: 'Texto principal' }
    ],
    warmGradients: [
      { 
        name: 'Principal', 
        value: 'linear-gradient(135deg, #ff6b35 0%, #e63946 100%)', 
        usage: 'Botones CTA, Logo, Progress bars',
        tailwind: 'from-orange-500 to-red-500',
        brightness: 'brightness(0.85) saturate(0.9)'
      },
      { 
        name: 'Indicadores', 
        value: 'linear-gradient(to right, #ff6b35 0%, #e63946 100%)', 
        usage: 'Active states, Progress indicators',
        tailwind: 'from-orange-500 to-red-500',
        brightness: 'brightness(0.8) saturate(0.85)'
      }
    ],
    coolAccents: [
      { name: 'cyan-400', value: '#22d3ee', usage: 'Títulos de sección' },
      { name: 'cyan-500', value: '#06b6d4', usage: 'Hover effects independientes' },
      { name: 'emerald-400', value: '#34d399', usage: 'Títulos alternativos' },
      { name: 'emerald-500', value: '#10b981', usage: 'Theme toggle (dark)' }
    ],
    shadows: [
      { 
        name: 'Primary Shadow', 
        value: 'rgba(255, 107, 53, 0.15)', 
        usage: 'Sombras principales (reducida)' 
      },
      { 
        name: 'Glow Effect', 
        value: 'rgba(255, 107, 53, 0.1)', 
        usage: 'Efectos de brillo suaves' 
      },
      { 
        name: 'Navbar Shadow', 
        value: 'rgba(255, 107, 53, 0.06)', 
        usage: 'Sombra del navbar al hacer scroll' 
      }
    ],
    filters: [
      {
        name: 'Brightness Reduction',
        value: 'brightness(0.85)',
        usage: 'Reduce el brillo manteniendo el color'
      },
      {
        name: 'Saturation Reduction', 
        value: 'saturate(0.9)',
        usage: 'Reduce la intensidad del color'
      },
      {
        name: 'Combined Filter',
        value: 'brightness(0.85) saturate(0.9)',
        usage: 'Efecto combinado más tenue'
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-white mb-4">Paleta de Colores</h2>
        <p className="text-zinc-400">Esquema cromático con filtros CSS - Mismos colores, menor intensidad visual</p>
      </div>

      {/* Grises Base */}
      <section>
        <h3 className="text-xl text-zinc-300 mb-6">Base Neutra - Grises</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {colorScheme.grays.map((color, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
              <div 
                className="w-full h-16 rounded-md mb-3 border border-zinc-600"
                style={{ backgroundColor: color.value }}
              ></div>
              <div className="text-sm">
                <div className="text-white font-medium">{color.name}</div>
                <div className="text-zinc-400 text-xs mt-1">{color.value}</div>
                <div className="text-zinc-500 text-xs mt-2">{color.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Degradados Cálidos */}
      <section>
        <h3 className="text-xl text-zinc-300 mb-6">Degradados Principales - Naranjas/Rojos con Filtros CSS</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {colorScheme.warmGradients.map((gradient, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <div className="space-y-3 mb-4">
                {/* Original */}
                <div>
                  <div className="text-xs text-zinc-400 mb-1">Original:</div>
                  <div 
                    className="w-full h-12 rounded-lg border border-zinc-600"
                    style={{ background: gradient.value }}
                  ></div>
                </div>
                {/* Con filtro */}
                <div>
                  <div className="text-xs text-zinc-400 mb-1">Con filtro aplicado:</div>
                  <div 
                    className="w-full h-12 rounded-lg border border-zinc-600"
                    style={{ 
                      background: gradient.value,
                      filter: gradient.brightness
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="text-white font-medium text-lg">{gradient.name}</div>
                <div className="text-zinc-400 text-sm mt-1">{gradient.tailwind}</div>
                <div className="text-orange-400 text-xs mt-1">{gradient.brightness}</div>
                <div className="text-zinc-500 text-sm mt-2">{gradient.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Acentos Fríos */}
      <section>
        <h3 className="text-xl text-zinc-300 mb-6">Acentos Dinámicos - Azules/Verdes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colorScheme.coolAccents.map((color, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
              <div 
                className="w-full h-16 rounded-md mb-3 border border-zinc-600"
                style={{ backgroundColor: color.value }}
              ></div>
              <div className="text-sm">
                <div className="text-white font-medium">{color.name}</div>
                <div className="text-zinc-400 text-xs mt-1">{color.value}</div>
                <div className="text-zinc-500 text-xs mt-2">{color.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sombras */}
      <section>
        <h3 className="text-xl text-zinc-300 mb-6">Sistema de Sombras Reducidas</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {colorScheme.shadows.map((shadow, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <div 
                className="w-full h-16 bg-zinc-700 rounded-lg mb-4 relative"
                style={{ 
                  boxShadow: `0 8px 25px ${shadow.value}`,
                }}
              >
                <div className="absolute inset-2 bg-zinc-600 rounded-md"></div>
              </div>
              <div>
                <div className="text-white font-medium">{shadow.name}</div>
                <div className="text-zinc-400 text-xs mt-1">{shadow.value}</div>
                <div className="text-zinc-500 text-sm mt-2">{shadow.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filtros CSS */}
      <section>
        <h3 className="text-xl text-zinc-300 mb-6">Filtros CSS para Reducir Brillo</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {colorScheme.filters.map((filter, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <div className="space-y-3 mb-4">
                <div 
                  className="w-full h-12 rounded-lg border border-zinc-600"
                  style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #e63946 100%)' }}
                ></div>
                <div 
                  className="w-full h-12 rounded-lg border border-zinc-600"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #e63946 100%)',
                    filter: filter.value
                  }}
                ></div>
              </div>
              <div>
                <div className="text-white font-medium">{filter.name}</div>
                <div className="text-orange-400 text-xs mt-1">{filter.value}</div>
                <div className="text-zinc-500 text-sm mt-2">{filter.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ejemplos de Uso */}
      <section>
        <h3 className="text-xl text-zinc-300 mb-6">Ejemplos de Aplicación</h3>
        <div className="space-y-6">
          
          {/* Botón CTA */}
          <div className="flex items-center justify-between bg-zinc-800 rounded-lg p-6 border border-zinc-700">
            <div>
              <div className="text-white font-medium">Botón CTA</div>
              <div className="text-zinc-400 text-sm">Degradado principal con sombra tenue</div>
            </div>
            <button 
              className="px-6 py-3 rounded-lg text-white font-medium hover:scale-105 transition-transform"
              style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #e63946 100%)',
                boxShadow: '0 4px 15px rgba(255, 107, 53, 0.15)',
                filter: 'brightness(0.85) saturate(0.9)'
              }}
            >
              Contact
            </button>
          </div>

          {/* Card con hover */}
          <div 
            className="flex items-center justify-between bg-zinc-800 rounded-lg p-6 border border-zinc-700 transition-all duration-300 group cursor-pointer"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgb(63 63 70)';
            }}
          >
            <div>
              <div className="text-white font-medium">Card con Hover</div>
              <div className="text-zinc-400 text-sm">Borde naranja con menos intensidad</div>
            </div>
            <div 
              className="w-4 h-4 rounded-full"
              style={{
                background: 'linear-gradient(to right, #ff6b35 0%, #e63946 100%)',
                filter: 'brightness(0.85) saturate(0.9)'
              }}
            ></div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ColorPalette;