import ImageJackbox from "../components/imageJackbox";
import Lanyard from "../components/lanyard";
import Hero from "../components/sections/hero";
import Infograph from "../components/sections/infograph";
export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-0 font-sans md:px-12 md:py-0 lg:px-24 lg:py-0">
      <div className="fixed inset-0 hidden max-h-screen sm:block">
        <Lanyard />
      </div>
      <div className="fixed bottom-0 right-0 m-5">
        <ImageJackbox />
      </div>
      <div className="flex justify-center gap-4">
        <Hero></Hero>
        <Infograph></Infograph>
      </div>
    </div>
  );
}
