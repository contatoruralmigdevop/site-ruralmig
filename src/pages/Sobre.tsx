import React from 'react';
import { Users, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="pt-24 md:pt-32 pb-16 bg-[#EAE8E4] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#143A2D] mb-6 font-serif">
              O escritório do <span className="text-[#AB7859]">Agricultor</span>
            </h1>
            <p className="text-xl text-[#20221F]/80 max-w-2xl mx-auto">
              Agricultor, você precisa, nós resolvemos.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[#143A2D] mb-6 font-serif">Nossa Missão</h2>
                <p className="text-[#20221F]/70 mb-6 leading-relaxed">
                  Nós somos um escritório de prestação de serviços voltado para o agricultor. Garantimos um atendimento especializado, com seriedade, agilidade e segurança.
                </p>
                <p className="text-[#20221F]/70 leading-relaxed">
                  Temos o compromisso de defender os direitos e necessidade de quem vive e trabalha no campo. Com experiência e competência cuidamos de toda burocracia por você.
                </p>
              </div>
              <div className="bg-[#143A2D] p-10 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#AB7859] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <h2 className="text-3xl font-bold mb-6 font-serif relative z-10">Seu Parceiro de Confiança</h2>
                <p className="text-white/90 leading-relaxed relative z-10">
                  Se você é agricultor e busca um parceiro de confiança para resolver suas necessidades e te apoiar no dia a dia, conte com a gente. Estamos aqui para caminhar ao seu lado, em todas as fases da vida, com respeito, profissionalismo e dedicação.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#143A2D] mb-6 font-serif">Facilitamos o seu acesso</h2>
            <p className="text-lg text-[#20221F]/80 max-w-3xl mx-auto leading-relaxed">
              Nós facilitamos o acesso a documentos e serviços de órgãos públicos e privados, com rapidez, segurança e facilidade. Possuímos os melhores profissionais, capacitados e experientes, concentrados em um único lugar para resolver qualquer necessidade do agricultor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#EAE8E4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#AB7859]">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#143A2D] mb-3">Segurança</h3>
              <p className="text-[#20221F]/70">Procedimentos realizados com total segurança e transparência.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#EAE8E4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#AB7859]">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#143A2D] mb-3">Agilidade</h3>
              <p className="text-[#20221F]/70">Rapidez na resolução de burocracias e processos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#EAE8E4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#AB7859]">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#143A2D] mb-3">Especialistas</h3>
              <p className="text-[#20221F]/70">Profissionais capacitados e experientes no setor rural.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
