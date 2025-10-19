import { NavegationBar } from "@/Components/NavegationBar"
import { Metadata } from "next"


//  Metadata da página inicial ela é exibida na aba do navegador e em mecanismos de busca.
// Para mudar o icone da aba, bastou eu colocar o arquivo inserir a imagem que eu quero e mudar o nome para "favicon.ico" na pasta "app".
export const metadata: Metadata = {
    title: "Bem-vindo ao Projeto Tampets! ",
    description: "Projeto Tampets - Uma tampinha sozinha não tem preço, mas, unida a outras, tem um grande valor.",
}

export default function Home() {
    return (
        <>
        <NavegationBar />
        <h1>Página: Home</h1>
        </>
    )
}