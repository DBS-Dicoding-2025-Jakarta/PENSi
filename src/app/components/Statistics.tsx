import React from "react";
import Image from "next/image";

const Statistics: React.FC = () => {
  return (
    <section className="container mx-auto py-20 px-4 md:px-6">
      {/* Header Section */}
      <header className="mb-6">
        <h3 className="text-green-600 font-medium mb-2">
          Statistik dan Dampak Sosial
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Dampak Nyata dari PENSi
          <br />
          untuk Masyarakat Indonesia
        </h1>
        <p className="text-gray-600 mb-12">
          Data berbicara—lihat bagaimana PENSi telah membantu ribuan orang
          <br />
          merencanakan masa pensiun mereka.
        </p>
      </header>
      {/* Decoration*/}
      <div className="flex flex-col md:flex-row items-center">
        <div className="absolute top-1000 right-0 z-10">
          {/* <Image
            src="/vector/80.png"
            alt="Top right decoration"
            width={300}
            height={300}
          /> */}
        </div>
        {/* Aside Content - Statistics */}
        <section
          className="w-full md:w-1/2 pr-0 md:pr-8"
          aria-label="Statistik Pengguna"
        >
          <article className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-2">20,000 +</h2>
            <p className="text-gray-600">
              Estimasi pensiun telah dilakukan sejak peluncuran PENSi
            </p>
          </article>

          <article className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-2">85 %</h2>
            <p className="text-gray-600">
              Pengguna merasa lebih siap pensiun setelah mencoba PENSi
            </p>
          </article>

          <article className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-2">
              {"< 5 Menit"}
            </h2>
            <p className="text-gray-600">
              Waktu rata-rata yang dibutuhkan untuk mendapatkan estimasi
            </p>
          </article>
        </section>

        {/* Right Column - Illustration */}
        <figure className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-full flex justify-center">
            <Image
              src="/ilustration/Frame.png"
              alt="Ilustrasi dampak PENSi"
              width={600}
              height={500}
              className="object-contain"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Statistics;
