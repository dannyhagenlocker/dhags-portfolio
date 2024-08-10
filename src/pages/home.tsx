import ImageJackbox from "../components/imageJackbox";
import Lanyard from "../components/lanyard";
import Hero from "../components/sections/hero";
import Infograph from "../components/sections/infograph";
export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24">
      <div className="fixed inset-0 hidden max-h-screen md:block">
        <Lanyard />
      </div>
      <div className="fixed bottom-0 right-0 z-20 m-5">
        <ImageJackbox />
      </div>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <Hero></Hero>
        <Infograph></Infograph>
      </div>
    </div>
  );
}
