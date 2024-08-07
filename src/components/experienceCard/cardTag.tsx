interface TagDetails {
  name: string;
}

export default function Tag(props: TagDetails) {
  return (
    <span className="mr-1.5 text-nowrap rounded-2xl bg-slate-300 bg-opacity-15 px-2.5 py-1 text-xs text-slate-300">
      {props.name}
    </span>
  );
}
