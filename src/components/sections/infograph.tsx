import ExperienceCard from "../experienceCard";

export default function Infograph() {
  return (
    <div className="z-10 flex flex-col pb-20 md:basis-1/2 md:pt-20">
      <div>
        <h1 className="sticky top-0 z-50 rounded py-4 text-base font-bold uppercase tracking-widest text-slate-200 backdrop-blur-lg">
          About Me
        </h1>
        <div className="mb-8">
          <AboutMe />
        </div>
      </div>

      <div>
        <h1 className="sticky top-0 z-50 mb-4 py-4 text-base font-bold uppercase tracking-widest text-slate-200 backdrop-blur-md">
          Experiences
        </h1>
        <div className="mb-8">
          <Experience />
        </div>
      </div>

      <h1 className="mb-4 text-base font-bold uppercase tracking-widest text-slate-200">
        Projects
      </h1>
      <div>
        <Projects />
      </div>
    </div>
  );
}

{/* prettier-ignore */}
function AboutMe() {
  return (
    <>
      <p>
        Hey, glad you’re here! My name is Danny and I am a rising freshman
        at&nbsp;
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.stanford.edu/"
        >
          Stanford University&nbsp;
        </a>
        studying Electrical Engineering and Computer Science. Broadly speaking,
        I am interested in web dev, robotics, machine learning, aerospace, and
        working through problems.
      </p>
    </>
  );
}

function Experience() {
  return (
    <>
      <ExperienceCard
        title="Research Intern"
        company="NASA + UT Austin"
        tags={[
          "Python",
          "Machine Learning",
          "Data Parsing/Automation",
          "Climate Science",
          "Remote Sensing",
          "Jupyter",
        ]}
        dates="Jun 2022 - Aug 2022"
        description="Wrote Python scripts to process TBs of geospatial data from ICESat-2 and LandSat-8 satellites. Built Recurrent Neural Network predicting temporal changes in a water reservoir’s capacity to yield timely and precise insights into potential water shortage events. Presented research at the American Geophysical Union (AGU) Fall Meeting 2022."
        image="logos/nasa_logo.png"
        xlink="https://www.youtube.com/watch?v=7xi6A9HeBX8"
      />
      <ExperienceCard
        title="Team President + Software Lead"
        company="FIRST Robotics"
        tags={[
          "Java",
          "Physics Simulation",
          "Git",
          "Motion Control",
          "Path Planning",
          "3D-Modeling",
        ]}
        dates="Jan 2022 - May 2024"
        description="Led team in designing/programming robots for FRC World Championship, created engineering documentation, and helped grow the team from 20 to 45 students"
        image="logos/first_logo.png"
        xlink="https://github.com/BBR8ERS-FRC-TEAM5557"
      />
      <ExperienceCard
        title="Researcher/Participant"
        company="MITES Semester"
        tags={[
          "Julia",
          "Machine Learning",
          "Convolutional Nerual Nets",
          "Science Writing",
          "Git",
        ]}
        dates="Jun 2023 - Dec 2023"
        description="Led research project on convolutional neural networks, published science writing article about remote sensing, presented findings at MIT symposium"
        image="logos/mites_logo.png"
        xlink="https://github.com/dannyhagenlocker/cnn-digit-detection"
      />
    </>
  );
}

function Projects() {
  return (
    <>
      <ExperienceCard
        title="Inside the Box (US 20220324625)"
        company="Patented Sustainable Packaging Startup"
        tags={["Physics Simulation", "Fusion 360", "Climate Science"]}
        description="Utility Patented packaging alternative for consumer electronics sourced entirely from agricultural waste (corn starch foam and wheat straw paper). Performed materials research, simulations, and analysis to determine optimal materials and box design. Awards include Dell Technologies: Conrad Challenge Winner and Blue Ocean Entrepreneurship
Competition (2nd Place)"
        image="logos/insidethebox_logo.jpg"
        xlink="https://www.youtube.com/watch?v=XtEfn8ugU1E"
      />
      <ExperienceCard
        title="RecycleRight"
        company="iOS App"
        tags={["Swift", "XCode", "Image Detection", "Augmented Reality"]}
        description="iOS apps for biogas digestion monitoring and waste contamination prevention in South Florida. Internationally recognized at entrepreneurship competitions for climate impact (Paradigm Challenge & Conrad Challenge)."
        image="logos/recycleright_logo.png"
        xlink="https://www.youtube.com/watch?v=oEOv32Nhnbc"
      />

      <div className="mt-8">
        <a
          className="group inline-flex items-center font-semibold leading-tight text-slate-200"
          href="/projects"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View All Projects
            </span>
            <span className="whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </>
  );
}
