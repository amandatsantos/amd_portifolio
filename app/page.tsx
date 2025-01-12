
import React from "react";
import "../app/globals.css";
import Image from 'next/image';

// Componentes de Seções
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMeSection from "../components/AboutMe";
import ProjectCard from "../components/Projetos";
import SkillCard from "../components/Skills";
import Contato from "../components/Contato";
import MainComponent from "../components/Main";

// API Handler
// import handler from "../api/sendEmail"; qunado estiuve funcionando

export default function Home() {
  // function handleSubmit(event: FormEvent<HTMLFormElement>): void {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-50 bg-gray-800 text-white p-6 space-y-6 flex flex-col items-center">
        <div className="w-1 h-40 bg-gray-600 mb-6"></div>

        <div className="text-2xl cursor-pointer hover:text-purple-400">
        <Image src="/Github.svg" alt="githubicon" width={24} height={24} />

        </div>

        <div className="text-2xl cursor-pointer hover:text-purple-400">
        <Image  src="../Discord.svg" alt="contato" width={24} height={24} />

        </div>
      </div>

      <div className="flex-grow bg-gray-650 text-gray-400 flex flex-col mx-4"> 
        <Header />
        <MainComponent />

        <ProjectCard />

        <SkillCard />

        <AboutMeSection />

        <Contato />
        
        <Footer />
      </div>

      <div className="w-50 bg-gray-800 text-white p-6">
      </div>
    </div>
  );
}
