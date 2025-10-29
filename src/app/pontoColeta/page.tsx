'use client';


import TampleteTitulo from "@/Components/tampleteTitulo";
import { useEffect, useState } from "react";
import { Search } from 'lucide-react';
import { Form } from "react-bootstrap";
import { LiaSearchLocationSolid } from "react-icons/lia";




export default function pontoColeta() {
    
    // const [locaisColeta, setLocaisColeta] = useState<any[]>([]);
    const [bairro, setBairro] = useState('');
    const [resultados, setResultados] = useState([]);

    // Assuming this is your handleSearch function on or around line 25
async function handleSearch(query: string) {
  try {
    // Replace 'your-search-api-endpoint' with your actual API endpoint
    const response = await fetch(`http://localhost:3000/api/locaisPontoColeta?q=${bairro}`);

    if (!response.ok) {
      // If the server responds with an error status (e.g., 404, 500)
      const errorData = await response.json(); // Attempt to parse error message from response
      throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Process your search results here
    console.log("Search results:", data);

  } catch (error) {
    // This catch block will now handle the "Erro na busca"
    // Log the actual error for debugging
    console.error("Failed to perform search:", error);

    // Optionally, update UI to inform the user
    // setSearchError("An error occurred during search. Please try again.");
    // setLoading(false);
  }
}


    // ligação a page route, onde está a API que armazena os dados do ponto de coleta.
    // useEffect(() => {                                   // atualiza manualmente as informações sempre que for alterarda
    // fetch("http://localhost:3000/api/locaisPontoColeta",{
    //         method: "GET"
    //     }).then (async (response) => { // then -> depende da ação anterior 
    //         const resposta = await response.json();  // response -> resposta da chamada à API
    //         setLocaisColeta(resposta);
    //         console.log(resposta);
    //     })
    // }, []); // Adicionando dependências vazias para executar apenas uma vez na montagem,

  
    return (
        <>
            <div className="titulo">
                <TampleteTitulo
                    titulo="Pontos de Coleta"
                    descricao="Encontre aqui, o local mais próximo de você para a entrega das suas tampinhas."
                    color="#f5f0e6ff"
                /> 
            </div>
            <div className="flex flex-col items-center justify-center bg-white p-50 gap-3" >
                
                <label htmlFor="bairro" className="text-4xl font-semibold mb-2 text-gray-700">
                Qual é o seu bairro?
                </label>

                <div className="flex items-center gap-2 mb-6 text-3xl">
                    <input
                        id="bairro"
                        type="text"
                        placeholder="Digite o nome do seu bairro"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-2 w-100 focus:outline-none focus:ring-2 focus:ring-orange-400 hover:border-orange-400 transition-colors duration-200 "
                    />
                    <button
                        onClick={handleSearch}
                        className="flex items-center justify-center gap-2 border border-gray-400 text-gray-700 px-4 py-2 rounded-xl hover:border-orange-400 hover:text-orange-500 transition-colors duration-200"
                    >
                    <Search size={18} />
                    Pesquisar
                    </button>
                </div>


                {/* <ul className="bg-white shadow-md rounded-lg w-full max-w-lg divide-y divide-gray-200">
                    {resultados.length > 0 ? (
                        resultados.map((item, index) => (
                            <li key={index} className="p-3 hover:bg-orange-50 transition-colors duration-150">
                                {item.bairro || JSON.stringify(item)}
                            </li>
                        ))
                        ):(<li className="p-3 text-gray-500 text-center ">Nenhum resultado encontrado </li>
                    )}
                </ul> */}
            </div>

        </>
    );
}
                
        