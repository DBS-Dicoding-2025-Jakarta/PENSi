"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Testimoni: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Saya baru sadar pentingnya dana pensiun setelah mencoba PENSi. Platform ini benar-benar mudah digunakan dan hasil estimasinya bikin saya lebih tenang menghadapi masa depan.",
      author: "Rini Wulandari",
      image: "/people/download(2).jpeg",
    },
    {
      id: 2,
      quote:
        "Sebagai pelaku UMKM, saya nggak pernah mikirin pensiun sebelumnya. Tapi PENSi bantu saya ngitung kebutuhan dana secara realistis. Gak ribet, gak pusing.",
      author: "Ahmad Setiawan",
      image: "/people/download(2).jpeg",
    },
    {
      id: 3,
      quote:
        "Literasi keuangan saya masih rendah, tapi PENSi menjelaskan semuanya dengan bahasa yang simpel. Sekarang saya bisa punya rencana pensiun sejak muda.",
      author: "Dinda Lestari",
      image: "/people/download(2).jpeg",
    },
    {
      id: 4,
      quote:
        "Platform ini mengubah cara saya merencanakan keuangan. Sangat informatif dan membantu!",
      author: "Budi Hartono",
      image: "/people/download(2).jpeg",
    },
    {
      id: 5,
      quote:
        "Sekarang saya bisa lebih tenang menghadapi masa pensiun karena punya gambaran yang jelas.",
      author: "Sari Dewi",
      image: "/people/download(2).jpeg",
    },
    {
      id: 6,
      quote:
        "Sekarang saya bisa lebih tenang menghadapi masa pensiun karena punya gambaran yang jelas.",
      author: "Sari Dewi",
      image: "/people/download(2).jpeg",
    },
  ];

  // Scroll logic with framer-motion
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Translasi horizontal berdasarkan scroll vertikal
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((testimonials.length - 2) * 150)] // geser sejauh jumlah item dikali lebar item
  );

  return (
    <section className="py-32 bg-[#FAFAFA]" ref={containerRef}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Apa Kata Mereka Tentang <span className="text-primary">PENSi</span>
      </h2>

      <div className="overflow-hidden max-w-7xl mx-auto px-4">
        <motion.div style={{ x }} className="flex gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-primary/10 rounded-xl p-8 w-[280px] md:w-[320px] flex-shrink-0 text-center flex flex-col"
            >
              <blockquote className="text-gray-700 mb-8 flex-1">
                <div className="text-primary text-5xl mb-4 leading-none">
                  &rdquo;
                </div>
                <p className="text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <footer className="flex flex-col items-center mt-auto">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full mb-2 object-cover aspect-square"
                />
                <span className="font-semibold text-sm">
                  {testimonial.author}
                </span>
              </footer>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimoni;
