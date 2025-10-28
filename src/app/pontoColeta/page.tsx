'use client';
import SearchBar from "@/Components/pontoColeta/SearchBar";
import TampleteTitulo from "@/Components/tampleteTitulo";
import { useEffect, useState } from "react";
import { PiPawPrintDuotone } from "react-icons/pi";


export default function pontoColeta() {
  
    
    const [locaisColeta, setLocaisColeta] = useState<any[]>([]);


    // API onde está os dados do ponto de coleta
    useEffect(() => {
    fetch("http://localhost:3000/api/locaisPontoColeta",{
            method: "GET"
        }).then (async (response) => { // depende da ação anterior 
            // response -> resposta da chamada à API
            const resposta = await response.json(); // promisse -> asyncrona
            setLocaisColeta(resposta);
            console.log(resposta);
        })
    }, []); // Adicionando dependências vazias para executar apenas uma vez na montagem

  
    return (
        <>
            <div className="titulo">
                <TampleteTitulo
                    titulo="Pontos de Coleta"
                    descricao="Encontre aqui, o local mais próximo de você para a entrega das suas tampinhas."
                    color="#f5f0e6ff"
                /> 
            </div>
            <div className="body">

            </div>

            <style jsx>
                {`
                    .body {
                                            
                    }
                `}
                
            </style>
        </>
    );
}
                
        