import type { Metadata } from "next";
import "./globals.css"; // Seu arquivo CSS onde a Poppins está importada

export const metadata: Metadata = {
  title: "EasyProject",
  description: "Criado por Raphael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full antialiased">
      {/* Removemos as variáveis da Geist daqui */}
      <body className="min-h-full flex flex-col font-poppins">
        {children}
      </body>
    </html>
  );
}