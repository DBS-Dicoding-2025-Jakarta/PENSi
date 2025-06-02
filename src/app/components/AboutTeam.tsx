import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
    name: string;
    position: string;
    imageUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageUrl }) => {
    return (
        <article
            className="bg-amber-50/30 rounded-2xl shadow-xl p-2 transition transform duration-300 ease-in-out hover:-translate-y-4 hover:shadow-lg"
            aria-label={`Profil ${name}`}
        >
            <figure className="w-full h-64 rounded-lg overflow-hidden p-4">
                <Image
                    src={imageUrl || "/api/placeholder/400/320"}
                    alt={name}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                />
            </figure>
            <figcaption className="p-6 text-center">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-green-400">{position}</p>
            </figcaption>
        </article>
    );
};

const AboutTeam = () => {
    const teamMembers = [
        {
            name: "Robby Jhony",
            position: "Front End Developer",
            imageUrl: "/people/download(1).jpeg"
        },
        {
            name: "Robby Jhony",
            position: "Front End Developer",
            imageUrl: "/people/download(2).jpeg"
        },
        {
            name: "Robby Jhony",
            position: "Front End Developer",
            imageUrl: "/people/download.jpeg"
        },
        {
            name: "Robby Jhony",
            position: "Front End Developer",
            imageUrl: "/people/images(1).jpeg"
        },
        {
            name: "Robby Jhony",
            position: "Front End Developer",
            imageUrl: "/people/images(2).jpeg"
        },
        {
            name: "Robby Jhony",
            position: "Front End Developer",
            imageUrl: "/people/images.jpeg"
        }
    ];

    return (
        <main id='tentang' className="min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto py-20 px-4 md:px-6">
                <header className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-green-400 font-medium mb-4">Tentang Kami</h2>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            We are the team of enthusiasts
                        </h1>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-gray-600 mt-7">
                            PENSi (Personalized Estimator for a Nice & Secure Income) merupakan sebuah platform berbasis web yang dirancang untuk membantu individu di Indonesia dalam merencanakan dana pensiun secara personal dan akurat. Platform ini bertujuan untuk memberikan estimasi kebutuhan dana pensiun yang disesuaikan dengan kondisi finansial, gaya hidup, dan tujuan pensiun masing-masing pengguna.
                        </p>
                    </div>
                </header>
            </section>

            <div className="absolute top-590 left-0 z-10">
                <Image
                    src="/vector/82.png"
                    alt="Bottom left decoration"
                    width={200}
                    height={300}
                />
            </div>

            {/* Team Section */}
            <section className="container mx-auto py-16 px-4 md:px-6">
                <header className="text-center mb-16">
                    <div className="inline-block">
                        <h2 className="text-4xl font-bold">Let&apos;s Meet Our Team</h2>
                        <span className="block h-1 w-60 bg-green-500 mt-2 mx-40"></span>
                    </div>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            position={member.position}
                            imageUrl={member.imageUrl}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AboutTeam;
