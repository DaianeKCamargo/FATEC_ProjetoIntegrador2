import './globals.css';
import type { Metadata } from "next";
import NavbarLogin from '@/components/navbar/NavbarLogin';
import Footer from '@/components/footer/Footer';
import Copiryght from '@/components/footer/Copyright';
import NavbarLogout from '@/components/navbar/NavbarLogout';
import { Noto_Sans_JP } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';



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
        <NavbarLogout />
        {children}
        <Footer />
        <Copiryght />
      </body>
    </html>
  );
}
