"use client";

import React, { useState } from "react";
import { Check, Sparkles, Star, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="precos" className="py-20 md:py-28 bg-[#ffffff] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="notionYellow"
            className="mb-3 text-xs uppercase tracking-wider font-semibold"
          >
            Investimento no Seu Futuro
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#191919] sm:text-4xl">
            Planos Transparentes e Acessíveis
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Menos de R$ 1,00 por dia para ter acesso aos conhecimentos mais valiosos do mundo sintetizados para você.
          </p>

          {/* Billing Toggle (Monthly / Annual) */}
          <div className="mt-8 inline-flex items-center rounded-lg border border-[#e3e2e0] bg-[#f7f6f3] p-1 text-xs">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-md px-4 py-1.5 font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              Cobrança Mensal
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`rounded-md px-4 py-1.5 font-medium transition-all flex items-center gap-1.5 ${
                billingCycle === "yearly"
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <span>Cobrança Anual</span>
              <span className="rounded bg-emerald-100 text-emerald-800 px-1.5 py-0.2 text-[10px] font-bold">
                2 MESES GRÁTIS
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: Degustação / Gratuito */}
          <div className="rounded-xl border border-[#e3e2e0] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-zinc-800">Visitante</h3>
                <Badge variant="outline" className="text-xs text-zinc-500 bg-[#f7f6f3] border-[#e3e2e0]">
                  Degustação
                </Badge>
              </div>
              <p className="text-xs text-zinc-500 min-h-[32px]">
                Ideal para conhecer o formato e receber nossas resenhas semanais.
              </p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold text-[#191919]">R$ 0</span>
                <span className="text-xs text-zinc-500 ml-1">/mês para sempre</span>
              </div>

              <div className="border-t border-[#f1f1ef] pt-5">
                <span className="text-xs font-semibold text-zinc-900 block mb-3 uppercase tracking-wider">
                  O que está incluso:
                </span>
                <ul className="space-y-3 text-xs text-zinc-600">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Amostra do 1º capítulo do e-book do mês</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Newsletter semanal com resumos rápidos</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-400 line-through">
                    <span>E-books completos em PDF, EPUB e Kindle</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-400 line-through">
                    <span>Templates duplicáveis para Notion</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-400 line-through">
                    <span>Biblioteca de edições anteriores</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                className="w-full justify-center border-[#e3e2e0] hover:bg-[#f7f6f3] text-zinc-700 font-medium"
                onClick={() => onSelectPlan("Visitante", "R$ 0")}
              >
                Cadastrar Grátis
              </Button>
            </div>
          </div>

          {/* Plan 2: Pro Premium VIP (HIGHLIGHTED - REQUIRED IN README) */}
          <div className="relative rounded-xl border-2 border-zinc-900 bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between shadow-xl ring-1 ring-zinc-950/5 transform md:-translate-y-2">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3.5 py-1 text-xs font-semibold text-white shadow-md">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>PLANO PRO RECOMENDADO</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <div>
                  <h3 className="text-xl font-bold text-[#191919]">Pro Premium VIP</h3>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    O mais assinado
                  </span>
                </div>
                <Badge variant="notionPurple" className="text-xs">
                  Acesso Completo
                </Badge>
              </div>
              <p className="text-xs text-zinc-600 min-h-[32px]">
                A experiência definitiva: tudo o que você precisa para dominar novos conhecimentos todo mês.
              </p>

              <div className="mt-6 mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#191919]">
                    {billingCycle === "monthly" ? "R$ 29" : "R$ 24"}
                  </span>
                  <span className="text-xs text-zinc-600 font-medium">/mês</span>
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  {billingCycle === "monthly"
                    ? "Cobrado mensalmente • Cancele quando quiser"
                    : "Faturado R$ 290 anualmente (economize R$ 58)"}
                </p>
              </div>

              {/* Required features specifically listed in README */}
              <div className="border-t border-[#f1f1ef] pt-5">
                <span className="text-xs font-bold text-zinc-900 block mb-3 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  Todos os benefícios inclusos:
                </span>
                <ul className="space-y-3 text-xs text-zinc-700 font-medium">
                  <li className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-emerald-700 font-bold" />
                    </div>
                    <span>
                      <strong className="text-zinc-950">1 ebook por mês</strong> em PDF, EPUB e formato nativo Kindle
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-emerald-700 font-bold" />
                    </div>
                    <span>
                      <strong className="text-zinc-950">Curadoria especial</strong> por especialistas e professores
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-emerald-700 font-bold" />
                    </div>
                    <span>
                      <strong className="text-zinc-950">Acesso ilimitado</strong> ao acervo de edições anteriores
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-emerald-700 font-bold" />
                    </div>
                    <span>
                      <strong className="text-zinc-950">Cancelamento a qualquer momento</strong> sem multas ou burocracia
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-emerald-700 font-bold" />
                    </div>
                    <span>Resumos visuais em templates Notion duplicáveis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-emerald-700 font-bold" />
                    </div>
                    <span>Resumos em áudio narrados (Podcast VIP)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-emerald-700 font-bold" />
                    </div>
                    <span>Comunidade fechada de discussão com outros estudantes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="w-full justify-center bg-zinc-900 text-white hover:bg-zinc-800 h-11 text-sm font-semibold shadow-md transition-all hover:translate-y-[-1px]"
                onClick={() =>
                  onSelectPlan(
                    "Pro Premium VIP",
                    billingCycle === "monthly" ? "R$ 29/mês" : "R$ 24/mês (anual)"
                  )
                }
              >
                Assinar Pro Premium VIP
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="mt-2 text-center text-[11px] text-zinc-500 flex items-center justify-center gap-1">
                <Shield className="h-3 w-3 text-emerald-600" /> 7 dias de garantia incondicional
              </div>
            </div>
          </div>

          {/* Plan 3: Equipes & Empresas */}
          <div className="rounded-xl border border-[#e3e2e0] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-zinc-800">Equipes & Grupos</h3>
                <Badge variant="outline" className="text-xs text-zinc-500 bg-[#f7f6f3] border-[#e3e2e0]">
                  Até 5 licenças
                </Badge>
              </div>
              <p className="text-xs text-zinc-500 min-h-[32px]">
                Para grupos de estudo, escritórios e pequenas equipes de alta performance.
              </p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold text-[#191919]">R$ 89</span>
                <span className="text-xs text-zinc-500 ml-1">/mês total</span>
              </div>

              <div className="border-t border-[#f1f1ef] pt-5">
                <span className="text-xs font-semibold text-zinc-900 block mb-3 uppercase tracking-wider">
                  Tudo do Pro VIP mais:
                </span>
                <ul className="space-y-3 text-xs text-zinc-600">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>5 contas individuais completas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Painel centralizado de gestão e faturas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Suporte corporativo prioritário via WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Emissão automática de Nota Fiscal (PJ)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                className="w-full justify-center border-[#e3e2e0] hover:bg-[#f7f6f3] text-zinc-700 font-medium"
                onClick={() => onSelectPlan("Equipes & Grupos", "R$ 89/mês")}
              >
                Assinar para Equipe
              </Button>
            </div>
          </div>
        </div>

        {/* Security & Payment Methods Guarantee */}
        <div className="mt-12 rounded-xl border border-[#e3e2e0] bg-[#fbfbfa] p-6 text-center text-xs text-zinc-600">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-zinc-800">
              <Shield className="h-4 w-4 text-emerald-600" />
              Pagamento 100% Criptografado & Seguro
            </span>
            <span className="text-zinc-300">•</span>
            <span>PIX com liberação instantânea</span>
            <span className="text-zinc-300">•</span>
            <span>Cartões de Crédito em até 12x</span>
            <span className="text-zinc-300">•</span>
            <span>Boleto Bancário</span>
            <span className="text-zinc-300">•</span>
            <span>Garantia de Satisfação ou Dinheiro de Volta</span>
          </div>
        </div>
      </div>
    </section>
  );
};
