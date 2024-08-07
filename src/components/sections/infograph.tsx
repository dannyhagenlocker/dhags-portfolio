import ExperienceCard from "../experienceCard/experienceCard";

export default function Infograph() {
  return (
    <div className="flex h-[100rem] basis-1/2 flex-col py-20">
      <h1 className="mb-6 text-base font-bold uppercase tracking-widest text-slate-200">
        Experiences
      </h1>
      <ExperienceCard
        title="Team President + Software Lead"
        company="FIRST Robotics"
        tags={[
          "Java",
          "Physics Simulation",
          "Git",
          "Motion Control",
          "Path Planning",
        ]}
        dates="Jan. 2022 - May 2024"
        description="Hola Broskuiasdf;lak a;laksjdfa a;lskdfjs sldkjfslkdjf a a sdflkjs dkljf s asdflkj asdf lkja asdflkjasdf  asdflkajdsf lkajsdf asdflk asdflk alskdjf laskdjf alskdjfa lskdfasdlkfja sdf"
      />
    </div>
  );
}
