import Card from "@/Components/Card";

export default function parceiros() {
    return (
        <section>
                <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>Parceiros TamPets</h1>
                <h2 style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>Parceiros que transformam tampinhas em vidas protegidas!</h2>
            <div style={{display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "15%", marginTop:"7%"}}>

                <a href="https://www.instagram.com/codecloudconsultoria" target="_blank" rel="noopener noreferrer">
                <Card
                    imagem={"/Code & Cloud (1).png"}
                    titulo="Code & Cloud"
                    className="card"
                /> 
                </a>
               <a href="https://fatecvotorantim.cps.sp.gov.br" target="_blank" rel="noopener noreferrer">
               <Card
                    imagem={"/logofatec.png"}
                    titulo="Fatec de Votorantim"
                    className="card"
                /> </a>
                <a href="https://www.cps.sp.gov.br" target="_blank" rel="noopener noreferrer">
                <Card
                    imagem={"/logocps.png"}
                    titulo="Centro Paula Souza"
                    className="card"
                /> </a>
            </div>
        </section>
       
    );
}