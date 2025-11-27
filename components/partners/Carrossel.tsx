"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "@/styles/carrossel.module.css";

import "swiper/css";
import "swiper/css/pagination";

interface Partner {
  id: number;
  nameP?: string;
  photoP?: string;
  linkP?: string;
  approved: boolean;
}

export default function PartnersCarousel() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/partners", { cache: "no-store" });
        const data = await res.json();
        setPartners(data);
      } catch (err) {
        console.error("Erro ao carregar parceiros:", err);
      }
    };

    load();
  }, []);

  const approvedPartners = partners.filter((p) => p.approved);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={3}
      loop
      autoplay={{ delay: 3000 }}
      style={{
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {approvedPartners.map((partner) => (
        <SwiperSlide key={partner.id}>
          <div className={styles.carrossel}>
            <a href={partner.linkP} target="_blank" rel="noopener noreferrer">
              <img src={partner.photoP} alt={partner.nameP || "Parceiro"} />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
