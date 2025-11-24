import './globals.css';
import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConditionalNavbar from '@/components/navbar/ConditionalNavbar';
import ConditionalFooter from '@/components/footer/CoditionalFooter';
import ConditionalCopyright from '@/components/footer/CoditionalCopyright';
import VLibras from '@/components/acessibilidade/VLibras';



export const metadata: Metadata = {
  title: "Bem-Vindos ao Projeto Tampets",
  description: "Venha conhecer um pouco sobre nós e fazer parte desse projeto incrivel!",
};

// Configuração da fonte
const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansJp.className}>
        <VLibras />
        <ConditionalNavbar />
        {children}
        <ConditionalFooter />
        <ConditionalCopyright />
      </body>
    </html>
  );
}
