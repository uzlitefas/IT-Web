import { useState } from "react";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import { Link } from "react-router-dom";
import { kurslar } from "@/constants";
import ModeToggle from "./mode-toggle";

const Navbar = () => {
  const [language, setLanguage] = useState("RU");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "RU" ? "UZ" : "RU"));
  };
  return (
    <header className="border-b flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-950 text-gray-800 dark:text-white">
      <Logo />
      <nav className="hidden md:flex gap-6 font-medium text-[15px]">
        {kurslar.map((i) => (
          <Link to={i.route} className="hover:text-blue-500">
            {i.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <ModeToggle />

        <Button size={"icon"} variant={"outline"} onClick={toggleLanguage}>
          {language}
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
