import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#EAE8E4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-10 bg-[#143A2D] text-white flex flex-col justify-between relative">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 font-serif">Vamos conversar?</h3>
              <p className="text-white/80 mb-10">
                Entre em contato para uma análise inicial da sua situação. Estamos prontos para atender você.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-2">Telefone / WhatsApp</p>
                    <div className="space-y-1">
                      <p className="text-sm"><span className="font-semibold text-white">Flavia Nunes:</span> <a href="tel:+5535910014005" className="text-white/80 hover:text-[#E7AB15] transition-colors">(35) 91001-4005</a></p>
                      <p className="text-sm"><span className="font-semibold text-white">Fernando Nunes:</span> <a href="tel:+5535910027656" className="text-white/80 hover:text-[#E7AB15] transition-colors">(35) 91002-7656</a></p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:contato@ruralmig.com.br" className="text-sm font-semibold text-white hover:text-[#E7AB15] transition-colors">contato@ruralmig.com.br</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Endereço</p>
                    <p className="text-sm font-medium text-white">Rua Silviano Brandão, 89-B</p>
                    <p className="text-sm text-white/80">Vila do Colégio, Cambuí - MG</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span>Atendimento de Seg. a Sex. das 8h às 18h</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h4 className="text-2xl font-bold text-[#20221F] mb-6">Solicite Atendimento</h4>
            <form action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || 'SEU_ID_AQUI'}`} method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#20221F]/80 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#EAE8E4]/50 border border-[#20221F]/10 focus:border-[#143A2D] focus:ring-1 focus:ring-[#143A2D] outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#20221F]/80 mb-1">Telefone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#EAE8E4]/50 border border-[#20221F]/10 focus:border-[#143A2D] focus:ring-1 focus:ring-[#143A2D] outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#20221F]/80 mb-1">E-mail</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#EAE8E4]/50 border border-[#20221F]/10 focus:border-[#143A2D] focus:ring-1 focus:ring-[#143A2D] outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#20221F]/80 mb-1">Como podemos ajudar?</label>
                <select name="subject" className="w-full px-4 py-3 rounded-lg bg-[#EAE8E4]/50 border border-[#20221F]/10 focus:border-[#143A2D] focus:ring-1 focus:ring-[#143A2D] outline-none transition-all">
                  <option>Regularização de Imóvel</option>
                  <option>INSS Rural</option>
                  <option>Inventário</option>
                  <option>Georreferenciamento</option>
                  <option>Outros Assuntos</option>
                </select>
              </div>
              
              <button type="submit" className="w-full bg-[#E7AB15] text-[#143A2D] font-bold py-4 rounded-lg hover:bg-[#D49B13] transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-[#E7AB15]/20">
                Enviar Mensagem
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
