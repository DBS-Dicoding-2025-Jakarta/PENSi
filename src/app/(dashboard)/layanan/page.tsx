"use client";
import React, { useState, useEffect } from "react";
import Subscription from "@/app/components/Subscription";

const LayananPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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

  const unformatRupiah = (value: string) => value.replace(/\./g, "");

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const unformattedValue =
      name === "monthlyIncome" ||
      name === "monthlyDebt" ||
      name === "savings" ||
      name === "netWorth" ||
      name === "totalAssets" ||
      name === "totalLiabilities"
        ? unformatRupiah(value)
        : value;

    setFormData((prev) => ({ ...prev, [name]: unformattedValue }));
    setError("");
  };

  const validateInput = () => {
    const requiredFields = Object.keys(formData);
    for (const field of requiredFields) {
      const value = formData[field as keyof typeof formData];
      if (!value || value === "") return `Field ${field} harus diisi`;
      if (isNaN(Number(value)))
        return `Field ${field} harus berupa angka yang valid`;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

      const response = await fetch(
        "https://backend-pensi-production-d84e.up.railway.app/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputData: inputArr }),
        }
      );

      if (!response.ok) throw new Error("Gagal menghubungi server prediksi");

      const result = await response.json();
      setHasilPrediksi(result.prediction);
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
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-primary border border-primary text-primary px-6 py-3 rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between space-x-4">
            <span className="text-white">Ayo hitung kebutuhan pensiunmu!</span>
            <button
              onClick={() => setShowPopup(false)}
              className="text-white font-bold text-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-25">
        <h1 className="text-3xl font-bold text-center mb-4">
          Kalkulator Pensiun
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Hitung estimasi dana investasi yang kamu butuhkan untuk masa pensiun.
        </p>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Umur saat ini", name: "age", type: "number" },
            {
              label: "Penghasilan bulanan (Rp)",
              name: "monthlyIncome",
              type: "text",
            },
            {
              label: "Pengeluaran cicilan bulanan (Rp)",
              name: "monthlyDebt",
              type: "text",
            },
            {
              label: "Saldo tabungan saat ini (Rp)",
              name: "savings",
              type: "text",
            },
            {
              label: "Kekayaan bersih saat ini (Rp)",
              name: "netWorth",
              type: "text",
            },
            { label: "Total aset (Rp)", name: "totalAssets", type: "text" },
            {
              label: "Total hutang (Rp)",
              name: "totalLiabilities",
              type: "text",
            },
            {
              label: "Tahun hidup setelah pensiun",
              name: "retirementYears",
              type: "number",
            },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block font-medium text-gray-700 mb-1"
              >
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                value={
                  type === "text"
                    ? formatRupiah(formData[name as keyof typeof formData])
                    : formData[name as keyof typeof formData]
                }
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-primary"
                min={type === "number" ? 0 : undefined}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 px-4 rounded-md font-semibold transition-colors"
          >
            {isLoading ? "Menghitung..." : "Hitung Dana Pensiun"}
          </button>
        </form>

        {hasilPrediksi !== null && (
          <div className="mt-8 p-6 bg-primary border border-primary text-white rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Hasil Prediksi:</h3>
            <div className="text-2xl font-bold">
              Estimasi dana pensiun yang dibutuhkan:
            </div>
            <div className="text-3xl font-bold mt-2">
              Rp {Math.round(hasilPrediksi).toLocaleString("id-ID")}
            </div>
            <p className="text-sm mt-2">
              *Hasil ini adalah estimasi berdasarkan model
            </p>
          </div>
        )}
      </div>
      <Subscription />
    </section>
  );
};

export default LayananPage;
