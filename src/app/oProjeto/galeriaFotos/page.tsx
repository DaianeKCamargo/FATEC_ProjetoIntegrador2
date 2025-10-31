import Card from "@/components/Card";
import TampleteTitulo from "@/components/tampleteTitulo";
import Link from "next/link";

export default function GaleriaFotos() {
  return (
    <section>
      <div className="titulo">
        <TampleteTitulo titulo="Galeria de Fotos" descricao="Veja um pouco dos eventos, parcerias que possuímos dentro do projeto." color="#ddd2f3ff" />
      </div>

      <div className="body" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", paddingTop: "40px" }}>
        <Link href="./galeriaFotos/galeriaColeta">
          <Card
            imagem={"/coleta.PNG"}
            titulo="Pontos de Coleta"
            descricao="Pontos de Coleta do Projeto!"
            className="card"
          />
        </Link>

        <Link href="./galeriaFotos/galeriaEmpresas">
          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          /> </Link>

        <Link href="./galeriaFotos/galeriaEventos">
          <Card
            imagem={"/evento.PNG"}
            titulo="Eventos"
            descricao="Eventos do Projeto!"
            className="card"
          />
        </Link>

        <Link href="./galeriaFotos/galeriaEscolas">
          <Card
            imagem={"/tampets112023.webp"}
            titulo="Escolas"
            descricao="Escolas que Participam!"
            className="card"
          />
        </Link>


      </div>
    </section>
  )
}