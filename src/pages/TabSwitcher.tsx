import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/under-construction" },
  { name: "Life", path: "/under-construction" },
];

export default function TabSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleTabClick = (index: number, path: string) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="relative mx-auto flex w-max rounded-full border border-white/5 bg-white/10 p-1 shadow-lg backdrop-blur-md">
        {/* Frosted glider effect */}
        <div
          className="absolute h-[35px] w-[120px] rounded-full bg-slate-400/10 shadow-inner backdrop-blur-lg transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${activeIndex * 100}%)`, zIndex: 1 }}
        />
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(index, tab.path)}
            className={`relative z-10 h-[35px] w-[120px] rounded-full text-sm font-semibold transition-colors ${
              index === activeIndex
                ? "text-slate-300"
                : "text-white/70 hover:text-slate-200"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}
