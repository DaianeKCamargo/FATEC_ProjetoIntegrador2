'use client';
import NewsCard from "@/components/newscard";
import NewsCard from "@/components/NewsCard/NewsCard";
import styles from "@/styles/namidia.module.css";


export default function TamPetsNaMidia() {

    return(
        <section>
           <div className={styles["titulo"]}>
                <h1>Tampets na Mídia</h1>
                <h2>Confira aqui as notícias onde o projeto TamPets marcou presença!</h2>
            </div>

            <div className={styles["news-container"]}>
              <NewsCard
                imagem="/noticia1.webp"
                titulo="Projeto arrecada tampinhas plásticas para ajudar animais em Sorocaba - G1"
                data="09 Jul 2020"
                url="https://g1.globo.com/sp/sorocaba-jundiai/mundo-pet/noticia/2020/07/09/projeto-arrecada-tampinhas-plasticas-para-ajudar-animais-em-sorocaba.ghtml"
              >
              </NewsCard>
              <NewsCard
                imagem="/noticia2.webp"
                titulo="Projeto arrecada 20 toneladas de tampinhas e beneficia quase 600 animais - G1"
                data="21 Out 2021"
                url="https://g1.globo.com/sp/sorocaba-jundiai/mundo-pet/noticia/2021/10/21/projeto-arrecada-20-toneladas-de-tampinhas-e-beneficia-quase-600-animais.ghtml"
              >
              </NewsCard>
              <NewsCard
                imagem="/noticia3.jpg"
                titulo="Projeto TamPets coleta e vende tampinhas plásticas em Sorocaba para ajudar a causa animal - Agenda Sorocaba"
                data="12 Ago 2022"
                url="https://agendasorocaba.com.br/listas-novidades/projeto-tampets-coleta-e-vende-tampinhas-plasticas-em-sorocaba-para-ajudar-a-causa-animal/"
              >
              </NewsCard>
              <NewsCard
                imagem="/noticia4.webp"
                titulo="Projeto completa 3 anos e arrecada mais de 40 toneladas de tampinhas - G1"
                data="20 Out 2022"
                url="https://g1.globo.com/sp/sorocaba-jundiai/mundo-pet/noticia/2022/10/20/projeto-arrecada-mais-de-40-toneladas-de-tampinhas-para-ajudar-animais-abandonados.ghtml"
              >
              </NewsCard>

              <NewsCard
                imagem="/noticia5.jpeg"
                titulo="Projeto “TamPets” completa 4 anos - Cruzeiro FM 92.3"
                data="11 Out 2023"
                url="https://www.cruzeirofm.com.br/2023/10/11/destaque/projeto-tampets-completa-4-anos/"
              >
              </NewsCard>

              <NewsCard
                imagem="/noticia6.jpg"
                titulo="Tampinhas ajudam a castrar animais - Cruzeiro do Sul"
                data="10 Out 2024"
                url="https://www.jornalcruzeiro.com.br/sorocaba/noticias/2024/10/738851-tampinhas-ajudam-a-castrar-animais.html"
              >
              </NewsCard>

              <NewsCard
                imagem="/noticia7.webp"
                titulo="Projeto TamPets: Reciclando tampi2nhas para combater o abandono e os maus tratos - G1"
                data="09 Nov 2023"
                url="https://g1.globo.com/sp/sorocaba-jundiai/tem-mais-pet/noticia/2023/11/09/projeto-tampets-reciclando-tampinhas-para-combater-o-abandono-e-os-maus-tratos-aos-animais.ghtml"
              >
              </NewsCard>

              <NewsCard
                imagem="/noticia8.jpg"
                titulo="ZF apoia projeto que une reciclagem e causa animal em Sorocaba - ZF Centro de Imprensa"
                data="06 Abr 2024"
                url="https://press.zf.com/press/pt/releases/release_66115.html"
              >
              </NewsCard>
      </div>
        </section>
    );
}