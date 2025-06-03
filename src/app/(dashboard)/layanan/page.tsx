"use client";
import React, { useState, useEffect } from "react";
import { modelWrapper } from "../../utils/modelWrapper"; // Adjust path as needed

const LayananPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [formData, setFormData] = useState({
    age: "",
    monthlyIncome: "",
    monthlyDebt: "",
    savings: "",
    netWorth: "",
    totalAssets: "",
    totalLiabilities: "",
    retirementYears: "",
  });

  const [hasilPrediksi, setHasilPrediksi] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const formatRupiah = (value: string) => {
    if (!value) return "";
    let angka = value.replace(/\D/g, "");
    angka = angka.replace(/^0+/, "");
    if (angka === "") angka = "0";
    return angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const unformatRupiah = (value: string) => {
    return value.replace(/\./g, "");
  };

  useEffect(() => {
    const loadModel = async () => {
      try {
        await modelWrapper.loadModel("/model/model.json");
        setModelLoaded(true);
        console.log("Model wrapper ready");
      } catch (err) {
        console.error("Model wrapper error:", err);
        setError(
          "Gagal memuat model ML. Coba refresh halaman atau hubungi support."
        );
      }
    };

    loadModel();
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const unformattedValue = unformatRupiah(value);
    setFormData((prev) => ({ ...prev, [name]: unformattedValue }));
    setError("");
  };

  const validateInput = () => {
    const requiredFields = Object.keys(formData);
    for (const field of requiredFields) {
      if (
        !formData[field as keyof typeof formData] ||
        formData[field as keyof typeof formData] === ""
      ) {
        return `Field ${field} harus diisi`;
      }

      const value = Number(formData[field as keyof typeof formData]);
      if (isNaN(value)) {
        return `Field ${field} harus berupa angka yang valid`;
      }
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!modelLoaded) {
      setError("Model belum siap. Tunggu sebentar...");
      return;
    }

    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const inputArr = [
        Number(formData.age),
        Number(formData.monthlyIncome),
        Number(formData.monthlyDebt),
        Number(formData.savings),
        Number(formData.netWorth),
        Number(formData.totalAssets),
        Number(formData.totalLiabilities),
        Number(formData.retirementYears),
      ];

      console.log("Input data:", inputArr);

      const result = await modelWrapper.predict(inputArr);
      console.log("Prediction result:", result);

      setHasilPrediksi(result);
    } catch (err) {
      console.error("Prediction error:", err);
      setError("Terjadi kesalahan saat melakukan prediksi. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-slate-100 text-gray-900 overflow-hidden">
      {showPopup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between space-x-4">
            <span>Ayo hitung kebutuhan pensiunmu!</span>
            <button
              onClick={() => setShowPopup(false)}
              className="text-green-700 font-bold text-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-4">
          Kalkulator Pensiun
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Hitung estimasi dana investasi yang kamu butuhkan untuk masa pensiun.
        </p>

        <div className="mb-4 text-center">
          {!modelLoaded && !error && (
            <div className="text-blue-600">Memuat model ML...</div>
          )}
          {modelLoaded && (
            <div className="text-green-600">✓ Model ML siap digunakan</div>
          )}
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="age"
            onChange={handleChange}
            value={formData.age}
            type="number"
            placeholder="Umur saat ini"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            min="0"
            step="1"
          />
          <input
            name="monthlyIncome"
            onChange={handleChange}
            value={formatRupiah(formData.monthlyIncome)}
            type="text"
            placeholder="Penghasilan bulanan (Rp)"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            min="0"
            step="1000"
          />
          <input
            name="monthlyDebt"
            onChange={handleChange}
            value={formData.monthlyDebt}
            type="number"
            placeholder="Pengeluaran cicilan bulanan (Rp)"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            min="0"
            step="1000"
          />
          <input
            name="savings"
            onChange={handleChange}
            value={formData.savings}
            type="number"
            placeholder="Saldo tabungan saat ini (Rp)"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            min="0"
            step="1000"
          />
          <input
            name="netWorth"
            onChange={handleChange}
            value={formData.netWorth}
            type="number"
            placeholder="Kekayaan bersih saat ini (Rp)"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            step="1000"
          />
          <input
            name="totalAssets"
            onChange={handleChange}
            value={formData.totalAssets}
            type="number"
            placeholder="Total aset (Rp)"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            min="0"
            step="1000"
          />
          <input
            name="totalLiabilities"
            onChange={handleChange}
            value={formData.totalLiabilities}
            type="number"
            placeholder="Total hutang (Rp)"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            min="0"
            step="1000"
          />
          <input
            name="retirementYears"
            onChange={handleChange}
            value={formData.retirementYears}
            type="number"
            placeholder="Tahun hidup setelah pensiun"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            min="1"
            step="1"
          />

          <button
            type="submit"
            disabled={!modelLoaded || isLoading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 px-4 rounded-md font-semibold transition-colors"
          >
            {isLoading ? "Menghitung..." : "Hitung Dana Pensiun"}
          </button>
        </form>

        {hasilPrediksi !== null && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Hasil Prediksi:
            </h3>
            <div className="text-2xl font-bold text-green-700">
              Estimasi dana pensiun yang dibutuhkan:
            </div>
            <div className="text-3xl font-bold text-green-800 mt-2">
              Rp {Math.round(hasilPrediksi).toLocaleString("id-ID")}
            </div>
            <p className="text-sm text-green-600 mt-2">
              *Hasil ini adalah estimasi berdasarkan model machine learning
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LayananPage;
