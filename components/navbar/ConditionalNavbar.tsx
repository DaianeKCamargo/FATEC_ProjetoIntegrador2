"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";


export default function ConditionalNavbar() {
    const pathname = usePathname() || "/";

    // caminhos onde NÃO quer a navbar — ajuste conforme necessário
    const hideOn = ["/admin", "/login", "/cadastro"];

    // esconde se pathname começar por um dos itens (para incluir sub-rotas)
    const shouldHide = hideOn.some((p) => pathname === p || pathname.startsWith(p + "/"));

    if (shouldHide) return null;
    return <Navbar />;
}
