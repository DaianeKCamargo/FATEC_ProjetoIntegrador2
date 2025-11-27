"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "@/styles/carrossel.module.css";

import "swiper/css";
import "swiper/css/pagination";

interface Partner {
  id: string;
  photoP?: string;
  linkP?: string;
  approved: boolean;
}

export default function PartnersCarousel() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/partners", { cache: "no-store" });
        const data = await res.json();

        // Filtra só os aprovados
        const aprovados = data.filter((p: Partner) => p.approved === true);
        setPartners(aprovados);
      } catch (err) {
        console.error("Erro ao carregar parceiros:", err);
      }
    }

    load();
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={3}
      loop
      autoplay={{ delay: 3000 }}
      className={styles.swiper}
      style={{ width: "100%", maxWidth: "600px" }}
    >
      {partners.map((partner) => (
        <SwiperSlide key={partner.id}>
          <div className={styles.carrossel}>
            <a href={partner.linkP} target="_blank">
              <img src={partner.photoP} alt="logo do parceiro" />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
