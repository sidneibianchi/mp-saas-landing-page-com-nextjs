"use client";

import React from "react";
import { ArrowRight, Sparkles, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onSubscribeClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onSubscribeClick }) => {
  return (
    <section className="py-20 md:py-28 bg-[#191919] text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/80 px-3.5 py-1 text-xs font-medium text-zinc-300 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Comece hoje mesmo com 7 dias de garantia incondicional</span>
        </div>

        {/* Required Title */}
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white leading-tight">
          Pronto Para Mudar Sua Vida?
        </h2>

        {/* Required Support Text */}
        <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Chega de acumular PDFs intermináveis que você nunca vai ler. Tenha em mãos sínteses práticas, livros essenciais e o método exato para estudar com alta retenção todos os meses.
        </p>

        {/* Call to action button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onSubscribeClick}
            className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-100 font-bold px-8 h-12 text-base shadow-lg transition-transform hover:scale-[1.02]"
          >
            Assinar Pro Premium VIP — R$ 29/mês
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Highlights guarantee */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            1 e-book novo todo mês
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            Templates no formato Notion
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            Cancele a qualquer momento
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-emerald-400" />
            Garantia de 7 dias ou seu dinheiro de volta
          </span>
        </div>
      </div>
    </section>
  );
};
