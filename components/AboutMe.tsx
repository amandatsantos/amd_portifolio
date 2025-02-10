"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function AboutMeSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="sobre-mim" className="mt-12 py-20 px-6">
      <div className="flex items-center space-x-2 mb-6">
        <Image src="/hash_icon.svg" alt="sobre-mim" width={24} height={24} />
        <h2 className="text-white font-semibold text-lg">Sobre Mim</h2>
      </div>
      
      <div className="text-gray-400 text-sm text-left">
        <p className="mb-4">
          Olá, sou Amanda. Apaixonada por dados e tecnologia, busco constantemente entender como a informação pode ser transformada em insights valiosos.
        </p>
        
        {isExpanded && (
          <div id="conteudo-adicional">
            <p className="mb-4">
              Acredito que a análise de dados vai além dos números e gráficos; ela tem o poder de contar histórias e revelar padrões que, muitas vezes, estão escondidos à vista de todos.
            </p>
            <p className="mb-4">
              Meu trabalho foca na criação de soluções que ajudem a interpretar e otimizar dados de maneira eficiente e acessível. Tenho experiência com diversas ferramentas e linguagens, como Python, R, SQL, além de ferramentas de visualização como Power BI e Tableau.
            </p>
          </div>
        )}
        
        <div className="flex justify-start mt-4">
          <button
            className="mt-6 px-3 py-2 border-2 border-purple-400 text-white hover:bg-purple-400 hover:text-white items-center w-48"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Ler menos" : "Ler mais"}
          </button>
        </div>
      </div>
    </section>
  );
}
