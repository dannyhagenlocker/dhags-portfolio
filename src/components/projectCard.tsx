import { getImageUrl } from "../utils/utils";

interface ProjectCardData {
  title: string;
  description?: string;
  tags?: string[];
  image?: string;
  xlink?: string;
}

interface TagDetails {
  name: string;
}

export default function ProjectCard(props: ProjectCardData) {
  return (
    <a
      href={props.xlink}
      rel="noopener noreferrer"
      className="flex max-w-full flex-col rounded-lg border border-white/10 bg-white/5 shadow-md backdrop-blur transition hover:bg-white/10 hover:shadow-lg hover:ring-1 hover:ring-white/10"
    >
      {props.image && (
        <img
          src={getImageUrl(props.image)}
          alt={props.title}
          className="select-none rounded-t-lg"
          draggable={false}
        />
      )}

      <div className="flex flex-grow flex-col p-5">
        <h5 className="text-xl font-bold tracking-tight text-white">
          {props.title}
        </h5>

        {props.description && (
          <p className="mt-2 text-sm font-normal text-slate-300">
            {props.description}
          </p>
        )}

        {props.tags && props.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {props.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

function Tag(props: TagDetails) {
  return (
    <span className="text-nowrap rounded-2xl bg-slate-300 bg-opacity-15 px-2.5 py-1 text-xs text-slate-300">
      {props.name}
    </span>
  );
}
