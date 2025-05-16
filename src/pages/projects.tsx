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
          title="Oxy (FRC 2024)"
          description="Final season. So so so close to winning a regional..."
          image="projects/frc2024/cover.png"
          tags={["High School", "Robotics"]}
          xlink="/under-construction"
        />
        <ProjectCard
          title="Stormy (FRC 2023)"
          description="First time going to Houston."
          image="projects/frc2023/cover.png"
          tags={["High School", "Robotics"]}
          xlink="/under-construction"
        />
        <ProjectCard
          title="Candis (FRC 2022)"
          description="My first season of robotics."
          image="projects/frc2022/cover.png"
          tags={["High School", "Robotics"]}
          xlink="/under-construction"
        />

        <ProjectCard
          title="Water Loss Prediction"
          description="An automated tool to analyze ICESat-2 data with a machine learning model that predicts future water level changes for better resource planning."
          image="projects/nasa/cover.png"
          tags={["High School", "Environmental", "ML", "NASA"]}
          xlink="/under-construction"
        />
        <ProjectCard
          title="RecycleRight"
          description="An interactive recycling app that uses AR stickers, voice and image recognition, and real-time data to help users identify recyclables, find nearby centers, and adopt eco-friendly habits."
          image="projects/recycle_right/cover.png"
          tags={["High School", "Environmental", "App Dev"]}
          xlink="/under-construction"
        />

        <ProjectCard
          title="Inside the Box"
          description="Inside The Box is a patented, environmentally friendly alternative to traditional electronic packaging, addressing the ecological issues associated with current materials."
          image="projects/inside_the_box/cover.png"
          tags={["High School", "Environmental"]}
          xlink="/under-construction"
        />
      </div>
    </div>
  );
}
