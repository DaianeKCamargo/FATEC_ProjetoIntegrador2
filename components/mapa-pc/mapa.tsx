'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; 
import { defaultValueTypes } from 'framer-motion';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Mapa() {
    return (
        <MapContainer
            center={[ -23.55, -46.63]}
            zoom={13}
            style={{height: "400px", width: "100%"}}>

            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            <Marker position={[-23.55, -46.63]}>
                <Popup>
                    Ponto de Coleta 1<br /> Rua Exemplo, 123.
                </Popup>
            </Marker>
            <Marker position={[-23.56, -46.62]}>
                <Popup>
                    Ponto de Coleta 2<br /> Avenida Teste, 456.
                </Popup>
            </Marker>

        </MapContainer>
    );
}