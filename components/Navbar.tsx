"use client";

import React, { useState } from "react";
import { BookOpen, Menu, X, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenLogin: () => void;
  onSubscribeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin, onSubscribeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e3e2e0] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 text-[#37352f] transition-opacity hover:opacity-85">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e3e2e0] bg-[#f7f6f3] shadow-sm">
            <BookOpen className="h-5 w-5 text-[#37352f]" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-base text-[#191919] flex items-center gap-1.5">
              Simplifica<span className="text-zinc-500 font-normal">Estudos</span>
              <span className="rounded bg-[#f1f1ef] px-1.5 py-0.5 text-[10px] font-medium text-zinc-600 border border-[#e3e2e0]">
                SaaS
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#como-funciona"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            Funcionamento
          </a>
          <a
            href="#livros"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            E-books
          </a>
          <a
            href="#precos"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            Preço
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            FAQ
          </a>
        </nav>

        {/* Actions (Login + CTA) */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenLogin}
            className="text-zinc-700 hover:text-zinc-950 hover:bg-[#f7f6f3]"
          >
            <User className="mr-1.5 h-4 w-4" />
            Login
          </Button>

          <Button
            size="sm"
            onClick={onSubscribeClick}
            className="bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm transition-all hover:translate-y-[-1px]"
          >
            Assine Agora
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-[#f7f6f3] md:hidden focus:outline-none focus:ring-2 focus:ring-zinc-400"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer/Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#e3e2e0] bg-[#ffffff] px-4 py-5 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-zinc-800 hover:bg-[#f7f6f3]"
            >
              Funcionamento
            </a>
            <a
              href="#livros"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-zinc-800 hover:bg-[#f7f6f3]"
            >
              E-books
            </a>
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-zinc-800 hover:bg-[#f7f6f3]"
            >
              Preço
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-zinc-800 hover:bg-[#f7f6f3]"
            >
              FAQ
            </a>
            <div className="pt-3 border-t border-[#e3e2e0] flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full justify-center"
              >
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSubscribeClick();
                }}
                className="w-full justify-center bg-zinc-900 text-white"
              >
                Assine Agora
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
