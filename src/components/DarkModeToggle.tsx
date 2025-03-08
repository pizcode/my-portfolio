import { useEffect, useState } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

export const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    document.body.classList.add("bg-animated");
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.body.classList.remove("bg-animated");
    setTimeout(() => {
      document.body.classList.add("bg-animated");
    }, 100);
  }, [theme]);

  return (
    <div className="top-5 right-5 bottom-auto left-auto absolute">
      <button className="p-1 rounded-md overflow-hidden" onClick={toggleTheme}>
        <div
          className={`${
            theme === "light" ? "-translate-y-8" : ""
          } size-8 transition-transform duration-500`}
        >
          <SunIcon className="py-1 size-8" />
          <MoonIcon className="py-1 size-8" />
        </div>
      </button>
    </div>
  );
};
