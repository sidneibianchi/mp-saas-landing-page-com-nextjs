"use client";

import React, { useState } from "react";
import { X, BookOpen, Check, Download, Layers, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EbookPreviewModalProps {
  book: any | null;
  isOpen: boolean;
  onClose: () => void;
  onSubscribeClick: () => void;
}

export const EbookPreviewModal: React.FC<EbookPreviewModalProps> = ({
  book,
  isOpen,
  onClose,
  onSubscribeClick,
}) => {
  const [activeTab, setActiveTab] = useState<"sinopse" | "sumario" | "notion">("sinopse");

  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl border border-[#e3e2e0] bg-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e3e2e0] bg-[#fbfbfa] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{book.emoji || "📖"}</span>
            <div>
              <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                {book.month}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 truncate max-w-md">
                {book.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-zinc-400 hover:text-zinc-700 hover:bg-[#f1f1ef]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-[#e3e2e0] bg-white px-6 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab("sinopse")}
            className={`py-3 px-3 border-b-2 transition-colors ${
              activeTab === "sinopse"
                ? "border-zinc-950 text-zinc-950 font-bold"
                : "border-transparent text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Sinopse Completa
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("sumario")}
            className={`py-3 px-3 border-b-2 transition-colors ${
              activeTab === "sumario"
                ? "border-zinc-950 text-zinc-950 font-bold"
                : "border-transparent text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Sumário & Capítulos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("notion")}
            className={`py-3 px-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === "notion"
                ? "border-zinc-950 text-zinc-950 font-bold"
                : "border-transparent text-zinc-500 hover:text-zinc-800"
            }`}
          >
            <span>Template Notion</span>
            <Badge variant="notionGreen" className="text-[9px] py-0 px-1">
              Incluso
            </Badge>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 text-xs sm:text-sm text-zinc-600 leading-relaxed space-y-4">
          {activeTab === "sinopse" && (
            <div className="space-y-4">
              <div className="rounded-lg bg-[#f7f6f3] p-4 border border-[#e3e2e0]">
                <h4 className="font-bold text-zinc-900 mb-2 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  Visão Geral da Obra
                </h4>
                <p className="text-zinc-700">{book.summary}</p>
              </div>

              <div>
                <h5 className="font-semibold text-zinc-900 mb-2">Para quem é este e-book?</h5>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    Estudantes universitários que precisam ler e resumir pilhas de livros sem se perder.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    Concurseiros que necessitam de retenção de longo prazo e revisão espaçada.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    Profissionais em transição que buscam absorver novos nichos rapidamente.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-[#f1f1ef] pt-4 text-center">
                <div className="p-2.5 rounded bg-[#fbfbfa] border border-[#e3e2e0]">
                  <span className="text-[11px] text-zinc-400 block">Páginas</span>
                  <strong className="text-zinc-800">{book.pages || "180 págs"}</strong>
                </div>
                <div className="p-2.5 rounded bg-[#fbfbfa] border border-[#e3e2e0]">
                  <span className="text-[11px] text-zinc-400 block">Tempo Médio</span>
                  <strong className="text-zinc-800">{book.readTime || "2h 30m"}</strong>
                </div>
                <div className="p-2.5 rounded bg-[#fbfbfa] border border-[#e3e2e0]">
                  <span className="text-[11px] text-zinc-400 block">Nota Média</span>
                  <strong className="text-zinc-800">⭐️ {book.rating || "4.9"}</strong>
                </div>
              </div>
            </div>
          )}

          {activeTab === "sumario" && (
            <div className="space-y-3">
              <p className="text-xs text-zinc-500 mb-3">
                Estrutura esquematizada para leitura dinâmica e rápida aplicação:
              </p>
              {book.chapters?.map((chap: string, idx: number) => (
                <div
                  key={idx}
                  className="rounded-lg border border-[#e3e2e0] bg-[#fbfbfa] p-3 text-xs flex items-center justify-between"
                >
                  <span className="font-medium text-zinc-800">{chap}</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Disponível no Pro</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "notion" && (
            <div className="space-y-4">
              <div className="rounded-lg border border-[#e3e2e0] bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 mb-2">
                  <span className="text-lg">📋</span>
                  Estrutura do Dashboard no Notion
                </div>
                <p className="text-xs text-zinc-600 mb-3">
                  Ao assinar o <strong>Pro Premium VIP</strong>, você recebe um botão de duplicação em 1 clique que copia todo o banco de dados de notas, flashcards no Anki e mapa mental direto para a sua conta do Notion.
                </p>
                <div className="rounded bg-[#f7f6f3] p-3 font-mono text-[11px] text-zinc-700 border border-[#e3e2e0] space-y-1">
                  <div>📂 Biblioteca Pessoal / {book.title}</div>
                  <div>├── 🏷️ Propriedades: Status, Avaliação, Tags, Data</div>
                  <div>├── 📑 Resumo Executivo em 5 minutos</div>
                  <div>├── 💡 Insights-Chave & Citações Marcadas</div>
                  <div>└── 🎯 Plano de Ação em 7 Dias (Checklist Interativo)</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[#e3e2e0] bg-[#fbfbfa] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-500">
            Disponível com <strong>Acesso Ilimitado</strong> no plano Pro VIP (R$ 29/mês).
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
              Fechar
            </Button>
            <Button
              size="sm"
              onClick={() => {
                onClose();
                onSubscribeClick();
              }}
              className="bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold"
            >
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Liberar E-book Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
