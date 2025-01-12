"use client";
import Image from 'next/image';

import React from "react";

const Contato = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement); // Tipo correto
    const data: { [key: string]: FormDataEntryValue } = {}; // Tipo correto para os dados
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("E-mail enviado com sucesso!");
        (event.target as HTMLFormElement).reset(); // Aqui fazemos o cast para HTMLFormElement
      } else {
        alert("Erro ao enviar o e-mail. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar o e-mail. Tente novamente.");
    }
  };

  return (
    <section id="contato" className="mt-12 py-20">
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image  src="/hash_icon.svg" alt="contato" width={24} height={24} />
              <h2 className="text-2xl font-semibold text-white hover:text-gray-50">Contato</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Estou interessada em oportunidades de freelance. No entanto, se
              tiver outra solicitação ou pergunta, não hesite em me contactar.
            </p>
          </div>

          <div className="border border-gray-600 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Me contacte aqui</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl cursor-pointer hover:text-purple-400">
                <Image  src="../Discord.svg" alt="contato" width={24} height={24} />

                </div>
                <span className="text-gray-300 text-sm">@amandatavares</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl cursor-pointer hover:text-purple-400">
                <Image  src="../Email.svg" alt="contato" width={24} height={24} />

                </div>
                <span className="text-gray-300 text-sm">tavaresamandasantos@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de contato */}
        <div className="border border-gray-600 p-6 mt-6">
          <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-gray-300 block mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-transparent text-gray-300 border border-gray-500 focus:ring-2 focus:ring-purple-400"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-300 block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-transparent text-gray-300 border border-gray-500 focus:ring-2 focus:ring-purple-400"
                  placeholder="Digite seu email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="title" className="text-gray-300 block mb-1">
                Título
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-4 py-2 bg-transparent text-gray-300 border border-gray-500 focus:ring-2 focus:ring-purple-400"
                placeholder="Digite o título"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-300 block mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 bg-transparent text-gray-300 border border-gray-500 focus:ring-2 focus:ring-purple-400"
                placeholder="Digite sua mensagem"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
