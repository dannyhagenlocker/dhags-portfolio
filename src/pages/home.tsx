import Hero from "../components/hero";
import ImageJackbox from "../components/ImageJackbox";
import List from "../components/list";
export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="fixed left-0 top-0 m-20">
        <ImageJackbox />
      </div>
      <div className="flex justify-center gap-4">
        <Hero></Hero>
        <List></List>
      </div>
    </div>
  );
}
