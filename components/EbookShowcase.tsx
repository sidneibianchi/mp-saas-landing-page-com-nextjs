"use client";

import React, { useState } from "react";
import { BookOpen, Star, Sparkles, Download, Layers, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EbookShowcaseProps {
  onOpenPreview: (book?: any) => void;
  onSubscribeClick: () => void;
}

export const booksData = [
  {
    id: 1,
    title: "Foco Hiperprodutivo: A Arte do Aprendizado Acelerado",
    month: "Edição Atual • Outubro 2026",
    category: "Produtividade & Foco",
    pages: "184 págs",
    readTime: "2h 30min",
    rating: 4.9,
    emoji: "⚡️",
    badgeVariant: "notionGreen" as const,
    summary:
      "Descubra como estruturar blocos de foco inabalável, eliminar a procrastinação crônica e absorver conteúdo 3x mais rápido utilizando a técnica dos 4 Quadrantes Cognitivos.",
    chapters: [
      "Capítulo 1: A ilusão da multitarefa e o custo de transição mental",
      "Capítulo 2: Montando sua bolha hermética de estudos",
      "Capítulo 3: Repetição espaçada com algoritmos práticos",
      "Capítulo 4: O diário de bordo metacognitivo no Notion",
    ],
  },
  {
    id: 2,
    title: "Mente Metódica: Como Construir um Segundo Cérebro de Estudos",
    month: "Setembro 2026",
    category: "Metodologia & Notion",
    pages: "210 págs",
    readTime: "3h 10min",
    rating: 4.95,
    emoji: "🧠",
    badgeVariant: "notionBlue" as const,
    summary:
      "O guia passo a passo para conectar notas, criar bibliotecas digitais auto-organizáveis e nunca mais perder uma anotação de aula, artigo ou livro lido.",
    chapters: [
      "Capítulo 1: O método CODE (Capturar, Organizar, Destilar, Expressar)",
      "Capítulo 2: Montando sua estrutura P.A.R.A no Notion",
      "Capítulo 3: Notas atômicas e sínteses visuais",
      "Capítulo 4: Automatizando revisões semanais",
    ],
  },
  {
    id: 3,
    title: "Alta Performance Cognitiva: Neurociência do Sono e Memória",
    month: "Agosto 2026",
    category: "Neurociência",
    pages: "168 págs",
    readTime: "2h 15min",
    rating: 4.88,
    emoji: "🌙",
    badgeVariant: "notionPurple" as const,
    summary:
      "Como seu cérebro consolida sinapses durante o sono e como otimizar seus ciclos biológicos para reter até 80% mais dados em provas e projetos.",
    chapters: [
      "Capítulo 1: As fases do sono e a poda sináptica",
      "Capítulo 2: Nutrição, hidratação e suplementação cognitiva",
      "Capítulo 3: Exercícios físicos como indutores de BDNF",
      "Capítulo 4: Protocolos pré-dormir para estudantes",
    ],
  },
  {
    id: 4,
    title: "Oratória & Argumentação Lógica para Universitários e Concursos",
    month: "Julho 2026",
    category: "Comunicação",
    pages: "192 págs",
    readTime: "2h 45min",
    rating: 4.92,
    emoji: "🎙️",
    badgeVariant: "notionYellow" as const,
    summary:
      "Técnicas de retórica clássica combinadas com clareza moderna para defender teses, realizar apresentações memoráveis e gabaritar provas discursivas.",
    chapters: [
      "Capítulo 1: Estruturando argumentos irrefutáveis (Ethos, Pathos, Logos)",
      "Capítulo 2: Superando a ansiedade de falar em público",
      "Capítulo 3: Respostas assertivas sob pressão",
      "Capítulo 4: O checklist do orador convincente",
    ],
  },
];

export const EbookShowcase: React.FC<EbookShowcaseProps> = ({
  onOpenPreview,
  onSubscribeClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Produtividade & Foco", "Metodologia & Notion", "Neurociência", "Comunicação"];

  const filteredBooks =
    selectedCategory === "Todos"
      ? booksData
      : booksData.filter((b) => b.category === selectedCategory);

  return (
    <section id="livros" className="py-20 md:py-28 bg-[#fafafa] border-b border-[#e3e2e0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Badge variant="outline" className="mb-3 text-xs bg-white text-zinc-700 border-[#e3e2e0]">
              Acervo Curado
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#191919] sm:text-4xl">
              Últimas Edições Publicadas
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-xl">
              Assinantes do plano <strong>Pro Premium VIP</strong> têm acesso irrestrito ao acervo completo com todos os e-books e resumos no Notion já lançados.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-lg border border-[#e3e2e0]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedCategory === cat
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-[#f7f6f3]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="rounded-xl border border-[#e3e2e0] bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 rounded-lg bg-[#f7f6f3] border border-[#e3e2e0]">
                      {book.emoji}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 block">
                        {book.month}
                      </span>
                      <Badge variant={book.badgeVariant} className="text-[10px] mt-0.5">
                        {book.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-zinc-800 bg-[#f7f6f3] px-2 py-1 rounded border border-[#e3e2e0]">
                    <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    <span>{book.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#191919] mb-2 leading-snug">
                  {book.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  {book.summary}
                </p>

                <div className="flex items-center gap-4 text-[11px] text-zinc-500 border-t border-[#f1f1ef] pt-3 mb-4">
                  <span>📄 {book.pages}</span>
                  <span>⏱️ {book.readTime}</span>
                  <span>📦 PDF, EPUB, Notion</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#f1f1ef]">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onOpenPreview(book)}
                  className="flex-1 border-[#e3e2e0] bg-[#f7f6f3] hover:bg-[#efeee9] text-xs font-medium"
                >
                  <BookOpen className="mr-1.5 h-3.5 w-3.5 text-zinc-600" />
                  Ver Sinopse & Sumário
                </Button>
                <Button
                  size="sm"
                  onClick={onSubscribeClick}
                  className="bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-medium"
                >
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  Baixar no Pro VIP
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
