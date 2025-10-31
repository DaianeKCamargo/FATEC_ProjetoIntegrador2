'use client';
import { Noto_Sans_JP } from 'next/font/google';
import NavegationBar from "@/components/navbar/NavegationBar";
// @ts-ignore: allow side-effect import for global CSS without type declarations
import './globals.css';
import Footer from '@/components/footer';
import Copyright from '@/components/copyright';

// Configuração da fonte
const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// função padrão do react
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //Apenas na pagina meuPerfil que nao vai ter a navegation bar e o footer




  return (
    <html lang="en">
      <body className={notoSansJp.className}>
        <NavegationBar />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>

  );

}
