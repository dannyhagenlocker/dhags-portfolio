import { DocumentTitle } from "../utils/utils";
import "../components/loader.css";

export default function UnderConstruction() {
  DocumentTitle("🚧 This page is under construction");
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="m-auto flex w-min flex-row">
        <div className="loader mr-4 w-min border-r-2 border-slate-400 pr-4" />
        <h1 className="my-auto min-w-max text-sm font-medium">Coming Soon!</h1>
      </div>
    </div>
  );
}