import React from 'react';
import { CheckCircle2, FileText, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Previdencia() {
  const beneficios = [
    "Aposentadoria por Idade",
    "Pensão por morte",
    "Auxílio-acidente",
    "Salário-maternidade",
    "Auxílio por incapacidade (temporária ou permanente)",
    "Auxílio-reclusão"
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 bg-[#EAE8E4] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#143A2D] mb-6 font-serif">
              Benefícios Previdenciários para o <span className="text-[#AB7859]">Agricultor</span>
            </h1>
            <p className="text-xl text-[#20221F]/80 max-w-3xl mx-auto leading-relaxed">
              A Previdência Social garante aos trabalhadores rurais diversos benefícios e serviços, independente de contribuição.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[#143A2D] mb-6 font-serif">Garantia de Direitos</h2>
                <p className="text-[#20221F]/70 mb-6 leading-relaxed">
                  São garantidos aos trabalhadores e trabalhadoras rurais que comprovarem o exercício de atividade no campo, por períodos estabelecidos para cada um.
                </p>
                <p className="text-[#20221F]/70 leading-relaxed font-medium">
                  Serão exigidos a apresentação de alguns documentos que comprovem a atividade rural, por esta razão é de extrema importância manter seus documentos em dia, renovando anualmente e atualizando informações.
                </p>
              </div>
              <div className="bg-[#143A2D] p-10 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 font-serif text-[#EAE8E4]">Benefícios Disponíveis</h3>
                <ul className="space-y-4">
                  {beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#4EA520] shrink-0" size={20} />
                      <span className="text-white/90">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#20221F]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#EAE8E4] rounded-xl flex items-center justify-center text-[#AB7859]">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#143A2D] font-serif">Documentos Exigidos</h2>
              </div>
              <p className="text-[#20221F]/70 mb-4 leading-relaxed">
                A comprovação do exercício da atividade e da condição do segurado especial será realizada por meio de <strong>autodeclaração</strong>. Juntamente com a autodeclaração e complementando-a deverá apresentar os documentos relacionados no artigo 116 da Instrução Normativa N. 128/2022.
              </p>
              <div className="bg-[#EAE8E4] p-4 rounded-xl border-l-4 border-[#AB7859]">
                <p className="text-[#143A2D] font-medium text-sm">
                  A Legislação Previdenciária não exige declaração ou qualquer outro documento de sindicato.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#20221F]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#EAE8E4] rounded-xl flex items-center justify-center text-[#AB7859]">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#143A2D] font-serif">Cadastro (CNIS)</h2>
              </div>
              <p className="text-[#20221F]/70 mb-4 leading-relaxed">
                É o documento que informa todos os seus vínculos, remunerações e contribuições previdenciárias, encontrados no Cadastro Nacional de Informações Sociais (CNIS).
              </p>
              <p className="text-[#20221F]/70 leading-relaxed font-medium">
                É importante estar inscrito no CNIS e manter as informações cadastrais atualizadas, isso facilita a análise do benefício na ocasião do Requerimento.
              </p>
            </div>
          </div>

          <div className="bg-[#143A2D] rounded-3xl shadow-xl overflow-hidden text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#AB7859] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="p-10 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4 font-serif text-[#EAE8E4]">Nós fazemos para você</h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Se você precisa requerer algum destes benefícios, nós reunimos e fazemos toda a documentação necessária.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5 text-center">
                  <div className="w-12 h-12 bg-[#AB7859] rounded-full flex items-center justify-center mx-auto mb-4 text-[#143A2D]">
                    <Users size={20} />
                  </div>
                  <p className="text-sm text-white/90">Você comparece em nosso escritório, nós o orientamos e reunimos todos os documentos necessários.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5 text-center">
                  <div className="w-12 h-12 bg-[#AB7859] rounded-full flex items-center justify-center mx-auto mb-4 text-[#143A2D]">
                    <Clock size={20} />
                  </div>
                  <p className="text-sm text-white/90">O protocolo é realizado pela internet, sem a necessidade de comparecimento presencial no INSS.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5 text-center">
                  <div className="w-12 h-12 bg-[#AB7859] rounded-full flex items-center justify-center mx-auto mb-4 text-[#143A2D]">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="text-sm text-white/90">Nós acompanhamos todas as fases da análise administrativa, até o resultado final.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5 text-center">
                  <div className="w-12 h-12 bg-[#AB7859] rounded-full flex items-center justify-center mx-auto mb-4 text-[#143A2D]">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm text-white/90">Sua única preocupação será comparecer até a agência bancária para receber.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="https://wa.me/5535910014005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E7AB15] text-[#143A2D] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#D49B13] transition-colors shadow-lg shadow-[#E7AB15]/20"
                >
                  Solicitar Benefício
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
