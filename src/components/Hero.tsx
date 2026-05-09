import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="início" className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-[#143A2D]">
      {/* Abstract Background Elements - Planting Lines / Maps */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#EAE8E4" strokeWidth="0.5" />
            </pattern>
            <pattern id="lines" width="100" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="100" y2="0" stroke="#AB7859" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />
          <rect x="60%" y="-20%" width="80%" height="150%" fill="url(#lines)" opacity="0.2" />
        </svg>
      </div>
      
      {/* Organic Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#143A2D]/20 to-transparent z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#EAE8E4]/5 to-transparent rounded-tr-[100px] z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE8E4]/10 text-[#EAE8E4] text-xs font-semibold tracking-wide uppercase mb-6 border border-[#EAE8E4]/20">
              <span className="w-2 h-2 rounded-full bg-[#AB7859]"></span>
              Assessoria Rural Especializada
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-6 font-serif pr-4">
              Há 27 anos sendo o escritório que resolve a burocracia do campo.
            </h1>
            
            <p className="text-sm md:text-base text-white/90 mb-8 leading-relaxed max-w-xl pr-4">
              Oferecemos segurança jurídica e contábil para que você tenha tranquilidade e foque no que realmente importa: <strong className="text-white font-semibold">produzir.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 bg-[#E7AB15] text-[#143A2D] px-8 py-4 rounded-xl text-base font-bold hover:bg-[#D49B13] transition-all shadow-xl shadow-[#E7AB15]/30 hover:shadow-2xl hover:-translate-y-1"
              >
                Solicitar atendimento
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5535910014005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-transparent text-white border border-white/20 px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#E7AB15] hover:text-[#143A2D] hover:border-[#E7AB15] transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-white/80 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#4EA520]" />
                <span>Tradição e Confiança</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#4EA520]" />
                <span>Atendimento Ágil e Remoto</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-[#EAE8E4]/10 border-4 border-white">
              {/* Placeholder for a high-quality rural image */}
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" 
                alt="Produtor rural analisando plantação" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 bg-[#20221F]/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#EAE8E4]/10 rounded-lg text-[#EAE8E4]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</p>
                    <p className="text-sm font-bold text-white">Regularização Concluída</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background elements behind image */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#AB7859]/30 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#143A2D] rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
