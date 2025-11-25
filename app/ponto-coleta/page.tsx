'use client'

import Titulo from '@/components/titulo/Titulo';
import 'leaflet/dist/leaflet.css';
import Mapa from '@/components/mapa-pc/mapa';
import StreetView from '@/components/mapa-pc/streetview/streetview';
import { useState } from 'react';
import Search from '@/components/mapa-pc/search/search';

export default function PontoColeta() {

    const [setResults] = useState([]);

    const handleSearch = async (query: unknown) => {
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();
    setResults(data.results);
  };

    return (
        <>
        <section>
            <Titulo src="/img_titulo_azul.png" title="Pontos de Coletas" label="Encontre aqui o local mais próximo de você!" />

        </section>

        <div style={{
             height: "100px", 
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             }}>
      <Search onSearch={handleSearch} />
        </div>

        <div style={{ padding: "20px"}}>
            <Mapa />
        </div>
        <div>
            <StreetView />
        </div>
        </>
    );
}