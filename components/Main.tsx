import React from 'react';

const MainComponent = () => {
  return (
    <main className="flex-grow px-6 py-12">
      <section id="home" className="py-20 ml-0">
        <div className="flex flex-col md:flex-row items-center justify-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-left mr-8 flex flex-col">
            <h1 className="text-sm text-gray-400 mb-4">
              Análise de dados, buscando processar e interpretar informações de forma eficaz.
            </h1>
            <button className="mt-6 px-3 py-2 border-2 border-purple-400 text-white hover:bg-purple-400 hover:text-white items-center w-48">
              <a 
                href="https://wa.me/+5577991528012?text=Olá,%20gostaria%20de%20saber%20mais!" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Entre em contato</span>
              </a>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center py-20">
          <div className="border-2 border-gray-400 text-center text-white px-8 py-4 max-w-xl relative">
            <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-4xl text-gray-400"></span>
            
            <p className="font-bold text-lg">
              &apos;With great power comes great electricity bill&apos;
            </p>
            
            <p className="italic text-lg mt-4">- Dr. Who</p>
            
            <span className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-4xl text-gray-400"></span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainComponent;
