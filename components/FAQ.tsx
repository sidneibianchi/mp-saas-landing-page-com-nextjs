"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Como funciona a entrega do e-book todo mês?",
    answer:
      "Todo dia 1º de cada mês, a nova edição é disponibilizada automaticamente na sua área de membros. Você pode fazer o download direto nos formatos PDF (diagramado e pronto para impressão ou anotação no tablet), EPUB e arquivo compatível com Kindle. Além disso, você recebe o link direto para duplicar o resumo estruturado e os mapas mentais para o seu Notion pessoal.",
  },
  {
    question: "O que é a curadoria especial mencionada?",
    answer:
      "Nossa equipe é formada por pesquisadores, professores universitários e profissionais de alta performance. Nós lemos e filtramos dezenas de lançamentos mundiais para trazer apenas livros com aplicações práticas reais para estudos, carreira e desenvolvimento mental — sem teorias vazias ou livros inflados.",
  },
  {
    question: "Como funciona o cancelamento a qualquer momento?",
    answer:
      "Sem amarras ou pegadinhas. Você pode cancelar sua assinatura com apenas um clique diretamente no painel da sua conta, a qualquer instante. Não exigimos tempo mínimo de fidelidade e não cobramos nenhuma taxa rescisória. E o melhor: todos os e-books e materiais que você já baixou continuam sendo seus para sempre.",
  },
  {
    question: "O que está incluso no plano Pro Premium VIP de R$ 29/mês?",
    answer:
      "O plano Pro VIP dá acesso irrestrito ao e-book inédito do mês, a toda a biblioteca histórica de edições anteriores, templates exclusivos do Notion, mapas conceituais esquematizados, resumos em áudio narrados (Podcast VIP) e participação na comunidade fechada de alunos.",
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer:
      "Oferecemos uma garantia incondicional de 7 dias. Se você assinar e achar que o material não atendeu suas expectativas, basta enviar um e-mail ou solicitar o reembolso no painel e devolveremos 100% do seu investimento, sem questionamentos.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#ffffff]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 text-xs bg-[#f7f6f3] text-zinc-700 border-[#e3e2e0]">
            Tire Suas Dúvidas
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#191919] sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            Tudo o que você precisa saber sobre a assinatura e funcionamento da plataforma.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg border border-[#e3e2e0] bg-white transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-[#191919] hover:text-zinc-950 focus:outline-none"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-zinc-900" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[#f1f1ef] px-4 sm:px-5 py-4 text-xs sm:text-sm text-zinc-600 leading-relaxed bg-[#fbfbfa] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
