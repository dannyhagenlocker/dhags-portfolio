import ProjectCard from "../components/projectCard";
import { DocumentTitle } from "../utils/utils";

export default function ProjectsPage() {
  DocumentTitle("Projects | Danny Hagenlocker");

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24">
      <h1 className="mb-8 ml-4 mt-8 text-4xl font-bold text-slate-200 sm:text-5xl">
        Projects
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="AI Music VST"
          description="A cloud-inferred MIDI plugin that uses neural audio synthesis for generative composition."
          image="projects/aimusic.png"
          tags={["VST", "AI", "Music", "Cloud Inference"]}
          xlink="https://example.com/aimusic"
        />
        <ProjectCard
          title="Fountain Hopper Simulator"
          description="6DOF simulator to test thrust vector control, wind, fuel drain, and sensor noise for SSI rocket."
          image="projects/fountainhopper.png"
          tags={["Rocketry", "Simulation", "Controls", "TVC"]}
          xlink="https://ssi.stanford.edu"
        />
        <ProjectCard
          title="RecycleRight"
          description="An image recognition tool that helps Miami-Dade residents identify recyclable materials."
          image="projects/recycleright.png"
          tags={["Computer Vision", "Recycling", "Civic Tech"]}
          xlink="https://github.com/recycleright"
        />
        {/* Add more ProjectCard entries as needed */}
      </div>
    </div>
  );
}
