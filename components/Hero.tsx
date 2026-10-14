"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookMarked,
  Clock,
  FileText,
  Star,
  Check,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onOpenPreview: () => void;
  onSubscribeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPreview, onSubscribeClick }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        onSubscribeClick();
      }, 700);
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background subtle Notion grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Top Tag / Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e3e2e0] bg-[#f7f6f3] px-3.5 py-1 text-xs font-medium text-zinc-700 shadow-sm transition-all hover:bg-[#efeee9] mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-zinc-900">Novo E-book do Mês Disponível</span>
            <span className="text-zinc-400">|</span>
            <span className="text-zinc-600">Edição Outubro 2026</span>
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          </div>

          {/* Hero Main Title */}
          <h1 className="text-4xl font-extrabold tracking-tight text-[#191919] sm:text-5xl md:text-6xl leading-[1.12]">
            Simplifique Seus Estudos
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-lg text-zinc-600 sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Acelere seu aprendizado com a curadoria definitiva de livros, resumos no formato Notion e mapas mentais executivos. Receba 1 e-book transformador todo mês.
          </p>

          {/* Email Capture Form (Requirements: Input & Button from shadcn/ui) */}
          <div className="mt-8 mx-auto max-w-md">
            {submitted ? (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/80 p-4 text-emerald-800 flex items-center justify-center gap-2 text-sm font-medium animate-in fade-in zoom-in-95">
                <Check className="h-5 w-5 text-emerald-600" />
                <span>Excelente escolha! Redirecionando para os planos...</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    required
                    placeholder="Digite seu melhor e-mail..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 border-[#e3e2e0] bg-white text-zinc-800 placeholder:text-zinc-400 focus-visible:ring-zinc-900 px-3.5 text-sm shadow-sm"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-11 bg-zinc-900 text-white hover:bg-zinc-800 px-6 font-semibold shadow transition-all hover:translate-y-[-1px]"
                >
                  Assine Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}

            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Cancele quando quiser
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Acesso imediato
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Sem taxas ocultas
              </span>
            </div>
          </div>
        </div>

        {/* Notion Workspace Interactive Mockup */}
        <div className="mt-14 mx-auto max-w-4xl">
          <div className="rounded-xl border border-[#e3e2e0] bg-[#ffffff] shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            {/* Notion Window Top Header Bar */}
            <div className="flex items-center justify-between border-b border-[#e3e2e0] bg-[#fbfbfa] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]/80 border border-[#e0443e]/40" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]/80 border border-[#dea123]/40" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]/80 border border-[#1aab29]/40" />
                <span className="ml-2 text-xs font-mono text-zinc-400">
                  estudos.notion.so / leitor-vip / edicao-atual
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="notionGreen" className="text-[11px] font-normal py-0">
                  Edição Ativa
                </Badge>
              </div>
            </div>

            {/* Notion Page Inside */}
            <div className="p-6 sm:p-8">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4">
                <span>Biblioteca</span>
                <span>/</span>
                <span>Clube do Livro 2026</span>
                <span>/</span>
                <span className="text-zinc-700 font-medium">Outubro</span>
              </div>

              {/* Page Title & Icon */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="text-4xl p-2 rounded-lg bg-[#f7f6f3] border border-[#e3e2e0] flex items-center justify-center">
                    📖
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#191919] tracking-tight">
                      Foco Hiperprodutivo: Como Dominar Habilidades Complexas
                    </h2>
                    <p className="text-sm text-zinc-500 mt-1">
                      Por Prof. Carlos D. M. &bull; Curadoria Especial Simplifica Estudos
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={onOpenPreview}
                  className="self-start border-[#e3e2e0] bg-[#f7f6f3] hover:bg-[#efeee9] text-zinc-800 text-xs font-medium"
                >
                  <BookMarked className="mr-1.5 h-3.5 w-3.5 text-zinc-600" />
                  Abrir Sinopse & Degustação
                </Button>
              </div>

              {/* Notion Properties Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-[#e3e2e0] py-4 bg-[#fbfbfa]/70 rounded-lg px-4">
                <div>
                  <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                    <Zap className="h-3 w-3 text-amber-500" /> Formato
                  </div>
                  <div className="text-xs font-semibold text-zinc-800 mt-1">
                    PDF + EPUB + Kindle
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                    <FileText className="h-3 w-3 text-blue-500" /> Resumo
                  </div>
                  <div className="text-xs font-semibold text-zinc-800 mt-1">
                    Template Notion Incluso
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                    <Clock className="h-3 w-3 text-emerald-500" /> Leitura
                  </div>
                  <div className="text-xs font-semibold text-zinc-800 mt-1">
                    2h 30min estimadas
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                    <Star className="h-3 w-3 text-amber-500 fill-amber-500" /> Avaliação
                  </div>
                  <div className="text-xs font-semibold text-zinc-800 mt-1">
                    4.9 / 5.0 (1.850 notas)
                  </div>
                </div>
              </div>

              {/* Notion Callout Box */}
              <div className="mt-6 rounded-lg border border-[#e3e2e0] bg-[#f7f6f3] p-4 text-xs text-zinc-700 leading-relaxed flex items-start gap-3">
                <span className="text-xl select-none">💡</span>
                <div>
                  <p className="font-semibold text-zinc-900">
                    O que você aprenderá neste e-book:
                  </p>
                  <p className="mt-1 text-zinc-600">
                    A ciência da retenção profunda (Ebbinghaus 2.0), técnicas de ultra-aprendizado sem dispersão digital e um plano de 21 dias para reestruturar seu tempo de estudo diário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center text-xs text-zinc-500">
          <div>
            <span className="font-bold text-zinc-900 text-sm block">+14.200</span>
            Estudantes e concurseiros ativos
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-[#e3e2e0]" />
          <div>
            <span className="font-bold text-zinc-900 text-sm block">4.9 / 5.0</span>
            Nota média na comunidade
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-[#e3e2e0]" />
          <div>
            <span className="font-bold text-zinc-900 text-sm block">36 Livros</span>
            Na biblioteca histórica completa
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-[#e3e2e0]" />
          <div>
            <span className="font-bold text-zinc-900 text-sm block">100% Livre</span>
            Cancele a qualquer instante
          </div>
        </div>
      </div>
    </section>
  );
};
