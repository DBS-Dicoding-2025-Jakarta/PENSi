import { notFound } from "next/navigation";
import { Metadata } from "next";

interface BlogContent {
    [key: string]: {
        title: string;
        content: string;
    };
}

const blogs: BlogContent = {
    PERENCANAAN: {
        title: "Mengapa Merencanakan Dana Pensiun Itu Penting?",
        content: "Konten lengkap untuk perencanaan pensiun...",
    },
    BESTPRACTICES: {
        title: "Cara Menentukan Target Dana Pensiun Anda",
        content: "Konten lengkap untuk best practices...",
    },
    FONDASIKEUANGAN: {
        title: "Perbedaan Tabungan dan Investasi untuk Dana Pensiun",
        content: "Konten lengkap fondasi keuangan...",
    },
    GAYAHIDUPPENSIUN: {
        title: "Pensiun Nyaman di Indonesia",
        content: "Konten lengkap gaya hidup pensiun...",
    },
};

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blog = blogs[params.id.toUpperCase()];
    return {
        title: blog ? blog.title : "Blog Tidak Ditemukan",
    };
}

export default function BlogDetailPage({ params }: Props) {
    const blog = blogs[params.id.toUpperCase()];

    if (!blog) return notFound();

    return (
        <main className="container mx-auto px-4 py-10 mt-10">
            <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
            <article className="prose">{blog.content}</article>
        </main>
    );
}
