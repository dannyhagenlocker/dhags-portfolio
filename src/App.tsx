import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Projects from "./pages/projects";
import UnderConstruction from "./pages/underConstruction";
import NotFound from "./pages/notFound";
import PageWrapper from "./components/pageWrapper";
import { useTransitionDirection } from "./hooks/useTransitionDirection";
import { isTabPath } from "./config/tabs";
import Spotlight from "./components/spotlight";
import TabSwitcher from "./pages/TabSwitcher";
import DrumMachinePage from "./pages/projects/DrumMaschinePage";
import GalleryPage from "./pages/photogallery";

// Routes that take part in the sliding page transition.
const animatedRoutes = [
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/life", element: <GalleryPage /> },
  { path: "/under-construction", element: <UnderConstruction /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  const location = useLocation();
  const direction = useTransitionDirection();

  return (
    <>
      <Spotlight />
      {isTabPath(location.pathname) && <TabSwitcher />}
      {/* `custom` has to live on AnimatePresence too: the exiting page is a
          cached element from the previous render, so without this it would
          animate out with the direction of the previous navigation. */}
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <Routes location={location} key={location.pathname}>
          {animatedRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <PageWrapper direction={direction}>{element}</PageWrapper>
              }
            />
          ))}
          <Route path="/projects/drum-maschine" element={<DrumMachinePage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
