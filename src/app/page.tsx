
import { Metadata } from "next"
import Image from "next/image"; 



//  Metadata da página inicial ela é exibida na aba do navegador e em mecanismos de busca.
// Para mudar o icone da aba, bastou eu colocar o arquivo inserir a imagem que eu quero e mudar o nome para "favicon.ico" na pasta "app".
export const metadata: Metadata = {
    title: "Bem-vindo ao Projeto Tampets! ",
    description: "Projeto Tampets - Uma tampinha sozinha não tem preço, mas, unida a outras, tem um grande valor.",
}

export default function Home() {
    return (
        <section>
            <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>Projeto Beneficente TamPets</h1>
            <h2 style={{ textAlign: "center",  marginBottom: "20px", marginTop: "30px" }}>Uma tampinha sozinha não tem preço, mas, unida a outras, tem um grande valor.</h2>

            <div className="container-imagem">
                <Image
                    src="/imgHome.png"
                    alt="ImgHome"
                    width={1000}
                    height={1000}
                />
            </div>

        </section>
        
        

    );
}

// https://www.youtube.com/watch?v=e6FigV2fLC8&t=77s video para finalizar o site com nextjs