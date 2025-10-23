import Card from "@/Components/Card";


export default function GaleriaEmpresas()

{
    return (
      <section>
          <div style={{ textAlign: "center", marginBottom: "20px", 
                marginTop: "20px", padding: "2px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
                TamPets nas Empresas</h1>
            <h2 style={{ fontSize: "24px" }}>
                    Registros dos melhores momentos do projeto TamPets dentro das empresas!</h2>
          </div>
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