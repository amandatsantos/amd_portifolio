import React from "react";
import Image from 'next/image';

// Componente para os Cards de Habilidades
interface SkillCardProps {
  title: string;
  items: string[];
}

const SkillCard = ({ title, items }: SkillCardProps) => {
  return (
    <div className="border-2 border-gray-700 p-4 bg-transparent hover:shadow-lg transition-shadow block w-full max-w-sm h-64">
      <div className="p-2 border-b-2 border-gray-600 flex justify-center items-center h-1/3">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <div className="p-4 h-2/3 overflow-auto">
        <ul className="text-gray-400 text-sm space-y-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Seção de Skills
const SkillsSection = () => {
  return (
    <section id="skills" className="mt-12 py-20 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Image src="/hash_icon.svg" alt="sobre-mim" width={24} height={24} />
          <h2 className="text-2xl font-semibold text-white hover:text-gray-50">Skills</h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 w-full">
        <div className="flex flex-col space-y-6 items-center lg:items-start">
          <Image src="Logo.svg" alt="Logo" width={96} height={0} className="h-auto" />
          <Image src="Dots.svg" alt="Dots" width={96} height={0} className="h-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full">
          <SkillCard title="Linguagens" items={["Python", "R", "SQL", "VBA"]} />
          <SkillCard title="Bancos de Dados" items={["MySQL"]} />
          <SkillCard title="Ferramentas" items={["Power BI", "Excel", "Jupyter Notebook"]} />
          <SkillCard title="Frameworks" items={["TensorFlow", "PyTorch", "Matplotlib"]} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
