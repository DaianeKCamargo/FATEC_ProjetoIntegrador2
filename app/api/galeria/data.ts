// app/api/galeria/data.ts
export type Album = {
  id: number;
  nome: string;
  imagens: string[];
};

export const albuns: Album[] = [
  { id: 1, nome: 'Galeria Coletas', imagens: ["/CEI88-coleta.jpg","/distribuidoraJMF-coleta.jpg","/GaleriaColetas.PNG" ] },
  { id: 2, nome: 'Galeria Empresas', imagens: ["/GaleriaEmpresas.jpg","/MPSL-empresa-evento.jpg","/palestraEHSHITER-evento-empresas.jpg"] },
  { id: 3, nome: 'Galeria Escolas', imagens: ["/EEgualbertomoreira-escolas-coletas.jpg","/GaleriaEscolas.webp","/palestraCMEIRaphaela-evento.jpg"] },
  { id: 4, nome: 'Galeria Eventos', imagens: ["/GaleriaEventos.PNG","/MPSL-empresa-evento.jpg","/palestraCMEIRaphaela-evento.jpg","public/palestraEEML-evento.jpg","/palestraEHSHITER-evento-empresas.jpg"] },
];
