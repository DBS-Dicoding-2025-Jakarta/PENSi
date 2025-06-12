"use client";
import React from "react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  position: string;
  imagePath: string; // Ganti dari imageUrl ke imagePath lokal
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  imagePath,
}) => {
  return (
    <article
      className="bg-amber-50/30 rounded-2xl shadow-xl p-2 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
      aria-label={`Profil ${name}`}
    >
      <figure className="w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={imagePath}
          alt={name}
          className="w-full h-full object-cover"
          width={400}
          height={320}
        />
      </figure>
      <figcaption className="p-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-primary">{position}</p>
      </figcaption>
    </article>
  );
};

const AboutTeam = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Nicholas Anaya Putra",
      position: "Machine Learning",
      imagePath: "/people/nico.jpeg",
    },
    {
      name: "Qaila Casandra",
      position: "Machine Learning",
      imagePath: "/people/qaila.jpeg",
    },
    {
      name: "Tika Putri Marsanti",
      position: "Machine Learning",
      imagePath: "/people/tika.jpeg",
    },
    {
      name: "Rinaldi Mulya Pratama",
      position: "Front End Developer",
      imagePath: "/people/rinaldi.jpeg",
    },
    {
      name: "Khairul Fahmi",
      position: "Front End Developer",
      imagePath: "/people/fahmi.jpeg",
    },
    {
      name: "Muhammad Baliyun Taja",
      position: "Front End Developer",
      imagePath: "/people/baliyun.jpeg",
    },
  ];

  return (
    <main id="tentang" className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-8 md:px-6">
        <header className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="w-full md:w-1/2 text-start">
            <h2 className="text-primary font-medium mb-2">Tentang Kami</h2>
            <h1 className="text-4xl md:text-5xl font-bold">
              We are the team of enthusiasts
            </h1>
          </div>
          <div className="w-full md:w-1/2 text-start">
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              PENSi (Personalized Estimator for a Nice & Secure Income)
              merupakan platform berbasis web yang membantu individu di
              Indonesia merencanakan dana pensiun secara personal dan akurat.
            </p>
          </div>
        </header>
      </section>

      {/* Decorative Image */}
      <div className="absolute -bottom-12 left-0 z-0">
        <Image
          src="/vector/82.png"
          alt="Bottom left decoration"
          width={100}
          height={300}
        />
      </div>

      {/* Team Section */}
      <section className="relative z-10 container mx-auto py-16 px-4 md:px-6">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let&apos;s Meet Our Team
          </h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutTeam;
