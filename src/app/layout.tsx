import { Noto_Sans_JP } from 'next/font/google';
import NavegationBar from "@/Components/NavegationBar";
// @ts-ignore: allow side-effect import for global CSS without type declarations
import './globals.css';

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
        <NavegationBar />
        {children}
      </body>
    </html>
  );
}
