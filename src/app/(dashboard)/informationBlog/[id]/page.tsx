import Image from "next/image";
import { notFound } from "next/navigation";
import Subscription from "@/app/components/Subscription";

// Simulasi data detail blog
const InformationCenter = [
  {
    id: "PERENCANAAN",
    title: "Mengapa Merencanakan Dana Pensiun itu Penting?",
    date: "02 Juni 2025",
    author: "Baliyun Taja",
    content: `
  Banyak orang menunda perencanaan pensiun hingga terlambat. Pelajari alasan pentingnya merencanakan pensiun sejak dini.

  Tanpa perencanaan yang matang, banyak individu menghadapi masa tua dengan keterbatasan finansial. Pensiun bukan hanya soal berhenti bekerja, tetapi juga bagaimana Anda bisa mempertahankan gaya hidup dan memenuhi kebutuhan dasar tanpa mengandalkan orang lain.

  Merencanakan dana pensiun sejak dini memberi Anda lebih banyak waktu untuk menabung, berinvestasi, dan memaksimalkan potensi pertumbuhan aset. Dengan strategi yang tepat, Anda bisa mencapai kebebasan finansial di usia tua, tanpa kekhawatiran akan kekurangan dana.

  Selain itu, memiliki dana pensiun yang cukup juga memberikan ketenangan pikiran. Anda tidak perlu mengkhawatirkan biaya kesehatan, kebutuhan sehari-hari, atau mendadak harus kembali bekerja karena kekurangan dana.

  Mulailah dengan menghitung kebutuhan dana pensiun Anda, evaluasi pengeluaran saat ini, dan buatlah rencana tabungan serta investasi secara konsisten. Masa depan yang tenang adalah hasil dari keputusan yang Anda buat hari ini.
`,

    quote: "Masa depan keuangan Anda dimulai hari ini, bukan besok.",
    imageHeader: "/people/blog1 (1).png",
    imageContent: "/people/blogw5.jpg",
  },

  {
    id: "BESTPRACTICES",
    title: "Cara Menentukan Target Dana Pensiun Anda",
    date: "12 Juni 2025",
    author: "Baliyun Taja",
    content: `
    Menentukan target dana pensiun adalah langkah penting dalam perencanaan keuangan jangka panjang. Tanpa target yang jelas, Anda berisiko kekurangan dana saat memasuki masa pensiun.

    Pertama, hitunglah berapa pengeluaran bulanan yang Anda butuhkan saat pensiun nanti. Biasanya, kebutuhan hidup saat pensiun berkisar antara 60-80% dari pengeluaran saat ini, tergantung gaya hidup yang diinginkan.

    Kedua, tentukan usia pensiun yang Anda rencanakan dan estimasi usia harapan hidup Anda. Selisih dari keduanya akan menunjukkan berapa lama dana pensiun harus mencukupi.

    Ketiga, perhitungkan inflasi. Nilai uang akan terus menurun seiring waktu, sehingga penting untuk menyesuaikan target dana dengan proyeksi inflasi tahunan.

    Keempat, evaluasi aset dan sumber pendapatan lainnya, seperti investasi, dana pensiun perusahaan, atau penghasilan pasif. Ini akan membantu Anda menyesuaikan target akhir sesuai kondisi keuangan Anda saat ini.

    Terakhir, gunakan kalkulator pensiun atau konsultasikan dengan perencana keuangan untuk mendapatkan estimasi yang lebih akurat. Semakin dini Anda mulai menghitung dan menyiapkan dana pensiun, semakin ringan beban finansial Anda ke depannya.
  `,
    quote: "Masa depan keuangan Anda dimulai hari ini, bukan besok.",
    imageHeader: "/people/blog1 (2).png",
    imageContent: "/people/blogw5.jpg",
  },

  {
    id: "FONDASIKEUANGAN",
    title: "Perbedaan Tabungan dan Investasi untuk Dana Pensiun",
    date: "02 Juni 2025",
    author: "Agus Mukti",
    content: `
    Dalam merencanakan dana pensiun, banyak orang masih bingung membedakan antara tabungan dan investasi. Padahal, keduanya memiliki fungsi dan karakteristik yang berbeda namun saling melengkapi.

    Tabungan adalah dana yang disimpan di bank dengan tingkat risiko rendah dan likuiditas tinggi. Cocok untuk kebutuhan jangka pendek atau dana darurat, namun pertumbuhan nilai uangnya relatif lambat karena bunga yang rendah dan tergerus inflasi.

    Sebaliknya, investasi bertujuan untuk pertumbuhan jangka panjang. Anda bisa memilih instrumen seperti saham, obligasi, reksa dana, atau properti. Meskipun ada risiko fluktuasi nilai, potensi imbal hasil investasi jauh lebih tinggi dibandingkan tabungan.

    Untuk dana pensiun, mengandalkan tabungan saja tidak cukup karena nilainya bisa tergerus inflasi. Investasi menjadi penting agar dana Anda berkembang dan mencukupi kebutuhan pensiun selama puluhan tahun.

    Kombinasi keduanya adalah strategi terbaik. Gunakan tabungan untuk kebutuhan jangka pendek dan stabilitas, sementara investasi difokuskan untuk pertumbuhan jangka panjang. Dengan memahami perbedaannya, Anda bisa mengelola dana pensiun secara lebih efektif dan berimbang.
  `,
    quote: "Masa depan keuangan Anda dimulai hari ini, bukan besok.",
    imageHeader: "/people/blog1 (3).png",
    imageContent: "/people/blogw5.jpg",
  },

  {
    id: "GAYAHIDUPPENSIUN",
    title: "Pensiun Nyaman di Indonesia - Apa yang Perlu Dipertimbangkan?",
    date: "02 Juni 2025",
    author: "Bambang Sutoyo",
    content: `
    Pensiun nyaman bukan hanya mimpi, tetapi sesuatu yang bisa direncanakan dan diwujudkan—terutama di Indonesia, dengan biaya hidup yang relatif terjangkau jika dikelola dengan baik. Namun, untuk mewujudkannya, ada beberapa faktor penting yang perlu dipertimbangkan.

    Pertama, lokasi pensiun. Kota besar seperti Jakarta dan Surabaya mungkin menawarkan fasilitas lengkap, namun juga memiliki biaya hidup tinggi. Sebaliknya, kota-kota kecil atau daerah wisata seperti Yogyakarta, Malang, atau Bali bisa menjadi alternatif yang lebih tenang dan hemat biaya—selama tetap mempertimbangkan akses ke layanan kesehatan.

    Kedua, biaya kesehatan. Seiring bertambahnya usia, kebutuhan medis meningkat. Pertimbangkan untuk memiliki asuransi kesehatan yang kuat atau dana khusus kesehatan dalam rencana pensiun Anda.

    Ketiga, gaya hidup. Apakah Anda ingin tetap aktif berkontribusi, memulai usaha kecil, atau menjalani hidup santai? Gaya hidup ini akan menentukan seberapa besar dana pensiun yang dibutuhkan.

    Keempat, dukungan sosial dan keluarga. Apakah Anda akan tinggal dekat anak dan cucu? Apakah Anda ingin tinggal di komunitas lansia atau mandiri? Lingkungan sosial sangat memengaruhi kenyamanan hidup saat pensiun.

    Terakhir, sumber pendapatan pasca pensiun. Selain dana pensiun utama, apakah Anda memiliki penghasilan pasif seperti sewa properti, dividen, atau bisnis kecil? Pendapatan tambahan akan sangat membantu menjaga stabilitas keuangan.

    Dengan mempertimbangkan semua hal di atas secara matang, Anda bisa membangun masa pensiun yang nyaman, aman, dan sesuai dengan gaya hidup yang diimpikan.
  `,
    quote: "Masa depan keuangan Anda dimulai hari ini, bukan besok.",
    imageHeader: "/people/blog1 (4).png",
    imageContent: "/people/blogw5.jpg",
  },
];

export default async function BlogDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = InformationCenter.find((item) => item.id === params.id);

  if (!post) return notFound();

  const paragraphs = post.content
    .trim()
    .split("\n")
    .filter((p) => p.trim().length > 0);

  return (
    <>
      <main className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-gray-800">
        <p className="text-sm text-gray-500 mb-2">Artikel</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug text-gray-900">
          {post.title}
        </h1>

        <div className="text-sm text-gray-500 mb-6">
          <span>{post.date}</span> · <span>oleh {post.author}</span>
        </div>

        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.imageHeader}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {paragraphs.map((para, idx) => (
          <p key={idx} className="mb-6 text-lg leading-relaxed">
            {para}
          </p>
        ))}

        <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700 mb-6 text-base">
          “{post.quote}”
        </blockquote>

        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.imageContent}
            alt={post.id}
            fill
            className="object-cover"
          />
        </div>
      </main>

      <Subscription />
    </>
  );
}
