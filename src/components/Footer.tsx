import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#EAE8E4] text-[#20221F] pt-12 border-t border-[#20221F]/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
               <img 
                src="/logo.png.png" 
                alt="Logo RuralMig"
                className="h-24 md:h-32 w-auto object-contain"
              />
            </div>
            <p className="text-[#20221F]/70 max-w-sm">
              O escritório que resolve a burocracia do campo. Segurança, agilidade e confiança para o produtor rural.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-4 text-[#143A2D]">Serviços</h5>
            <ul className="space-y-2 text-[#20221F]/70">
              <li><a href="#" className="hover:text-[#E7AB15] transition-colors">Regularização</a></li>
              <li><a href="#" className="hover:text-[#E7AB15] transition-colors">INSS Rural</a></li>
              <li><a href="#" className="hover:text-[#E7AB15] transition-colors">Georreferenciamento</a></li>
              <li><a href="#" className="hover:text-[#E7AB15] transition-colors">Contabilidade</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-4 text-[#143A2D]">Contato</h5>
            <ul className="space-y-4 text-[#20221F]/70 text-sm">
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-[#20221F]">Flavia Nunes</span>
                <a href="tel:+5535910014005" className="hover:text-[#E7AB15] transition-colors">(35) 91001-4005</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-[#20221F]">Fernando Nunes</span>
                <a href="tel:+5535910027656" className="hover:text-[#E7AB15] transition-colors">(35) 91002-7656</a>
              </li>
              <li className="pt-2 border-t border-[#20221F]/10">
                <a href="mailto:contato@ruralmig.com.br" className="hover:text-[#E7AB15] transition-colors">contato@ruralmig.com.br</a>
              </li>
              <li className="leading-relaxed">
                Rua Silviano Brandão, 89-B<br />
                Vila do Colégio, Cambuí - MG
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      
      <div className="bg-[#20221F] py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
          <p>&copy; {new Date().getFullYear()} RuralMIG. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#E7AB15] transition-colors font-medium">Política de Privacidade</a>
            <a href="#" className="hover:text-[#E7AB15] transition-colors font-medium">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
