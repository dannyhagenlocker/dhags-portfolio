import Home from "./pages/home";
import Spotlight from "./components/spotlight";
import { Routes, Route } from "react-router-dom";
import UnderConstruction from "./pages/underConstruction";
import NotFound from "./pages/notFound";
import TabSwitcher from "./pages/TabSwitcher";

function App() {
  return (
    <>
      <Spotlight />
      <TabSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
