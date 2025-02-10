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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-gray-900 text-white p-8 space-y-6 flex flex-col items-center">
        <div className="w-0.5 h-80 bg-gray-600 mb-6 md:mb-4"></div>

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

      {/* Main Content */}
      <div className="flex-grow bg-gray-650 text-gray-400 flex flex-col mx-4 p-4">
        <Header />
        <MainComponent />
        <ProjectCard />
        <SkillCard />
        <AboutMeSection />
        <Contato />
        <Footer />
      </div>

      <div className="w-full md:w-1/5 bg-gray-900 text-white p-8"></div>
    </div>
  );
}
