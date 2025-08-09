import { Typewriter } from "react-simple-typewriter";

export default function DSApage() {
  const handleOpenLeetCode = () => {
    window.open("https://leetcode.com/u/Foxtrot-14/", "_blank");
  };
  return (
    <section className="flex flex-col h-full w-full items-center p-5">
      <h1 className="font-bold text-lg p-5 rounded-lg bg-black text-[#0F0] font-mono sm:text-4xl text-center mb-10">
        <Typewriter words={["The First Principles Approach"]} typeSpeed={50} />
      </h1>
      <p className="font-bold text-center w-none text-sm p-2 rounded-lg text-[#0F0] bg-black font-mono sm:text-xl sm:w-3/4 fixed bottom-10">
        First principles thinking helps me shift from being a "user" of existing
        solutions to a "creator" of new ones.
      </p>
      <section className="flex flex-col gap-5 mt-20">
        <article
          className="bg-black p-5 w-auto flex gap-5 justify-center items-center rounded-lg max-h-[150px] hover:cursor-pointer hover:shadow-none shadow-white shadow-inner"
          onClick={handleOpenLeetCode}
        >
          <img
            src="/assets/LeetCode_logo_black.png"
            alt="leet-code"
            className="h-[60px] w-[60px] bg-white rounded-full object-cover"
          />
          <p className="font-mono text-[#0F0] font-bold text-sm sm:text-base">
            LeetCode <br />
            Language: C++
          </p>
        </article>
     </section>
    </section>
  );
}
