"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "@/styles/carrossel.module.css";

import "swiper/css";
import "swiper/css/pagination";

interface Partner {
  photoP?: string;
  linkP?: string;
  approved: boolean;
}

export default function PartnersCarousel() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("partners");
    if (stored) setPartners(JSON.parse(stored));
  }, []);

  const approvedPartners = partners.filter((p) => p.approved);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={3}
      loop
      autoplay={{ delay: 3000 }}
      style={{ width: "100%", maxWidth: "600px", display: "flex", justifyContent: "space-between"}}
    >
      {approvedPartners.map((partner, index) => (
        <SwiperSlide key={index}>
          <div className={styles.carrossel} >
            <a href={partner.linkP} target="_blank">
              <img src={partner.photoP} alt="foto do parceiro" />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
