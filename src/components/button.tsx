interface ButtonData {
  text: string;
  xlink: string;
}

export default function Button(props: ButtonData) {
  return (
    <a
      className="group inline-flex items-center font-semibold leading-tight text-slate-200"
      href={props.xlink}
      rel="noopener norefferer"
      target="_blank"
    >
      <span>
        <span className="border-b border-transparent pb-px transition group-hover:border-slate-100 motion-reduce:transition-none">
          {props.text}
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
  );
}
