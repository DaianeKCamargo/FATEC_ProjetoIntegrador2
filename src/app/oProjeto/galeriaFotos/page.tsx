import Card from "@/Components/Card";
import Link from "next/link";

export default function GaleriaFotos() {
    return (
      <section>
        <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>Galeria TamPets 📸</h1>
        <h2 style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>Melhores momentos registrados do projeto Tampets!</h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "15%", marginTop:"7%"}}>
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