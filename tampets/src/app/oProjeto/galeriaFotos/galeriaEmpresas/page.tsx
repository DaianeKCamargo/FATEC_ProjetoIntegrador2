import Card from "@/Components/Card";


export default function GaleriaEmpresas()

{
    return (
      <section>
        <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
            TamPets nas Empresas 📸</h1>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          />
          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          /> 

          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          />

          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          />
          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          />
          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          /> 

          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          />

          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          />
        </div>
      </section>
    )
}