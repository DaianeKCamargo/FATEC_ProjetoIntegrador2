'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Mapa() {
    return (
        <MapContainer
            center={[-23.5062, -47.4559]} // Sorocaba, SP
            zoom={13}
            style={{height: "400px", width: "100%"}}>

            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            <Marker position={[-23.5062, -47.4559]}>
                <Popup>
                    Ponto de Coleta 1<br /> Rua Exemplo, 123.
                </Popup>
            </Marker>
            <Marker position={[-23.5062, -47.4559]}>
                <Popup>
                    Ponto de Coleta 2<br /> Avenida Teste, 456.
                </Popup>
            </Marker>

        </MapContainer>
    );
}