import NewsCard from "@/Components/NewsCard";




export default function naMidia() {
    return (
       <section >
        <div style={{ textAlign: "center", marginBottom: "20px", 
                marginTop: "20px", padding: "2px" }}>
                <h1>TamPets na Mídia 📺</h1>
                <h2>Confira as aparições da TamPets na mídia!</h2>
        </div>
           <div className="news-container">
            <NewsCard
              imagem="/lia-marcos.webp"
              titulo="Projeto arrecada tampinhas plásticas para ajudar animais em Sorocaba - G1"
              data="09 Jul 2020"
              url="https://g1.globo.com/sp/sorocaba-jundiai/mundo-pet/noticia/2020/07/09/projeto-arrecada-tampinhas-plasticas-para-ajudar-animais-em-sorocaba.ghtml"
            >
            </NewsCard>
              <NewsCard
             imagem="/projeto-tampets-arrecadacao.webp"
              titulo="Projeto arrecada 20 toneladas de tampinhas e beneficia quase 600 animais - G1"
              data="21 Out 2021"
              url="https://g1.globo.com/sp/sorocaba-jundiai/mundo-pet/noticia/2021/10/21/projeto-arrecada-20-toneladas-de-tampinhas-e-beneficia-quase-600-animais.ghtml"
            >
            </NewsCard>
              <NewsCard
              imagem="/TamPets.jpg"
              titulo="Projeto TamPets coleta e vende tampinhas plásticas em Sorocaba para ajudar a causa animal - Agenda Sorocaba"
              data="12 Ago 2022"
              url="https://agendasorocaba.com.br/listas-novidades/projeto-tampets-coleta-e-vende-tampinhas-plasticas-em-sorocaba-para-ajudar-a-causa-animal/"
            >
            </NewsCard>
              <NewsCard
              imagem="/tampets-1-.webp"
              titulo="Projeto completa 3 anos e arrecada mais de 40 toneladas de tampinhas - G1"
              data="20 Out 2022"
              url="https://g1.globo.com/sp/sorocaba-jundiai/mundo-pet/noticia/2022/10/20/projeto-arrecada-mais-de-40-toneladas-de-tampinhas-para-ajudar-animais-abandonados.ghtml"
            >
            </NewsCard>
              <NewsCard
              imagem="/tampetscruzeiro.jpeg"
              titulo="Projeto “TamPets” completa 4 anos - Cruzeiro FM 92.3"
              data="11 Out 2023"
              url="https://www.cruzeirofm.com.br/2023/10/11/destaque/projeto-tampets-completa-4-anos/"
            >
            </NewsCard>
              <NewsCard
              imagem="/cruzeirodosul.jpg"
              titulo="Tampinhas ajudam a castrar animais - Cruzeiro do Sul"
              data="10 Out 2024"
              url="https://www.jornalcruzeiro.com.br/sorocaba/noticias/2024/10/738851-tampinhas-ajudam-a-castrar-animais.html"
            >
            </NewsCard>
              <NewsCard
              imagem="/tampets112023.webp"
              titulo="Projeto TamPets: Reciclando tampi2nhas para combater o abandono e os maus tratos - G1"
              data="09 Nov 2023"
              url="https://g1.globo.com/sp/sorocaba-jundiai/tem-mais-pet/noticia/2023/11/09/projeto-tampets-reciclando-tampinhas-para-combater-o-abandono-e-os-maus-tratos-aos-animais.ghtml"
            >
            </NewsCard>
              <NewsCard
              imagem="/tampetszf.jpg"
              titulo="ZF apoia projeto que une reciclagem e causa animal em Sorocaba - ZF Centro de Imprensa"
              data="06 Abr 2024"
              url="https://press.zf.com/press/pt/releases/release_66115.html"
            >
            </NewsCard>
           </div>

       </section>
        );
}