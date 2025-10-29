
import Carrossel from "@/Components/Carrossel";
import { Metadata } from "next"
import Image from "next/image"; 
import Link from "next/link";



//  Metadata da página inicial ela é exibida na aba do navegador e em mecanismos de busca.
// Para mudar o icone da aba, bastou eu colocar o arquivo inserir a imagem que eu quero e mudar o nome para "favicon.ico" na pasta "app".
export const metadata: Metadata = {
    title: "Bem-vindo ao Projeto Tampets! ",
    description: "Projeto Tampets - Uma tampinha sozinha não tem preço, mas, unida a outras, tem um grande valor.",
}

export default function Home() {
    const imagens = ["/Procuro meu dono.png",
         "/ProcDono2.png", 
         "/ProcDono3.png",];
    return (
        <section>
            <div className="container-imagem">
                <Image className="imagem" src="/home_TamPets.png" alt="Cachorro e Gato com Tampinhas" width={1920} height={1080} />
            </div>
            <div className="body">
                <div>
                    <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px"}}>Procuro meu Dono</h1>
                    <h2 style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px"}}>Ajude a encontrar o lar desses animais</h2>
                    <Carrossel imagens={imagens} />
                </div>
                <div>
                    <h1  style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px"}}> Doe suas Tampinhas! </h1>
                    <h2  style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px"}}>
                        Ajude nossos amigos de quatro patas e com isso você ainda ajuda o meio ambiente.
                    </h2>
                </div>
                <div style={{display: "flex",justifyContent: "center", alignItems: "center",height: "auto"}}>
                     <Link href="/comoDoar">
                     <Image className="imagem" src="/doacaotampinhas 1.png" alt="Doe" width={762} height={429}/>
                     </Link>

                </div>

            </div>
            




        </section>
        
        

    );
}

// https://www.youtube.com/watch?v=e6FigV2fLC8&t=77s video para finalizar o site com nextjs