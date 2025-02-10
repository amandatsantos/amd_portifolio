import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  link: string;
  tech: string;
  projectTitle: string;
  description: string;
}

const ProjectCard = ({ link, tech, projectTitle, description }: ProjectCardProps) => {
  return (
    <a
      href={link}
      className="border-2 border-gray-600 p-4 bg-transparent hover:shadow-lg transition-shadow block w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
    >
      <div className="flex flex-col mb-4">
        <span className="text-xs text-gray-500">Tecnologias</span>
        <span className="text-xs text-gray-400">{tech}</span>
      </div>

      <div className="border-b border-gray-600 mb-4"></div>

      <div>
        <h3 className="text-white font-semibold text-base mb-2">{projectTitle}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </a>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="mt-12 py-20 px-6 lg:px-20">
      <div className="flex items-center space-x-2 mb-6 -ml-6 lg:-ml-20">
        <Image src="/hash_icon.svg" alt="projetos" width={24} height={24} />
        <h2 className="text-white font-semibold text-lg">Projetos</h2>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div></div>
        <a
          href="https://github.com/amandatsantos"
          className="text-sm text-gray-400 hover:text-gray-300 flex items-center"
        >
          Ver todos <span className="ml-1">➞</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 border-b border-gray-700 pt-4">
        <ProjectCard
          link="/projects/impactos-tecnologicos"
          tech="Python, Pandas"
          projectTitle="Impactos Tecnológicos na América do Sul"
          description="Análise dos impactos da tecnologia no desenvolvimento econômico. Dados Abertos - Banco Mundial"
        />

        <ProjectCard
          link="https://github.com/amandatsantos/An-lise-de-dados-da-fiscaliza-o-e-distribui-o-dos-autos-de-infra-o-na-Bahia"
          tech="Google Script, Google Sheets, Power BI"
          projectTitle="Análise Exploratória da Fiscalização e Distribuição dos Autos de Infração na Bahia"
          description="Análise de dados sobre a fiscalização no estado da Bahia. Dados Abertos - IBAMA"
        />

        <ProjectCard
          link="https://github.com/amandatsantos/An-lise-de-dados-sobre-Movimenta-o-e-Tempos-de-Despachos-Aduaneiros"
          tech="Excel, Power BI"
          projectTitle="Análise sobre o Movimento e Tempos de Despachos Aduaneiros"
          description="Análise de tempos de despacho e movimentação de cargas. Dados Abertos - Ministério da Fazenda"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
