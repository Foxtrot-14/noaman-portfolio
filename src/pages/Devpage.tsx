import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ProjectsList from "../services/getProjects";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export default function Devpage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await ProjectsList();
        setProjects(data);
      } catch (err) {
        const firebaseErr = err as FirebaseError;
        setError(firebaseErr.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="flex flex-col h-full w-full items-center p-10 overflow-x-hidden relative">
      <button
        onClick={() => navigate("/stack")}
        className="fixed bottom-10 right-8 flex items-center gap-2 px-4 py-2 border border-[#0F0] text-[#0F0] rounded hover:bg-[#0F0]/10 transition bg-black"
      >
        My Stack <FaArrowRight />
      </button>

      <header>
        <h1 className="font-bold p-5 rounded-lg bg-black text-[#0F0] font-mono sm:text-4xl text-center mb-10">
          <Typewriter
            words={[
              "Every great solution starts with one instinct: I can build this."
            ]}
            typeSpeed={50}
          />
        </h1>
      </header>

      {error && <p className="text-red-500">{error}</p>}

      <section
        aria-label="Project List"
        className="flex flex-col gap-5 w-full max-w-4xl"
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col sm:flex-row border border-[#0F0] rounded-lg bg-black shadow-md hover:bg-[#0F0]/10 transition cursor-pointer overflow-hidden"
          >
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="w-full sm:w-1/3 h-48 sm:h-auto object-cover border-b sm:border-b-0 sm:border-r border-[#0F0]"
            />

            <div className="flex flex-col justify-between p-6 flex-1">
              <header>
                <h2 className="text-2xl font-bold mb-2 text-[#0F0]">
                  {project.name}
                </h2>
              </header>
              <p className="text-lg mb-3 text-[#0F0]">{project.description}</p>
              <footer>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F0] underline hover:text-white"
                >
                  View Project →
                </a>
              </footer>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}



