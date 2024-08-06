import ImageJackbox from "../components/imageJackbox";
import Hero from "../components/sections/hero";
import Infograph from "../components/sections/infograph";
export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-20 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="fixed left-0 top-0 m-20">
        <ImageJackbox />
      </div>
      <div className="flex justify-center gap-4">
        <Hero></Hero>
        <Infograph></Infograph>
      </div>
    </div>
  );
}
