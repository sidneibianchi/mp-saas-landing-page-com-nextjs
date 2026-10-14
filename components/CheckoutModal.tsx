"use client";

import React, { useState } from "react";
import { X, Check, Shield, Lock, Sparkles, CreditCard, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  planName,
  price,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "cartao">("pix");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg rounded-xl border border-[#e3e2e0] bg-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#e3e2e0] bg-[#fbfbfa] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">💳</span>
            <h3 className="text-base font-bold text-zinc-900">Finalizar Assinatura</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-zinc-400 hover:text-zinc-700 hover:bg-[#f1f1ef]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {success ? (
            <div className="py-8 text-center animate-in zoom-in-95">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900">Assinatura Ativada com Sucesso!</h4>
              <p className="mt-2 text-xs text-zinc-600 max-w-sm mx-auto">
                Enviamos os dados de acesso e as instruções para baixar o e-book deste mês para <strong>{email || "seu e-mail"}</strong>.
              </p>
              <div className="mt-6 rounded-lg bg-[#f7f6f3] p-4 text-xs text-zinc-700 border border-[#e3e2e0] text-left">
                <div className="font-semibold text-zinc-900 mb-1 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  Próximos passos imediatos:
                </div>
                <ul className="space-y-1 text-zinc-600">
                  <li>1. Acesse o painel pelo botão de Login no topo da página.</li>
                  <li>2. Baixe o PDF/EPUB do e-book ou duplique para seu Notion.</li>
                  <li>3. Aproveite a leitura e transforme seus estudos!</li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              {/* Order summary box */}
              <div className="rounded-lg border border-[#e3e2e0] bg-[#fbfbfa] p-4 mb-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                    Plano Escolhido
                  </span>
                  <strong className="text-sm text-zinc-900 font-bold">{planName}</strong>
                  <span className="text-xs text-zinc-500 block">
                    Curadoria mensal + Biblioteca Ilimitada + Notion
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-[#191919]">{price}</span>
                  <span className="text-[10px] text-emerald-600 font-medium block">
                    7 dias de garantia
                  </span>
                </div>
              </div>

              {/* Payment selector */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`flex items-center justify-center gap-2 rounded-md border p-2.5 text-xs font-semibold transition-all ${
                    paymentMethod === "pix"
                      ? "border-zinc-900 bg-zinc-900 text-white shadow"
                      : "border-[#e3e2e0] bg-white text-zinc-700 hover:bg-[#f7f6f3]"
                  }`}
                >
                  <QrCode className="h-4 w-4" />
                  PIX (Imediato)
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cartao")}
                  className={`flex items-center justify-center gap-2 rounded-md border p-2.5 text-xs font-semibold transition-all ${
                    paymentMethod === "cartao"
                      ? "border-zinc-900 bg-zinc-900 text-white shadow"
                      : "border-[#e3e2e0] bg-white text-zinc-700 hover:bg-[#f7f6f3]"
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  Cartão de Crédito
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handlePay} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    E-mail para receber os e-books
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-[#e3e2e0] text-xs h-9"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    CPF (para emissão da Nota Fiscal)
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="border-[#e3e2e0] text-xs h-9"
                  />
                </div>

                {paymentMethod === "cartao" && (
                  <div className="space-y-3 pt-1">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1">
                        Número do Cartão
                      </label>
                      <Input
                        type="text"
                        required
                        placeholder="•••• •••• •••• ••••"
                        className="border-[#e3e2e0] text-xs h-9"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1">
                          Validade
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="MM/AA"
                          className="border-[#e3e2e0] text-xs h-9"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 mb-1">
                          CVV
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="123"
                          className="border-[#e3e2e0] text-xs h-9"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold h-10 mt-3"
                >
                  <Lock className="mr-1.5 h-3.5 w-3.5" />
                  Confirmar e Liberar Acesso ({price})
                </Button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-zinc-500">
                <Shield className="h-3.5 w-3.5 text-emerald-600" />
                <span>Cobrança segura com garantia incondicional de 7 dias.</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
