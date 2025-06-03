import React from "react";
import Image from "next/image";

const Statistics: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6">
      {/* Header Section */}
      <header className="mb-12 text-start md:text-left">
        <h3 className="text-primary font-medium mb-2 text-sm md:text-base">
          Statistik dan Dampak Sosial
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
          Dampak Nyata dari PENSi <br className="hidden sm:block" />
          untuk Masyarakat Indonesia
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Data berbicara — lihat bagaimana PENSi telah membantu ribuan orang{" "}
          <br className="hidden sm:block" />
          merencanakan masa pensiun mereka.
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 px-4">
        {/* Statistics Section */}
        <div className="w-full md:w-1/2 space-y-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">20,000 +</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Estimasi pensiun telah dilakukan sejak peluncuran PENSi
            </p>
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">85 %</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Pengguna merasa lebih siap pensiun setelah mencoba PENSi
            </p>
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">
              &lt; 5 Menit
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Waktu rata-rata yang dibutuhkan untuk mendapatkan estimasi
            </p>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/ilustration/Frame.png"
            alt="Ilustrasi dampak PENSi"
            width={1000}
            height={400}
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
