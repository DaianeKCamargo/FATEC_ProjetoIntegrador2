import AlbumPage from "@/components/album/AlbumPage";
import Titulo from "@/components/titulo/Titulo";

export default function albumEventos() {
    const photos = [
        "/MPSL-empresa-evento.jpg",
        "/palestraCMEIRaphaela-evento.jpg",
        "/palestraEEML-evento.jpg",
        "/MPSL-empresa-evento.jpg",
        "/palestraCMEIRaphaela-evento.jpg",
        "/palestraEEML-evento.jpg",
        "/palestraEHSHITER-evento-empresas.jpg",
        "/palestraFudacaoCasa-evento.jpg",
        "/palestraWPM-evento.jpg",

    ];

    return (
        <>
        <Titulo src="/img_titulo_amarelo.png" title="Galeria de Fotos" label="Eventos TamPets"/>
        <AlbumPage photos={photos} />
        </>
    );
}
