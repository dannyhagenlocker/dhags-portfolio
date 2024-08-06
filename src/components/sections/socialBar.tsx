import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsChatDots,
  BsInfoLg,
} from "react-icons/bs";
import resume from "../../assets/Hagenlocker-Daniel_Resume copy.pdf";

export default function SocialBar() {
  return (
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
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <BsInfoLg className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
    </div>
  );
}
