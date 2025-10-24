import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1> Erro 404 - Página não encontrada! </h1>
            <h1> 🐕🐈 </h1>

            <h4> Links que podem ser úteis: </h4>
            <p> <Link href="/Home"> Voltar à pagina inicial </Link> </p>
            <p> Encontre <Link href="/pontoColeta">Pontos de Coleta </Link> perto de você! </p>
            <p> Está com dúvidas sobre como doar? <Link href="/comoDoar">Clique aqui </Link> </p>
            <p> Faça parte do projeto, <Link href="/cadastrar"> junte-se a nós</Link>! </p>
        </div>
    )
}
