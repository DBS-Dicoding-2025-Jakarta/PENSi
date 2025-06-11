"use client";
import React from "react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  imageUrl,
}) => {
  return (
    <article
      className="bg-amber-50/30 rounded-2x2 shadow-xl p-2 transition transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
      aria-label={`Profil ${name}`}
    >
      <figure className="w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={imageUrl || "/api/placeholder/400/320"}
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
  const teamMembers = [
    {
      name: "Nicholas Anaya Putra",
      position: "Machine Learning",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008106-463ef4dd-ea1a-4079-8913-c582d90efa39.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mjg5NzMsIm5iZiI6MTc0OTYyODY3MywicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MTA2LTQ2M2VmNGRkLWVhMWEtNDA3OS04OTEzLWM1ODJkOTBlZmEzOS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMDc1NzUzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9N2VjMGNmNDM4ZmU4MmYyN2RhZWFiY2E4MGZjMmM0MzVkMjFiNmYwNTBmYWRmNDU5NTMwMTgyZTJiODkzZGZlZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.59s-0hpcW6VUwjsK1kxPg3pt1ZtzPyLHiH2zY9t5TkQ",
    },
    {
      name: "Qaila Casandra",
      position: "Machine Learning",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008088-b8ef9c63-a254-4f4d-8a8e-ec676f44afa0.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mjg5NzMsIm5iZiI6MTc0OTYyODY3MywicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MDg4LWI4ZWY5YzYzLWEyNTQtNGY0ZC04YThlLWVjNjc2ZjQ0YWZhMC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMDc1NzUzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZDc5ZTE0YWI0ZDIwZDM0ZjFlNzFmMGYwYTY5N2U0OWY3N2ExYTI3NGRiN2IwNTU2MTE2MTM1ZGY5ZWE4OGYyNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.cwqzaJdrwG6-0C7UyU2aodeBY4cZRbe8fNhU_jyI_zc",
    },
    {
      name: "Tika Putri Marsanti",
      position: "Machine Learning",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008066-9628f9bf-f2e4-49f5-bfe3-c459c8f51855.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mjg5NzMsIm5iZiI6MTc0OTYyODY3MywicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MDY2LTk2MjhmOWJmLWYyZTQtNDlmNS1iZmUzLWM0NTljOGY1MTg1NS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMDc1NzUzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NWM1YTFlZDUzNzUwMWNkNzUxYjMyNmY5ZGMxNGYzYWI2MjlhMTA5YWNhODk0N2I3MTI1ZTM1MmYyZmJmMzNhYyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.jRsQI6t952e9g-F_prvSHc7IcfRoTlo2JOCG37o5nh4",
    },
    {
      name: "Rinaldi Mulya Pratama",
      position: "Front End Developer",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008048-98741083-8483-41d6-9073-4f0b0e131d2d.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mjg4MDMsIm5iZiI6MTc0OTYyODUwMywicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MDQ4LTk4NzQxMDgzLTg0ODMtNDFkNi05MDczLTRmMGIwZTEzMWQyZC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMDc1NTAzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZWI2YTg4ZTYxOTc1YjA1OWNmZDUxMjc4ZTJmYjU5MDRiMjg5MGM5ZWI2MGY4OTZlZjEyZTg0MWE5MmI4OTQ3ZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.qIcKL3RGpZ9zzcR5xboA9W6feEHps1EAuHc7SjpirIU",
    },
    {
      name: "Khairul Fahmi",
      position: "Front End Developer",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008683-d13bb812-f9eb-4b0a-abad-8a0430899938.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mjg5NzMsIm5iZiI6MTc0OTYyODY3MywicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4NjgzLWQxM2JiODEyLWY5ZWItNGIwYS1hYmFkLThhMDQzMDg5OTkzOC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMDc1NzUzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NTdkNmNiZTc2ZWUzNjI0ZGM3MjJmNmZkZDg3YWZhMDViZmRjOTgwZGVkMzFjM2U2OTRmNDVlMzdkYTUxNWY1NCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.x0iAGUqbttBw_9F_YDXmtiikT6enKSM_bSq7yLSjjy8",
    },
    {
      name: "Muhammad Baliyun Taja",
      position: "Front End Developer",
      imageUrl:
        "https://private-user-images.githubusercontent.com/129813285/453810750-64916890-6443-479d-a970-3b31addecff6.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mjg4OTMsIm5iZiI6MTc0OTYyODU5MywicGF0aCI6Ii8xMjk4MTMyODUvNDUzODEwNzUwLTY0OTE2ODkwLTY0NDMtNDc5ZC1hOTcwLTNiMzFhZGRlY2ZmNi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYxMVQwNzU2MzNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMDY2M2IxYWMyYTIyODJkMjg3ZDQ3ZTBkNDk4NmUwODg4ZGY5MTZiNjJmYjc2YTk1ZjNjOTk1N2RkNmQ0OWViJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XgwT6YcJCN5c50wcUTQy_NczaXbW43V_1CLT5yyCNJw",
    },
  ];

  return (
    <main id="tentang" className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-8 md:px-6">
        <header className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="w-full md:w-1/2 text-start md:text-left">
            <h2 className="text-primary font-medium mb-2">Tentang Kami</h2>
            <h1 className="text-4xl md:text-5xl font-bold">
              We are the team of enthusiasts
            </h1>
          </div>
          <div className="w-full md:w-1/2 text-start md:text-left">
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              PENSi (Personalized Estimator for a Nice & Secure Income)
              merupakan sebuah platform berbasis web yang dirancang untuk
              membantu individu di Indonesia dalam merencanakan dana pensiun
              secara personal dan akurat. Platform ini bertujuan untuk
              memberikan estimasi kebutuhan dana pensiun yang disesuaikan dengan
              kondisi finansial, gaya hidup, dan tujuan pensiun masing-masing
              pengguna.
            </p>
          </div>
        </header>
      </section>

      {/* Decorative Image (optional position tweaking) */}
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
          <div className="h-1 w-32 md:w-60 bg-primary mt-2 mx-auto rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
