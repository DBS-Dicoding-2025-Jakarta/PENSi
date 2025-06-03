"use client";
import React from "react";
import Image from "next/image";

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
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Apa Kata Mereka Tentang <span className="text-primary">PENSi</span>
      </h2>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="bg-primary/10 rounded-xl p-8 flex flex-col text-center"
          >
            <blockquote className="text-gray-700 mb-8 flex-1">
              <div className="text-primary text-5xl mb-4 leading-none">
                &rdquo;
              </div>
              <p className="text-base leading-relaxed">"{testimonial.quote}"</p>
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
      </div>
    </section>
  );
};

export default Testimoni;
