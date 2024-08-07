import TypewriterComponent from "typewriter-effect";
import SocialBar from "../socialBar";
import Lanyard from "../lanyard.js";

export default function Hero() {
  return (
    <div className="sticky top-0 flex max-h-screen basis-1/2 flex-col pt-20">
      <h1 className="font-inter text-4xl font-bold tracking-tight text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:text-slate-400 sm:text-5xl">
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
      <Lanyard />
    </div>
  );
}
