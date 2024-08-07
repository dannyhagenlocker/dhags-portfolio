import TypewriterComponent from "typewriter-effect";
import SocialBar from "../socialBar";
import Lanyard from "../lanyard.js";

export default function Hero() {
  return (
    <div className="pointer-events-none sticky top-0 z-10 flex max-h-screen basis-1/2 flex-col pt-16">
      {/*<div className="absolute -left-5 top-0 -z-10 hidden h-full w-full opacity-0 transition-all md:block lg:opacity-100">
        <Lanyard />
  </div>*/}
      <div className="pointer-events-auto rounded-lg border border-slate-400 border-opacity-0 p-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 drop-shadow-md transition-all duration-300 hover:-translate-y-1 hover:text-slate-400 sm:text-5xl">
          <a href="/">Danny Hagenlocker</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl">
          <TypewriterComponent
            options={{
              delay: 50,
              deleteSpeed: "natural",
              strings: [
                "Student at Stanford 🌲",
                "Studying EE + CS 💻",
                "NASA Research Intern 🚀",
                "MITES Semester Participant 🦫",
                "FIRST Robotics Alumnus 🤖",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <SocialBar />
      </div>
    </div>
  );
}
