"use client";

import React from "react";
import { BookOpen, Heart, Shield, HelpCircle, FileText, Lock } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#e3e2e0] bg-[#ffffff] text-[#37352f]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e3e2e0] bg-[#f7f6f3] shadow-sm">
                <BookOpen className="h-4 w-4 text-[#37352f]" />
              </div>
              <span className="font-semibold tracking-tight text-base text-[#191919]">
                Simplifica<span className="text-zinc-500 font-normal">Estudos</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed mb-4">
              A plataforma de assinatura de e-books e resumos estruturados para transformar sua rotina acadêmica, concursos e carreira profissional.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-md bg-[#f7f6f3] px-2.5 py-1 text-[11px] text-zinc-600 border border-[#e3e2e0]">
              <Lock className="h-3 w-3 text-emerald-600" />
              <span>Ambiente seguro • Criptografia SSL 256 bits</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <a href="#como-funciona" className="hover:text-zinc-950 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#livros" className="hover:text-zinc-950 transition-colors">
                  Acervo de E-books
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-zinc-950 transition-colors">
                  Planos & Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-zinc-950 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Institutional */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
              Legal & Suporte
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <a href="#" className="hover:text-zinc-950 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-950 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-950 transition-colors">
                  Diretrizes da Comunidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-950 transition-colors">
                  suporte@simplificaestudos.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-[#e3e2e0] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Simplifica Estudos Soluções Digitais Ltda. CNPJ: 45.128.982/0001-44. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1 text-[11px]">
            Desenvolvido com o estilo do Notion, Next.js e Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
