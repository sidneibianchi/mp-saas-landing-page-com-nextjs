import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simplifica Estudos - SaaS Landing Page",
  description: "Landing page SaaS no estilo Notion para clube de assinatura de e-books e estudos inteligentes, construída com Next.js, Tailwind CSS e Shadcn/UI.",
  openGraph: {
    title: "Simplifica Estudos - SaaS Landing Page",
    description: "Landing page SaaS no estilo Notion para clube de assinatura de e-books e estudos inteligentes, construída com Next.js, Tailwind CSS e Shadcn/UI.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simplifica Estudos - SaaS Landing Page",
    description: "Landing page SaaS no estilo Notion para clube de assinatura de e-books e estudos inteligentes, construída com Next.js, Tailwind CSS e Shadcn/UI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#ffffff] text-[#37352f] antialiased selection:bg-[#cce3f5]">
        {children}
      </body>
    </html>
  );
}
