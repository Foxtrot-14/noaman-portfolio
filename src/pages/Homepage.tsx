import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "../routes/hooks/use-router";
export default function Homepage() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(`/${path}`);
  };
  return (
    <section className="flex flex-col h-full w-full justify-center items-center">
      <h1 className="font-bold text-4xl p-5 mb-10 rounded-lg bg-black text-[#0F0] font-mono text-center max-w-max">
        Hello!, Welcome
      </h1>
      <section className="flex flex-col sm:flex-row gap-6 sm:gap-4 w-full px-4 sm:px-0 justify-center text-[#0F0] font-mono">
        <article className="flex flex-col items-center overflow-hidden mb-6 sm:mb-0">
          <img
            src="/assets/Lead.JPG"
            alt="Lead"
            className="w-48 h-48 sm:w-24 sm:h-24 md:w-48 md:h-48 object-cover object-top rounded-full"
          />
        </article>
        <article className="rounded-lg bg-black flex flex-col items-center overflow-hidden max-w-lg p-5 max-h-max gap-4">
          <h1 className="font-bold text-2xl text-center">
            <Typewriter words={["I'm Noaman Ahmed"]} typeSpeed={100} />
          </h1>
          <p className="font-bold text-center">
            My fingers dance on the keyboard a little bit.
          </p>
          <article className="flex gap-5">
            <button
              className="bg-red-600 p-2 rounded-full font-bold text-xl text-white hover:shadow-md hover:shadow-white"
              onClick={() => handleNavigate("dev")}
            >
              Dev
            </button>
            <button
              className="bg-blue-800 p-2 rounded-full font-bold text-xl text-white hover:shadow-md hover:shadow-white"
              onClick={() => handleNavigate("dsa")}
            >
              DSA
            </button>
          </article>
        </article>
      </section>
    </section>
  );
}
