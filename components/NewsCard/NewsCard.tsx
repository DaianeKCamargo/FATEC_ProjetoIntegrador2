import Image from "next/image";
import React from "react";
import "@/styles/newscard.module.css";

type NewsCardProps = {
  imagem: string;   // caminho relativo dentro da pasta public, ex: "/noticia.jpg"
  titulo: string;
  data?: string;
  url?: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ imagem, titulo, data, url }) => {
  return (
    <div className="news-card">
      <div className="news-card-img-wrapper">
        <Image 
          src={imagem} 
          alt={titulo} 
          width={300} 
          height={180} 
          className="news-card-img"
          style={{ objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        />
      </div>
      <div className="news-card-content">
        <h3 className="news-card-title">{titulo}</h3>
        <p className="news-card-date">{data}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="news-card-button">Leia mais</button>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;

