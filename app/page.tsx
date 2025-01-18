
import React from "react";
import "../app/globals.css";
import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
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
    <div className="w-50 bg-gray-900 text-white p-14 space-y-6 flex flex-col items-center">
      <div className="w-0.5 h-80 bg-gray-600 mb-1"></div>

      <a
        href="https://github.com/amandatsantos"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl cursor-pointer hover:text-purple-400"
      >
        <FaGithub />
      </a>

      <a
        href="https://discord.com/user/571662557660708885"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl cursor-pointer hover:text-purple-400"
      >
        <FaDiscord />
      </a>

      <a
        href="https://www.linkedin.com/in/amanda-tavares-santos-ats/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl cursor-pointer hover:text-purple-400"
      >
        <FaLinkedin />
      </a>
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

      <div className="w-50 bg-gray-900 text-white p-14">
      </div>
    </div>
  );
}
