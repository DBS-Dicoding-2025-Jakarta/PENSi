import React from "react";

const KalkulatorForm = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Usia saat ini
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          placeholder="Usia saat ini"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Usia pensiun yang diinginkan
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          placeholder="Usia pensiun yang diinginkan"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Waktu Menuju Masa Pensiun
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          placeholder="Sampai usia berapa dana pensiun dibutuhkan?"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Estimasi Harapan Hidup
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          placeholder="Pengeluaran Bulanan"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pengeluaran Bulanan
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          placeholder="Pengeluaran dividen (bulanan) saat ini"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pengeluaran Pasca (bulanan) saat ini
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          placeholder="Pengeluaran pasca (bulanan) saat ini"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Uang yang sudah kamu miliki
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          placeholder="Uang yang sudah kamu miliki"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Uang yang dimaksudkan untuk setoran bulanan
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          placeholder="Uang yang dimaksudkan untuk setoran bulanan"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
      >
        Lihat Hasil Perhitungan
      </button>
    </form>
  );
};

export default KalkulatorForm;
