
import Carrossel from "@/Components/Carrossel";
import { Metadata } from "next"
import Image from "next/image"; 



//  Metadata da página inicial ela é exibida na aba do navegador e em mecanismos de busca.
// Para mudar o icone da aba, bastou eu colocar o arquivo inserir a imagem que eu quero e mudar o nome para "favicon.ico" na pasta "app".
export const metadata: Metadata = {
    title: "Bem-vindo ao Projeto Tampets! ",
    description: "Projeto Tampets - Uma tampinha sozinha não tem preço, mas, unida a outras, tem um grande valor.",
}

export default function Home() {
    const imagens = ["/Procuro meu dono.png",
         "/ProcDono2.png", 
         "/Procuro meu dono.png",];
    return (
        <section>
            <div className="container-imagem">
                <Image className="imagem" src="/home_TamPets.png" alt="Cachorro e Gato com Tampinhas" width={1920} height={1080} />
            </div>
            <div className="body">
                    <h2 style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px"}}>Procuro meu Dono</h2>
                    <h3 style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px"}}>Ajude a encontrar o lar desses animais</h3>
                    <Carrossel imagens={imagens} />
            </div>


        </section>
        
        

    );
}

// https://www.youtube.com/watch?v=e6FigV2fLC8&t=77s video para finalizar o site com nextjs