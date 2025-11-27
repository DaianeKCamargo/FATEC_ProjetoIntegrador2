# Tampets
O Projeto Tampets, é um projeto que faz arrecadação e reciclagem de tampinhas, e com o dinheiro arrecadado é feita a castração de gatos e cachorros.

---

## Descrição
O nosso objetivo é modernizar o site pois com a evolução do projeto foi visto a necessidade de uma modernização e facilitação de uma melhor visualização para o publico e uma melhor interface para nossa cliente (Lia). O objetivo do site em si, é informar os parceiros, Pontos de coletas proximos de quem quer doar, expandir o tamanho do projeto, e apresentar o projeto para não só para facilitar a vida de nossa cliente, mas também transmitir a missão do Projeto

---

## 🛠️ Tecnologias Utilizadas
- Next
- React
- Type Script
- React bootstrap
- Formik
- React Icons
- Bootstrap Icons
- Yup
- Framer Motions
- Lucide React
- Recharts
- Swiper
- Open street view
- Mapillary JS
- React Leaflet

---

## 📁 Estrutura de Pastas

```
├── 📁 .github
│   └── 📁 workflows
│       └── ⚙️ nextjs.yml
├── 📁 app
│   ├── 📁 admin
│   │   ├── 📁 admin-galeria
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 admin-na-midia
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 analise-e-aprovacao
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 resultados
│   │   │   └── 📄 page.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 api
│   │   ├── 📁 collectionpoints
│   │   │   ├── 📁 [id]
│   │   │   │   └── 📄 route.ts
│   │   │   └── 📄 route.ts
│   │   ├── 📁 galeria
│   │   │   ├── 📄 data.ts
│   │   │   └── 📄 route.ts
│   │   ├── 📁 partners
│   │   │   ├── 📁 [id]
│   │   │   │   └── 📄 route.ts
│   │   │   └── 📄 route.ts
│   │   └── 📁 relatorio
│   │       ├── 📁 admin
│   │       │   └── 📁 add
│   │       │       └── 📄 route.ts
│   │       ├── 📁 graficos
│   │       │   └── 📄 route.ts
│   │       ├── 📄 data.ts
│   │       └── 📄 route.ts
│   ├── 📁 cadastro
│   │   └── 📄 page.tsx
│   ├── 📁 como-doar
│   │   └── 📄 page.tsx
│   ├── 📁 login
│   │   ├── 📁 alterar-senha
│   │   │   └── 📄 page.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 meu-perfil
│   │   ├── 📁 parceiro
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 ponto-de-coleta
│   │   │   └── 📄 page.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 parceiros
│   │   └── 📄 page.tsx
│   ├── 📁 ponto-coleta
│   │   └── 📄 page.tsx
│   ├── 📁 relatorio
│   │   └── 📄 page.tsx
│   ├── 📁 sobre-nos
│   │   ├── 📁 galeria-tampets
│   │   │   ├── 📁 coletas
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 empresas
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 escolas
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 eventos
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 tampets-na-midia
│   │   │   └── 📄 page.tsx
│   │   └── 📄 page.tsx
│   ├── 📄 favicon.ico
│   ├── 🎨 globals.css
│   ├── 📄 layout.tsx
│   └── 📄 page.tsx
├── 📁 components
│   ├── 📁 admin-home
│   │   └── 📄 FrasesMotivacionais.tsx
│   ├── 📁 album
│   │   └── 📄 AlbumPage.tsx
│   ├── 📁 card
│   │   └── 📄 Card.tsx
│   ├── 📁 checkchildren
│   │   ├── 📄 CheckDown.tsx
│   │   └── 📄 InputChild.tsx
│   ├── 📁 collectionpoints
│   │   └── 📄 CollectionPointList.tsx
│   ├── 📁 footer
│   │   ├── 📄 CoditionalCopyright.tsx
│   │   ├── 📄 CoditionalFooter.tsx
│   │   ├── 📄 Copyright.tsx
│   │   └── 📄 Footer.tsx
│   ├── 📁 form
│   │   └── 📄 Input.tsx
│   ├── 📁 grafico-co2
│   │   └── 📄 graficosCO2.tsx
│   ├── 📁 grafico-tampinhas
│   │   └── 📄 graficoTampinhas.tsx
│   ├── 📁 home
│   │   ├── 📄 CountUp.tsx
│   │   ├── 📄 SwapCards.tsx
│   │   └── 📄 WhatsModal.tsx
│   ├── 📁 info-icon
│   │   └── 📄 InfoIcon.tsx
│   ├── 📁 input-image
│   │   └── 📄 FileInput.tsx
│   ├── 📁 mapa-pc
│   │   ├── 📁 search
│   │   │   └── 📄 search.tsx
│   │   ├── 📁 streetview
│   │   │   └── 📄 streetview.tsx
│   │   └── 📄 mapa.tsx
│   ├── 📁 navbar
│   │   ├── 📄 ConditionalNavbar.tsx
│   │   ├── 📄 FaixaColorida.tsx
│   │   └── 📄 Navbar.tsx
│   ├── 📁 newscard
│   │   └── 📄 NewsCard.tsx
│   ├── 📁 partners
│   │   ├── 📄 Carrossel.tsx
│   │   ├── 📄 PartnerCard.tsx
│   │   └── 📄 PartnerList.tsx
│   ├── 📁 resumo-cards
│   │   └── 📄 resumoCards.tsx
│   ├── 📁 select
│   │   └── 📄 Select.tsx
│   └── 📁 titulo
│       └── 📄 Titulo.tsx
├── 📁 context
│   └── 📄 AuthContext.tsx
├── 📁 public
│   ├── 📁 uploads
│   │   └── 🖼️ 5907a926-d889-4d0b-ac77-1e38c2244067-Captura de tela 2025-10-06 211130.png
│   ├── 🖼️ CEI88-coleta.jpg
│   ├── 🖼️ EEgualbertomoreira-escolas-coletas.jpg
│   ├── 🖼️ GaleriaColetas.PNG
│   ├── 🖼️ GaleriaEmpresas.jpg
│   ├── 🖼️ GaleriaEscolas.webp
│   ├── 🖼️ GaleriaEventos.PNG
│   ├── 🖼️ MPSL-empresa-evento.jpg
│   ├── 🖼️ ProdHigiene.jpg
│   ├── 🖼️ ProdLimpeza.jpeg
│   ├── 🖼️ TamPets-bannerzin.png
│   ├── 🖼️ Tampinhasplasticas.jpg
│   ├── 🖼️ anhanguera-escolas.jpg
│   ├── 🖼️ cachorroRelatorio.png
│   ├── 🖼️ distribuidoraJMF-coleta.jpg
│   ├── 🖼️ doar.png
│   ├── 🖼️ folder_home.png
│   ├── 🖼️ gatoRelatorio.png
│   ├── 🖼️ img_titulo_amarelo.png
│   ├── 🖼️ img_titulo_azul.png
│   ├── 🖼️ img_titulo_lilas.png
│   ├── 🖼️ img_titulo_verde.png
│   ├── 🖼️ img_titulo_vermelho.png
│   ├── 🖼️ localizacao.png
│   ├── 🖼️ logo_code_cloud.png
│   ├── 🖼️ logo_cps.png
│   ├── 🖼️ logo_fatec.png
│   ├── 🖼️ logo_tampets.png
│   ├── 🖼️ noticia1.webp
│   ├── 🖼️ noticia2.webp
│   ├── 🖼️ noticia3.jpg
│   ├── 🖼️ noticia4.webp
│   ├── 🖼️ noticia5.jpeg
│   ├── 🖼️ noticia6.jpg
│   ├── 🖼️ noticia7.webp
│   ├── 🖼️ noticia8.jpg
│   ├── 🖼️ palestraCMEIRaphaela-evento.jpg
│   ├── 🖼️ palestraEEML-evento.jpg
│   ├── 🖼️ palestraEHSHITER-evento-empresas.jpg
│   ├── 🖼️ palestraFudacaoCasa-evento.jpg
│   ├── 🖼️ palestraWPM-evento.jpg
│   ├── 🖼️ parceiro.png
│   ├── 🖼️ ponto_coleta.png
│   ├── 🖼️ realautopecas-coletas-empresas.jpg
│   ├── 🖼️ sarahsalvestro-escolas.jpg
│   ├── 🖼️ tampinhasRelatorio.png
│   ├── 🖼️ valid-empresas.jpg
│   └── 🖼️ voluntario.png
├── 📁 schemas
│   ├── 📄 cadSchema.ts
│   └── 📄 logSchema.ts
├── 📁 styles
│   ├── 🎨 adm-galeria.module.css
│   ├── 🎨 admin-analise-e-aprovacao.module.css
│   ├── 🎨 admin-home.module.css
│   ├── 🎨 admin-na-midia.module.css
│   ├── 🎨 admin-resultados.module.css
│   ├── 🎨 albumpage.module.css
│   ├── 🎨 card.module.css
│   ├── 🎨 carrossel.module.css
│   ├── 🎨 collections-points-list.module.css
│   ├── 🎨 como-doar.module.css
│   ├── 🎨 copyright.module.css
│   ├── 🎨 faixacolorida.module.css
│   ├── 🎨 footer.module.css
│   ├── 🎨 galeria.module.css
│   ├── 🎨 grafico-co2.module.css
│   ├── 🎨 grafico-tampinhas.module.css
│   ├── 🎨 home.module.css
│   ├── 🎨 lists.module.css
│   ├── 🎨 log-block.module.css
│   ├── 🎨 meu-perfil.module.css
│   ├── 🎨 namidia.module.css
│   ├── 🎨 navbar.module.css
│   ├── 🎨 newscard.module.css
│   ├── 🎨 parceiros.module.css
│   ├── 🎨 partner-card.module.css
│   ├── 🎨 ponto-coleta.module.css
│   ├── 🎨 relatorio.module.css
│   ├── 🎨 resumo-cards.module.css
│   ├── 🎨 sobre-nos.module.css
│   ├── 🎨 swap-cards.module.css
│   ├── 🎨 titulo.module.css
│   └── 🎨 whats-modal.module.css
├── 📁 utils
│   ├── 📄 auth.ts
│   └── 📄 users.ts
├── ⚙️ .gitignore
├── 📄 LICENSE
├── 📝 README.md
├── ⚙️ collectionpoints.json
├── 📝 config.md
├── 📄 eslint.config.mjs
├── 📄 global.d.ts
├── 📄 next.config.ts
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── ⚙️ partners.json
├── 📄 postcss.config.mjs
└── ⚙️ tsconfig.json
```

---

## ⚙️ Instalação e Uso
1. Clone o repositório  
2. Entre na pasta  
3. Instale dependências (se houver)  
4. Execute o projeto  

