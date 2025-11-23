"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

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
      slidesPerView={1}
      loop
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      style={{ width: "100%", maxWidth: "600px" }}
    >
      {approvedPartners.map((partner, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              padding: "20px",
              borderRadius: "12px",
              background: "#f8f8f8",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >

            <a href={partner.linkP}><img src={partner.photoP} alt="foto do parceiro" /></a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
