import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1> Erro 404 - Página não encontrada! </h1>

            <p> Links que podem ser úteis: </p>
            <Link href="/pontoColeta"> Encontre Pontos de Coleta perto de você! </Link>
            <br /> <Link href="/comoDoar"> Está com dúvidas sobre como doar? Clique aqui </Link>
            <br /> <Link href="/"> Faça parte do projeto, junte-se a nós! </Link>
        </div>
    )
}
