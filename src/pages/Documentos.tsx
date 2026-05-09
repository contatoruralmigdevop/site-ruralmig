import React from 'react';
import { FileText, Building2, Landmark, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Documentos() {
  return (
    <div className="pt-24 md:pt-32 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#143A2D] mb-6 font-serif">
              Documentos para o <span className="text-[#AB7859]">Produtor Rural</span>
            </h1>
            <p className="text-xl text-[#20221F]/70 max-w-3xl mx-auto leading-relaxed">
              Manter a documentação em dia é fundamental para garantir seus direitos, acessar créditos e realizar transações imobiliárias.
            </p>
          </div>

          <div className="bg-[#EAE8E4] rounded-3xl shadow-sm border border-[#20221F]/10 p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#143A2D] mb-8 font-serif text-center">A Importância do ITR</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#143A2D] rounded-full flex items-center justify-center mx-auto mb-4 text-[#EAE8E4]">
                  <Landmark size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#143A2D] mb-3">Bancos</h3>
                <p className="text-[#20221F]/70 text-sm">
                  Incluem o ITR entre os documentos obrigatórios para análise de financiamento e crédito.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#143A2D] rounded-full flex items-center justify-center mx-auto mb-4 text-[#EAE8E4]">
                  <Building2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#143A2D] mb-3">Cartórios</h3>
                <p className="text-[#20221F]/70 text-sm">
                  Exigem o ITR para regularização do imóvel e transferência de propriedade (retificação de área, compra e venda, inventário).
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-[#143A2D] rounded-full flex items-center justify-center mx-auto mb-4 text-[#EAE8E4]">
                  <FileText size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#143A2D] mb-3">INSS</h3>
                <p className="text-[#20221F]/70 text-sm">
                  O ITR é um dos documentos listados como comprovante da atividade rural. Servirá como prova para análise de benefícios.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12 mb-16">
            {/* Cartão de Produtor */}
            <div className="bg-white border border-[#20221F]/10 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-[#EAE8E4] rounded-full flex items-center justify-center text-[#AB7859]">
                  <FileText size={64} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[#143A2D] mb-4 font-serif">Cartão de Produtor</h2>
                <p className="text-[#20221F]/70 mb-4 leading-relaxed">
                  É o cadastro junto a Secretaria da Fazenda Estadual, pelo qual o agricultor documenta sua atividade de produção agrícola e pecuária.
                </p>
                <p className="text-[#20221F]/70 mb-6 leading-relaxed">
                  Este documento comprova e regulariza a produção, tanto para comercialização quanto para o consumo do agricultor.
                </p>
                <div className="bg-[#EAE8E4] p-6 rounded-2xl">
                  <h4 className="font-bold text-[#143A2D] mb-3">Com a inscrição é possível:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-[#20221F]/80">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Emitir notas fiscais</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Requerer GTA</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Comprar vacinas e defensivos</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Pagar taxas</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Acesso a linhas de crédito</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Desconto em veículos novos</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Requerimento no INSS</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ITR */}
            <div className="bg-white border border-[#20221F]/10 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-[#EAE8E4] rounded-full flex items-center justify-center text-[#AB7859]">
                  <Landmark size={64} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[#143A2D] mb-4 font-serif">ITR</h2>
                <p className="text-[#20221F]/70 mb-4 leading-relaxed">
                  ITR é o Imposto sobre a propriedade rural, é um tributo federal de competência da Receita Federal do Brasil.
                </p>
                <p className="text-[#20221F]/70 leading-relaxed">
                  O número de inscrição do ITR identifica o imóvel rural no Cadastro Imobiliário Brasileiro.
                </p>
              </div>
            </div>

            {/* CCIR */}
            <div className="bg-white border border-[#20221F]/10 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-[#EAE8E4] rounded-full flex items-center justify-center text-[#AB7859]">
                  <Building2 size={64} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[#143A2D] mb-4 font-serif">CCIR</h2>
                <p className="text-[#20221F]/70 mb-4 leading-relaxed">
                  O Certificado de Cadastro de Imóvel Rural (CCIR) é um documento emitido pelo INCRA que comprova a regularidade cadastral do imóvel rural.
                </p>
                <p className="text-[#20221F]/70 mb-6 leading-relaxed">
                  O certificado contém informações sobre o titular, a área, a localização, a exploração e a classificação fundiária do imóvel rural.
                </p>
                <div className="bg-[#EAE8E4] p-6 rounded-2xl">
                  <h4 className="font-bold text-[#143A2D] mb-3">Pré-requisito para:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-[#20221F]/80">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Venda e Transferência</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Arrendamento</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Hipoteca</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Desmembramento</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Partilha (Divórcio/Herança)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4EA520]" /> Obtenção de Crédito Agrícola</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#143A2D] rounded-3xl shadow-xl overflow-hidden text-white relative p-10 md:p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#AB7859] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl font-bold mb-6 font-serif text-[#EAE8E4] relative z-10">Nós fazemos para você</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 relative z-10 leading-relaxed">
              Se você precisa requerer algum destes documentos ou benefícios, nós reunimos e fazemos toda a documentação necessária. Todo o procedimento ocorre em nosso escritório, com segurança e rapidez.
            </p>
            <a
              href="https://wa.me/5535910014005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E7AB15] text-[#143A2D] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#D49B13] transition-colors shadow-lg shadow-[#E7AB15]/20 relative z-10"
            >
              Falar com Especialista
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
