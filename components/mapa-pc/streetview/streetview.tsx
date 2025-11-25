'use client'

import { Viewer } from 'mapillary-js';
import { useEffect } from 'react';

export default function StreetView() {
    useEffect(() => {
        new Viewer({
            accessToken: "AQUIRE_YOUR_MAPILLARY_ACCESS_TOKEN",
            container: "mapillary-view",
            imageId: "1567890123456789" // Example image ID
        });
    }, []);

    return (
        <div id="mapillary-view" style={{ width: '100%', height: '400px' }}></div>
    );
}