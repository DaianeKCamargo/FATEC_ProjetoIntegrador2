'use client';
import SearchBar from "@/Components/SearchBar";


export default function pontoColeta() {
    const handleSearch = (query: string) => {
    console.log("Busca:", query);
  };
    return (
         <section  style={{
        display: "flex",
        justifyContent: "center", // alinha horizontalmente
        alignItems: "center",     // alinha verticalmente
        flexDirection: "column",  // empilha verticalmente
        gap: "20px",              // espaçamento entre elementos
        marginTop: "20px"         
      }}
    >
            <h2>Pontos de Coleta ♻️</h2>
            <h3>Encontre o ponto de coleta mais próximo de você!</h3>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                 <SearchBar placeholder="Buscar ponto de coleta..." onSearch={handleSearch} />
            </div>
         </section>
    )
}
                
        