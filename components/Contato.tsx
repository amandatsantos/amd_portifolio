"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaEnvelope, FaDiscord, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";

interface ContatoItemProps {
  href: string;
  text: string;
  Icon: IconType;
  label: string;
}

const ContatoItem: React.FC<ContatoItemProps> = ({ href, text, Icon }) => (
  <div className="flex items-center space-x-4">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl cursor-pointer hover:text-purple-400"
    >
      <Icon />
    </a>
    <span className="text-gray-300 text-sm">{text}</span>
  </div>
);

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", title: "", message: "" });
    } else {
      setStatus("Erro ao enviar a mensagem.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contato" className="mt-12 py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Image src="/hash_icon.svg" alt="contato" width={24} height={24} />
            <h2 className="text-white font-semibold text-lg">Contato</h2>
          </div>
          <p className="text-sm text-gray-400 mb-8">
            Estou interessada em oportunidades de freelance. No entanto,
            se tiver outra solicitação ou pergunta, não hesite em me
            contactar.
          </p>
          <div className="space-y-4">
            <ContatoItem
              href="https://discord.com/user/571662557660708885"
              text="@amandatavares"
              Icon={FaDiscord}
              label="Discord"
            />
            <ContatoItem
              href="mailto:tavaresamandasantos@gmail.com"
              text="tavaresamandasantos@gmail.com"
              Icon={FaEnvelope}
              label="E-mail"
            />
            <ContatoItem
              href="https://www.linkedin.com/in/amanda-tavares-santos-ats/"
              text="Amanda Tavares Santos"
              Icon={FaLinkedin}
              label="LinkedIn"
            />
          </div>
        </div>
     

          <div className="border border-gray-600 p-6">
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.title}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent text-gray-300 border border-gray-500 focus:ring-2 focus:ring-purple-400"
                  placeholder="Digite sua mensagem"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 border border-purple-600 text-white hover:bg-purple-600 hover:text-white transition"
              >
                Enviar
              </button>
            </form>
            {status && <p className="mt-4 text-gray-300">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
