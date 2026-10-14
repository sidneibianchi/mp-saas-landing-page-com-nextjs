"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { EbookShowcase, booksData } from "@/components/EbookShowcase";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { LoginModal } from "@/components/LoginModal";
import { EbookPreviewModal } from "@/components/EbookPreviewModal";
import { CheckoutModal } from "@/components/CheckoutModal";

export default function Home() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any>(booksData[0]);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState({
    name: "Pro Premium VIP",
    price: "R$ 29/mês",
  });

  const handleOpenPreview = (book?: any) => {
    if (book) {
      setSelectedBook(book);
    } else {
      setSelectedBook(booksData[0]);
    }
    setPreviewModalOpen(true);
  };

  const handleSubscribeClick = () => {
    setCheckoutPlan({
      name: "Pro Premium VIP",
      price: "R$ 29/mês",
    });
    setCheckoutModalOpen(true);
  };

  const handleSelectPlan = (planName: string, price: string) => {
    setCheckoutPlan({
      name: planName,
      price: price,
    });
    setCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#37352f]">
      {/* Top Navbar */}
      <Navbar
        onOpenLogin={() => setLoginModalOpen(true)}
        onSubscribeClick={handleSubscribeClick}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenPreview={() => handleOpenPreview(booksData[0])}
          onSubscribeClick={handleSubscribeClick}
        />

        {/* How It Works Section */}
        <HowItWorks onSubscribeClick={handleSubscribeClick} />

        {/* Ebook Library Showcase */}
        <EbookShowcase
          onOpenPreview={handleOpenPreview}
          onSubscribeClick={handleSubscribeClick}
        />

        {/* Pricing Section */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <FinalCTA onSubscribeClick={handleSubscribeClick} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      <EbookPreviewModal
        book={selectedBook}
        isOpen={previewModalOpen}
        onClose={() => setPreviewModalOpen(false)}
        onSubscribeClick={handleSubscribeClick}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        planName={checkoutPlan.name}
        price={checkoutPlan.price}
      />
    </div>
  );
}
