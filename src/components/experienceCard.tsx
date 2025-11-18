import { getImageUrl } from "../utils/utils";

interface ExperienceCardData {
  title: string;
  company?: string;
  description?: string;
  dates?: string;
  tags?: string[];
  image?: string;
  xlink?: string;
}

interface TagDetails {
  name: string;
}

export default function ExperienceCard(props: ExperienceCardData) {
  return (
    <a href={props.xlink} target="_blank" rel="noopener noreferrer">
      <section className="mb-2 max-w-full rounded-lg bg-slate-50 bg-opacity-0 p-4 backdrop-blur transition-all hover:bg-opacity-5 hover:shadow-lg hover:ring-1 hover:ring-black/10">
        <div className="flex max-w-lg">
          <div className="flex flex-col">
            <div className="mr-4 w-20 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              <img
                src={getImageUrl(props.image)}
                className="max-w-full select-none rounded-md"
                draggable={false}
              ></img>
            </div>
            {props.dates && (
              <div className="mr-4 mt-4 w-20 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                <p>{props.dates}</p>
              </div>
            )}
          </div>
          <div className="flex-grow gap-5 text-left">
            <p className="font-bold text-slate-200">{props.title}</p>
            <p className="font-semibold">{props.company}</p>

            <p className="mt-1 text-sm">{props.description}</p>
            {props.tags && props.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-y-2">
                {props.tags.map((tag) => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </a>
  );
}

function Tag(props: TagDetails) {
  return (
    <span className="mr-1.5 text-nowrap rounded-2xl bg-slate-300 bg-opacity-15 px-2.5 py-1 text-xs text-slate-300">
      {props.name}
    </span>
  );
}
