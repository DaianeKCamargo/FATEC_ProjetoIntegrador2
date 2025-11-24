'use client'

import Titulo from '@/components/titulo/Titulo';
import styles from '@/styles/ponto-coleta.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Mapa from '@/components/mapa-pc/mapa';
import StreetView from '@/components/mapa-pc/streetview/streetview';

export default function PontoColeta() {

    return (
        <>
        <section>
            <Titulo src="/img_titulo_azul.png" title="Pontos de Coletas" label="Encontre aqui o local mais próximo de você!" />

        </section>

        <div style={{ padding: "20px"}}>
            <Mapa />
        </div>
        <div>
            <StreetView />
        </div>
        </>
    );
}