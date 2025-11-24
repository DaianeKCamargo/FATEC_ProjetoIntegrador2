"use client";

import { usePathname } from "next/navigation";
import NavbarLogin from "@/components/navbar/NavbarLogin";

export default function ConditionalNavbarLogin() {
    const pathname = usePathname() || "/user";

    // caminhos onde NÃO quer a navbar — ajuste conforme necessário
    const hideOn = ["/admin", "/login", "/cadastro"];

    // esconde se pathname começar por um dos itens (para incluir sub-rotas)
    const shouldHide = hideOn.some((p) => pathname === p || pathname.startsWith(p + "/user"));

    if (shouldHide) return null;
    return <NavbarLogin />;
}
