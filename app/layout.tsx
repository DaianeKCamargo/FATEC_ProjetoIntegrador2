import './globals.css';
import type { Metadata } from "next";
import NavbarLogout from "../components/navbar/NavbarLogout";

export const metadata: Metadata = {
  title: "Bem-Vindos ao Projeto Tampets",
  description: "Venha conhecer um pouco sobre nós e fazer parte desse projeto incrivel!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarLogout />
        {children}
      </body>
    </html>
  );
}
