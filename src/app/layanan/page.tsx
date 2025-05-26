"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const LayananPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 5000); // otomatis hilang setelah 5 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-100 text-gray-900 overflow-hidden">
      {/* Popup pesan motivasi */}
      {showPopup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between space-x-4">
            <span>Ayo hitung investasi untuk masa depanmu!</span>
            <button
              onClick={() => setShowPopup(false)}
              className="text-green-700 font-bold text-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      {/* Hiasan kanan atas */}
      <div className="absolute top-0 right-0 z-0">
        <Image
          src="/vector/80.png"
          alt="Hiasan kanan atas"
          width={200}
          height={200}
        />
      </div>

      {/* Hiasan kiri atas */}
      <div className="absolute top-52 left-0 z-0">
        <Image
          src="/vector/24.png"
          alt="Hiasan kanan atas"
          width={50}
          height={50}
        />
      </div>

      {/* Hiasan kiri bawah */}
      <div className="absolute bottom-0 left-0 z-0">
        <Image
          src="/vector/82.png"
          alt="Hiasan kiri bawah"
          width={150}
          height={150}
        />
      </div>

      {/* Konten utama */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-4">
          Kalkulator Pensiun
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Jaminan kesejahteraan hari tua merupakan harapan semua orang. Ayo
          hitung investasi masa depanmu, dengan Kalkulator Pensiun.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Usia saat ini"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Usia pensiun yang diinginkan"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />

          <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-green-600 font-medium">
            <option>Waktu Menuju / Masa Pensiun</option>
          </select>

          <input
            type="text"
            placeholder="Sampai usia berapa dana pensiun dibutuhkan?"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />

          <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-green-600 font-medium">
            <option>Estimasi Harapan Hidup</option>
          </select>

          <input
            type="text"
            placeholder="Pengeluaran bulanan"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Penghasilan dividen (bulanan) saat ini"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Penghasilan pasif (bulanan) saat ini"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Uang yang sudah kamu miliki"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Uang yang bisa diinvestasikan setiap bulannya"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold"
          >
            Lihat Hasil Perhitungan
          </button>
        </form>
      </div>
    </section>
  );
};

export default LayananPage;
