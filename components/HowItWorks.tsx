"use client";

import React, { useState } from "react";
import { BookOpen, Compass, ShieldCheck, Check, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  onSubscribeClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onSubscribeClick }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      icon: BookOpen,
      title: "Acesso a um ebook por mês",
      badge: "Todo dia 1º",
      description:
        "No primeiro dia de cada mês, um novo e-book exclusivo é liberado diretamente no seu painel. Sem enrolação: direto ao ponto e otimizado para o aprendizado real.",
      highlights: [
        "Formatos universais: PDF (otimizado para impressão), EPUB (tablet e mobile) e arquivo para Kindle (.mobi).",
        "Resumos esquematizados em templates duplicáveis para o seu Notion pessoal.",
        "Mapas conceituais visuais e flashcards prontos para revisão espaçada (Anki).",
      ],
      detailTitle: "O que vem no pacote mensal?",
      detailTag: "Formato & Entrega",
      cardColor: "bg-[#fdfbf7]",
    },
    {
      step: "02",
      icon: Compass,
      title: "Curadoria especial",
      badge: "Alta Relevância",
      description:
        "Nossa equipe analisa dezenas de títulos globais e best-sellers mundiais de neurociência, produtividade, inteligência artificial e metodologias de estudo.",
      highlights: [
        "Filtro rigoroso: apenas obras com validação prática e aplicabilidade imediata.",
        "Traduções e adaptações exclusivas com contextualização para a realidade brasileira.",
        "Comentários e notas de rodapé de professores e especialistas convidados.",
      ],
      detailTitle: "Como selecionamos?",
      detailTag: "Qualidade Garantida",
      cardColor: "bg-[#f7f9fd]",
    },
    {
      step: "03",
      icon: ShieldCheck,
      title: "Cancelamento a qualquer momento",
      badge: "Liberdade Total",
      description:
        "Acreditamos na qualidade do nosso conteúdo, não em amarras contratuais. Você tem autonomia total para pausar ou cancelar sua assinatura com apenas 1 clique.",
      highlights: [
        "Sem taxas de fidelidade, sem multas e sem burocracia de atendimento.",
        "Todos os e-books já baixados continuam sendo seus para sempre, mesmo após o cancelamento.",
        "Garantia incondicional de 7 dias com reembolso total caso não goste do conteúdo.",
      ],
      detailTitle: "Sem pegadinhas",
      detailTag: "Garantia 100%",
      cardColor: "bg-[#f7fbf8]",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#fafafa] border-y border-[#e3e2e0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-3 text-xs uppercase tracking-wider text-zinc-600 bg-white border border-[#e3e2e0]">
            Processo Transparente
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#191919] sm:text-4xl">
            Como Funciona o Simplifica Estudos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Criamos uma rotina inteligente e descomplicada para você dominar novos conhecimentos sem sobrecarga de informação.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            const isSelected = activeStep === index;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-xl border bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 relative flex flex-col justify-between ${
                  isSelected
                    ? "border-zinc-900 ring-2 ring-zinc-900/10 shadow-md translate-y-[-2px]"
                    : "border-[#e3e2e0] hover:border-zinc-400 hover:shadow"
                }`}
              >
                <div>
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-mono font-bold text-zinc-300">
                      {item.step}
                    </span>
                    <Badge variant="outline" className="text-[11px] font-medium bg-[#f7f6f3] text-zinc-700 border-[#e3e2e0]">
                      {item.badge}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#e3e2e0] bg-[#f7f6f3] text-zinc-900">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#191919] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-5 space-y-2 border-t border-[#f1f1ef] pt-4 text-xs text-zinc-600">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <div className={`text-xs font-semibold flex items-center gap-1 ${isSelected ? "text-zinc-950" : "text-zinc-400"}`}>
                    <span>{isSelected ? "Etapa selecionada" : "Clique para detalhes"}</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Box (Notion Callout) */}
        <div className="mt-10 rounded-xl border border-[#e3e2e0] bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e3e2e0] pb-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white font-mono">
                {steps[activeStep].step}
              </span>
              <div>
                <h4 className="text-base font-bold text-zinc-900">
                  {steps[activeStep].detailTitle} — {steps[activeStep].title}
                </h4>
                <p className="text-xs text-zinc-500">
                  Entenda os bastidores da metodologia Simplifica Estudos
                </p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={onSubscribeClick}
              className="bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold"
            >
              Começar Agora
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-600 leading-relaxed">
            <div className="rounded-lg bg-[#f7f6f3] p-4 border border-[#e3e2e0]">
              <div className="font-semibold text-zinc-900 mb-1 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                Vantagem exclusiva para assinantes:
              </div>
              Você não gasta horas procurando o que estudar. Nossa curadoria poupa em média 18 horas por mês de pesquisas vazias e leitura de materiais obsoletos.
            </div>
            <div className="rounded-lg bg-[#f7f6f3] p-4 border border-[#e3e2e0]">
              <div className="font-semibold text-zinc-900 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Compromisso com sua evolução:
              </div>
              Cada livro é acompanhado de um checklist prático de aplicação em 7 passos para fixação no cotidiano.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
