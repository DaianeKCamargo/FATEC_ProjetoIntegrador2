'use client';
import SearchBar from "@/Components/SearchBar";
import { useState } from "react";


export default function pontoColeta() {
    const handleSearch = (query: string) => {
    console.log("Busca:", query);
    };

    const [locaisColeta, setLocaisColeta] = useState<any[]>([]);
    fetch("http://localhost:3000/api/locaisPontoColeta",{
            method: "GET"
        }).then (async (response) => { // depende da ação anterior 
            // response -> resposta da chamada à API
            const resposta = await response.json(); // promisse -> asyncrona
            setLocaisColeta(resposta);
            console.log(resposta);
        })

  
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
            <div>
                {locaisColeta.map((local, index) => (
                    <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
                        <h3>{local.nome_estabelecimento}</h3>
                        <p>{local.endereco}</p>
                        <p>{local.telefone}</p>
                        <p>{local.horario_funcionamento}</p>
                    </div>
                ))}
            </div>
         </section>
    )
}
                
        