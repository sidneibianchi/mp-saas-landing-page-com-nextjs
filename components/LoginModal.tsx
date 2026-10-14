"use client";

import React, { useState } from "react";
import { X, Lock, Mail, ArrowRight, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedInUser(email || "estudante@exemplo.com");
    setTimeout(() => {
      // Auto close after showing success
      setTimeout(() => {
        setLoggedInUser(null);
        onClose();
      }, 1500);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-md rounded-xl border border-[#e3e2e0] bg-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e3e2e0] bg-[#fbfbfa] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔐</span>
            <h3 className="text-base font-bold text-zinc-900">
              {isRegister ? "Criar Conta na Simplifica" : "Acessar Área do Assinante"}
            </h3>
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
          {loggedInUser ? (
            <div className="py-8 text-center animate-in zoom-in-95">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900">Login Realizado!</h4>
              <p className="mt-1 text-xs text-zinc-600">
                Bem-vindo(a) de volta, <strong>{loggedInUser}</strong>.
              </p>
              <p className="mt-4 text-xs text-zinc-400">Carregando seus e-books do mês...</p>
            </div>
          ) : (
            <>
              {/* Social Login Options */}
              <div className="space-y-2 mb-5">
                <button
                  type="button"
                  onClick={() => {
                    setEmail("estudante.google@exemplo.com");
                    setLoggedInUser("estudante.google@exemplo.com");
                    setTimeout(onClose, 1200);
                  }}
                  className="flex w-full items-center justify-center gap-2.5 rounded-md border border-[#e3e2e0] bg-white py-2 text-xs font-semibold text-zinc-800 shadow-sm hover:bg-[#f7f6f3] transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  Continuar com Google
                </button>
              </div>

              <div className="relative mb-5 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e3e2e0]" />
                </div>
                <span className="relative bg-white px-2 text-[11px] uppercase tracking-wider text-zinc-400">
                  Ou com seu e-mail
                </span>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    E-mail cadastrado
                  </label>
                  <div className="relative">
                    <Input
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-[#e3e2e0] text-xs h-9"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Senha
                  </label>
                  <Input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-[#e3e2e0] text-xs h-9"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-500">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-zinc-300" />
                    Lembrar de mim
                  </label>
                  <a href="#" className="hover:text-zinc-900 underline">
                    Esqueceu a senha?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold h-10 mt-2"
                >
                  {isRegister ? "Criar Minha Conta" : "Entrar na Plataforma"}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </form>

              {/* Toggle Register / Login */}
              <div className="mt-5 text-center text-xs text-zinc-500 border-t border-[#e3e2e0] pt-4">
                {isRegister ? (
                  <span>
                    Já é assinante?{" "}
                    <button
                      type="button"
                      onClick={() => setIsRegister(false)}
                      className="font-semibold text-zinc-950 underline hover:text-zinc-700"
                    >
                      Faça Login
                    </button>
                  </span>
                ) : (
                  <span>
                    Ainda não tem assinatura?{" "}
                    <button
                      type="button"
                      onClick={() => setIsRegister(true)}
                      className="font-semibold text-zinc-950 underline hover:text-zinc-700"
                    >
                      Cadastre-se aqui
                    </button>
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
