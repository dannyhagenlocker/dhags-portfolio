import Home from "./pages/home";
import Spotlight from "./components/spotlight";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InProgress from "./pages/inProgress";

function App() {
  return (
    <>
      <div className="">
        <Spotlight />
        <Home />
      </div>
    </>
  );
}

export default App;
