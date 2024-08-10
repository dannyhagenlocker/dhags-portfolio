import { DocumentTitle } from "../utils/utils";

export default function NotFound() {
  DocumentTitle("404: This page is not found");
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="flex-ro m-auto flex w-min">
        <h1 className="mr-4 border-r-2 border-slate-400 pr-4 text-3xl font-medium">
          404
        </h1>
        <h1 className="my-auto min-w-max text-sm font-medium">
          This page could not be found
        </h1>
      </div>
    </div>
  );
}
