import React from 'react';
import { CheckCircle2, FileText, Map, Briefcase, Leaf } from 'lucide-react';

export default function Servicos() {
  const servicosDocumentais = [
    "CPF regularização e situação cadastral",
    "Certidões de Nascimento, Casamento, Óbito, Escritura Pública de União Estável",
    "Certidão de Antecedentes Criminais",
    "Testamento, pesquisa e busca",
    "Contratos: Arrendamento, Comodato e Parceria Agrícola; Compra e Venda",
    "Emissão de Nota Fiscal, produtor rural",
    "Cartão de Produtor Rural - Inscrição Estadual",
    "GTA - Guia de Trânsito Animal"
  ];

  const servicosPrevidenciarios = [
    "INSS, Inscrição e atualização de informações",
    "Emissão de Guia de Contribuição INSS",
    "Requerimento de Benefícios Previdenciários"
  ];

  const servicosImobiliarios = [
    "ITR - Imposto Territorial Rural",
    "CCIR-INCRA - inscrição e emissão anual",
    "Certidão de Registro de Imóveis",
    "Regularização de Imóvel Rural",
    "Retificação de Área",
    "Desmembramento e Remembramento",
    "Transferência de Propriedade",
    "Inventário Administrativo e Judicial"
  ];

  const servicosAmbientais = [
    "CAR - Cadastro Ambiental Rural",
    "Defesas de Multas Ambientais",
    "Licenciamento Ambiental",
    "Autorização de Supressão Vegetal - Corte",
    "Outorga de Água",
    "Cadastro de Uso Insignificante de Recursos Hídricos",
    "Projeto de Reflorestamento e Preservação Ambiental",
    "PRAS - Projeto Técnico de Recuperação de Áreas Degradadas",
    "PTRF - Projeto Técnico de Reconstituição de Flora",
    "Inventário Florestal"
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#143A2D] mb-6 font-serif">
              Nossos <span className="text-[#AB7859]">Serviços</span>
            </h1>
            <p className="text-xl text-[#20221F]/70 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços para o trabalhador rural, garantindo que toda a sua documentação e regularização estejam em dia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Documentação e Contratos */}
            <div className="bg-[#EAE8E4] p-8 rounded-3xl shadow-sm border border-[#20221F]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#143A2D] rounded-xl flex items-center justify-center text-white">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#143A2D] font-serif">Documentação e Contratos</h2>
              </div>
              <ul className="space-y-3">
                {servicosDocumentais.map((servico, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#20221F]/80">
                    <CheckCircle2 className="text-[#4EA520] shrink-0 mt-0.5" size={20} />
                    <span>{servico}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Imóveis Rurais */}
            <div className="bg-[#EAE8E4] p-8 rounded-3xl shadow-sm border border-[#20221F]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#143A2D] rounded-xl flex items-center justify-center text-white">
                  <Map size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#143A2D] font-serif">Imóveis Rurais</h2>
              </div>
              <ul className="space-y-3">
                {servicosImobiliarios.map((servico, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#20221F]/80">
                    <CheckCircle2 className="text-[#4EA520] shrink-0 mt-0.5" size={20} />
                    <span>{servico}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços Ambientais */}
            <div className="bg-[#EAE8E4] p-8 rounded-3xl shadow-sm border border-[#20221F]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#143A2D] rounded-xl flex items-center justify-center text-white">
                  <Leaf size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#143A2D] font-serif">Serviços Ambientais</h2>
              </div>
              <ul className="space-y-3">
                {servicosAmbientais.map((servico, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#20221F]/80">
                    <CheckCircle2 className="text-[#4EA520] shrink-0 mt-0.5" size={20} />
                    <span>{servico}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Previdenciário */}
            <div className="bg-[#EAE8E4] p-8 rounded-3xl shadow-sm border border-[#20221F]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#143A2D] rounded-xl flex items-center justify-center text-white">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#143A2D] font-serif">Previdenciário (INSS)</h2>
              </div>
              <ul className="space-y-3">
                {servicosPrevidenciarios.map((servico, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#20221F]/80">
                    <CheckCircle2 className="text-[#4EA520] shrink-0 mt-0.5" size={20} />
                    <span>{servico}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
