'use client';


import TampleteTitulo from "@/Components/tampleteTitulo";
import { useEffect, useState } from "react";



export default function pontoColeta() {
    
    const [locaisColeta, setLocaisColeta] = useState<any[]>([]);


    // ligação a page route, onde está a API que armazena os dados do ponto de coleta.
    useEffect(() => {                                   // atualiza manualmente as informações sempre que for alterarda
    fetch("http://localhost:3000/api/locaisPontoColeta",{
            method: "GET"
        }).then (async (response) => { // then -> depende da ação anterior 
            const resposta = await response.json();  // response -> resposta da chamada à API
            setLocaisColeta(resposta);
            console.log(resposta);
        })
    }, []); // Adicionando dependências vazias para executar apenas uma vez na montagem,

  
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

        </>
    );
}
                
        