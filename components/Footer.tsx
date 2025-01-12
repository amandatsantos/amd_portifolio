import React from "react";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-650 text-gray-400 py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="flex items-center space-x-4">
          <Image  src="Logo_nome.svg" alt="Amanda Logo" width={24} height={24} />
          <div>
            <p className="font-semibold text-gray-200">Amanda</p>
            <p> analista de dados</p>
          </div>
        </div>

        <div></div>

        <div className="text-right">
          <h3 className="font-semibold text-gray-200 mb-2">Media</h3>
          <div className="flex justify-end space-x-4">
          <Image  src="../Github.svg" alt="contato" width={24} height={24} />

          <Image  src="../Discord.svg" alt="contato" width={24} height={24} />

          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p>&copy; 2024. Made by Amanda</p>
      </div>
    </footer>
  );
}
