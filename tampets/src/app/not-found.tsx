// Página not found (404) -> toda vez que o usuário tentar acessar uma rota inexistente no sistema, ele será redirecionado para essa página.

import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1> ERRO 404 - PÁGINA NÃO ENCONTRADA </h1>
            <p> A página que está tentando acessar não existe! </p>
            <Link href="/"> Voltar para à página Home </Link>
        </div>
    )
}
