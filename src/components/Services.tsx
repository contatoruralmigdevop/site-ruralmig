import React from 'react';
import { motion } from 'motion/react';
import { FileCheck, Landmark, Map, Ruler, Calculator, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <FileCheck size={28} />,
    title: "Regularização de Propriedades",
    description: "Regularize sua terra com segurança jurídica e agilidade nos processos cartorários."
  },
  {
    icon: <Landmark size={28} />,
    title: "INSS Rural",
    description: "Assessoria completa para aposentadoria e benefícios previdenciários do produtor."
  },
  {
    icon: <Briefcase size={28} />,
    title: "Inventários",
    description: "Gestão de processos de sucessão familiar e inventários rurais sem complicações."
  },
  {
    icon: <Map size={28} />,
    title: "Georreferenciamento",
    description: "Medição precisa e certificação de imóveis rurais conforme normas do INCRA."
  },
  {
    icon: <Calculator size={28} />,
    title: "Contabilidade Rural",
    description: "Planejamento tributário, ITR, CCIR e gestão fiscal especializada para o agro."
  },
  {
    icon: <Ruler size={28} />,
    title: "Consultoria Administrativa",
    description: "Organização de documentos e gestão burocrática para sua tranquilidade."
  }
];

export default function Services() {
  return (
    <section id="serviços" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#AB7859] uppercase tracking-widest mb-3">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#20221F] mb-6 font-serif">
            Soluções completas para a <br/> vida administrativa do campo
          </h3>
          <p className="text-[#20221F]/70 text-lg">
            Atuamos em todas as frentes burocráticas para garantir que sua propriedade esteja sempre em dia com a lei.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-[#143A2D] border border-[#143A2D]/30 hover:border-[#E7AB15]/50 hover:shadow-lg hover:shadow-[#E7AB15]/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white shadow-sm mb-6 group-hover:bg-[#E7AB15] group-hover:text-[#143A2D] transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#E7AB15] transition-colors">
                {service.title}
              </h4>
              <p className="text-white/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
