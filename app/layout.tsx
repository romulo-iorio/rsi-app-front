import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSI App",
  description: "Rápida Sequência de Intubação",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
