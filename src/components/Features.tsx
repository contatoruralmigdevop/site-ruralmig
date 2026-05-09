import React from 'react';
import { ShieldCheck, Clock, Users } from 'lucide-react';

export default function Features() {
  return (
    <section id="sobre" className="py-24 bg-[#EAE8E4] text-[#20221F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
           <pattern id="plantation-curves" width="100" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
             {/* Furrow lines (solid) */}
             <path d="M 0 20 Q 25 0, 50 20 T 100 20" fill="none" stroke="#143A2D" strokeWidth="1.5" />
             <path d="M 0 60 Q 25 40, 50 60 T 100 60" fill="none" stroke="#143A2D" strokeWidth="1.5" />
             
             {/* Crop lines (dashed) */}
             <path d="M 0 0 Q 25 -20, 50 0 T 100 0" fill="none" stroke="#143A2D" strokeWidth="1" strokeDasharray="4 4" />
             <path d="M 0 40 Q 25 20, 50 40 T 100 40" fill="none" stroke="#143A2D" strokeWidth="1" strokeDasharray="4 4" />
             <path d="M 0 80 Q 25 60, 50 80 T 100 80" fill="none" stroke="#143A2D" strokeWidth="1" strokeDasharray="4 4" />
           </pattern>
           <rect width="100%" height="100%" fill="url(#plantation-curves)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Segurança e experiência <br/> a serviço do produtor
            </h2>
            <p className="text-[#20221F]/70 text-lg mb-8 leading-relaxed">
              A RuralMIG nasceu para simplificar. Sabemos que o dia a dia no campo é intenso e que a burocracia toma um tempo precioso. Nossa missão é assumir essa responsabilidade, garantindo que sua propriedade e seus negócios estejam sempre protegidos e regulares.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#143A2D] rounded-full flex items-center justify-center text-[#4EA520]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Segurança Jurídica</h4>
                  <p className="text-[#20221F]/70">Processos conduzidos com rigor técnico para evitar passivos e problemas futuros.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#143A2D] rounded-full flex items-center justify-center text-[#4EA520]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Agilidade nos Processos</h4>
                  <p className="text-[#20221F]/70">Conhecemos os atalhos e caminhos legais para resolver pendências com rapidez.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#143A2D] rounded-full flex items-center justify-center text-[#4EA520]">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Atendimento Humanizado</h4>
                  <p className="text-[#20221F]/70">Falamos a língua do produtor. Sem "juridiquês", com clareza e transparência.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[#AB7859]/50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop" 
                alt="Paisagem rural tranquila" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143A2D] to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-serif italic font-light">
                  "O campo não para, e a gente trabalha para que você não precise parar."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
