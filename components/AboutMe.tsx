"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function AboutMeSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="sobre-mim" className="mt-12 py-20">
      <div className="flex items-center space-x-2 mb-6">
        <Image src="/hash_icon.svg" alt="sobre-mim" width={24} height={24} />
        <h2 className="text-2xl font-semibold text-white hover:text-gray-50">Sobre Mim</h2>
      </div>

      <div className="ml-16 pr-6">
        <p className="text-lg text-gray-300 leading-relaxed text-justify">
          Olá, sou Amanda. Apaixonada por dados e tecnologia, busco constantemente entender como a informação pode ser transformada em insights valiosos.
        </p>

        {isExpanded && (
          <div id="conteudo-adicional">
            <p className="text-lg text-gray-300 mt-4 leading-relaxed text-justify">
              Acredito que a análise de dados vai além dos números e gráficos; ela tem o poder de contar histórias e revelar padrões que, muitas vezes, estão escondidos à vista de todos.
            </p>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed text-justify">
              Meu trabalho foca na criação de soluções que ajudem a interpretar e otimizar dados de maneira eficiente e acessível. Tenho experiência com diversas ferramentas e linguagens, como Python, R, SQL, além de ferramentas de visualização como Power BI e Tableau.
            </p>
          </div>
        )}

        <button
          className="mt-4 px-4 py-2 border border-purple-600 text-purple-600 text-sm font-medium hover:bg-purple-600 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </section>
  );
}
