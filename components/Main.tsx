import React from 'react';
import Image from 'next/image';


const MainComponent = () => {
  return (
    <main className="flex-grow px-6 py-12">
      <section id="home" className="py-20 ml-0">
        <div className="flex items-center justify-start space-x-8">
          <div className="text-left mr-8 flex flex-col">
            <h1 className="text-sm text-gray-400 mb-4">
              análise de dados, buscando processar e interpretar informações de forma eficaz.
            </h1>
            <button className="mt-6 px-3 py-2 border-2 border-purple-600 text-white rounded hover:bg-purple-600 hover:text-white items-center w-48">
              <span>Entre em contato</span>
            </button>
          </div>

          <div className="flex-shrink-0">
            <Image  src="Logo.svg" alt="Imagem ilustrativa"  width={96} height={0} className="h-auto" />
          </div>

          <div className="flex-shrink-0">
            <Image  src="Dots.svg" alt="Imagem ilustrativa"  width={96} height={0} className="h-auto" />
          </div>
        </div>

        <div className="flex justify-center items-center py-20">
          <div className="border-4 border-gray-400 text-center text-white px-8 py-4 max-w-xl relative">
            <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-4xl text-gray-400">“</span>
            <p className="font-bold text-lg">
              With great power comes great electricity bill
            </p>
            <span className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-4xl text-gray-400">”</span>
          </div>
        </div>

        <div className="flex right items-start place-content-evenly ">
          <div className="border-4 border-gray-400 text-right text-white px-8 py-4 max-w-xl relative mt-[-80px]">
            <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-4xl text-gray-400">“</span>
            <p className="italic text-lg">- Dr. Who</p>
            <span className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-4xl text-gray-400">”</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainComponent;
