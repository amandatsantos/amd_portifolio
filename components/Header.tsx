import React from "react";
import Image from 'next/image';

export default function Header() {
    return (
      <header className=" text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
     <Image  src="Logo_nome.svg"  alt="Amanda" width={24} height={24}/>
  <div className="text-lg font-bold">Amanda</div>
</div>

<nav>
  <ul className="flex space-x-6">
    <li className="flex items-center space-x-2">
      <Image  src="/hash_icon.svg" alt="home" width={24} height={24} />
      <a href="#home" className="hover:text-gray-400">Home</a>
    </li>
    <li className="flex items-center space-x-2">
      <Image  src="/hash_icon.svg" alt="projetos" width={24} height={24}/>
      <a href="#projetos" className="hover:text-gray-50">Projetos</a>
    </li>
    <li className="flex items-center space-x-2">
      <Image  src="/hash_icon.svg" alt="skills" width={24} height={24} />
      <a href="#skills" className="hover:text-gray-400">Skills</a>
    </li>
    <li className="flex items-center space-x-2">
      <Image  src="/hash_icon.svg" alt="sobre mim" width={24} height={24} />
      <a href="#sobre-mim" className="hover:text-gray-400">Sobre Mim</a>
    </li>
    <li className="flex items-center space-x-2">
      <Image  src="/hash_icon.svg" alt="contato" width={24} height={24} />
      <a href="#contato" className="hover:text-gray-400">Contato</a>
    </li>
  </ul>
</nav>
      </header>
    );
  }
  

