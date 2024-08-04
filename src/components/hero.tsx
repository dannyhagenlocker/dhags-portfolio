import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsChatDots,
  BsInfoLg,
} from "react-icons/bs";
import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  return (
    <div className="sticky top-0 flex max-h-screen basis-1/2 flex-col py-20">
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
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <p className="mt-4 max-w-xs leading-normal">
        I build websites... Picture perfect something idk what the hell i'm
        typing just because I need to fill this space ya know...
      </p>

      <div className="ml-1 mt-8 flex">
        <a
          href="https://www.linkedin.com/in/danny-hagenlocker"
          target="_blank"
          rel="noopener noreferrer"
          className="basis-10"
        >
          <BsLinkedin className="h-6 w-6 transition-colors hover:text-slate-200" />
        </a>
        <a
          href="https://github.com/dannyhagenlocker"
          target="_blank"
          rel="noopener noreferrer"
          className="basis-10"
        >
          <BsGithub className="h-6 w-6 transition-colors hover:text-slate-200" />
        </a>
        <a
          href="https://www.instagram.com/dannyhagenlocker/"
          target="_blank"
          rel="noopener noreferrer"
          className="basis-10"
        >
          <BsInstagram className="h-6 w-6 transition-colors hover:text-slate-200" />
        </a>
        <a
          href="mailto:dhagenlo@stanford.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="basis-8"
        >
          <BsChatDots className="h-6 w-6 transition-colors hover:text-slate-200" />
        </a>
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="basis-10"
        >
          <BsInfoLg className="h-6 w-6 transition-colors hover:text-slate-200" />
        </a>
      </div>
    </div>
  );
}
