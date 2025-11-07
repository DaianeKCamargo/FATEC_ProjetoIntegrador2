import type { Metadata } from "next";
import './globals.css';
import NavbarLogout from "@/components/navbar/navbarlogout";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: "Bem-Vindos ao Projeto Tampets",
  description: "Venha conhecer um pouco sobre nós e fazer parte desse projeto incrivel!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body>
        <NavbarLogout />
        {children}
      </body>
    </html>
  );
}
