import React from "react";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiKubernetes, SiPostgresql, SiGo, SiDjango, SiGin } from "react-icons/si";

export default function MyStack() {
  const languages = [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Go", icon: <SiGo className="text-cyan-400" /> },
    { name: "JavaScript / Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  ];

  const frameworks = [
    { name: "Django", icon: <SiDjango className="text-green-600" /> },
    { name: "Gin", icon: <SiGin className="text-sky-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
  ];

  const tools = [
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
    { name: "Database Design", icon: <FaDatabase className="text-gray-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  ];

  const Section = ({ title, items }: { title: string; items: { name: string; icon: React.ReactNode }[] }) => (
    <div className="w-full max-w-4xl mb-10 bg-black p-5">
      <h2 className="text-2xl font-semibold mb-6 text-[#0F0] font-mono border-b border-[#0F0] pb-2">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3">
            <div className="text-5xl">{tech.icon}</div>
            <span className="font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen w-full flex flex-col items-center px-6 py-12 text-white">
      <h1 className="font-bold text-4xl p-5 mb-10 text-[#0F0] font-mono text-center max-w-max bg-black">
        My Stack
      </h1>
      <Section title="Languages" items={languages} />
      <Section title="Frameworks & Libraries" items={frameworks} />
      <Section title="Tools & Platforms" items={tools} />
    </section>
  );
}


