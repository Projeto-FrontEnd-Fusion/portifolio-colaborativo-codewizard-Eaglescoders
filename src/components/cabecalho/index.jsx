import { useState } from "react";
import clsx from "clsx";

import github from "../../public/github-icon.svg";
import github2 from "../../public/github-icon-black.svg";
import sol from "../../public/sol.svg";
import lua from "../../public/sol-black.svg";
import lista from "../../public/lista.svg";
import listaB from "../../public/lista-dark.svg";
import { IoClose } from "react-icons/io5";
import { useDarkMode } from "../../model/darkMode";
import { getDarkMode } from "../../controller/getDarkMode";

export const Header = () => {
  const [list, setList] = useState(false);

  const { darkMode, setDarkMode } = useDarkMode();

  getDarkMode();

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const isDark = !darkMode;

    root.classList.toggle("dark", isDark);
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const ListMenu = clsx(
    `font-inconsolata py-1 text-purple-1 dark:text-[#ffebeb] cursor-pointer hover:underline`
  );

  const openAndClose = () => {
    setList(!list);
  };

  return (
    <header
      className={`w-full flex items-center gap-10 flex-row
        xs:pl-5
        md:justify-center
        extraLg:pr-36 py-5 extraLg:justify-end
        relative
      `}
    >
      {list ? (
        <ul className="absolute right-8 w-64 top-20 items-center flex flex-col">
          <li
            className={`${ListMenu} rounded-t-md dark:bg-purple-2 bg-gray-6 py-2 flex justify-center w-full dark:hover:bg-[#393062] hover:bg-gray-2`}
          >
            <a href="#">Sobre</a>
          </li>
          <li
            className={`${ListMenu} dark:bg-purple-2 bg-gray-6 py-2 flex justify-center w-full dark:hover:bg-[#393062] hover:bg-gray-2`}
          >
            <a href="#">Equipe</a>
          </li>
          <li
            className={`${ListMenu} dark:bg-purple-2 bg-gray-6 py-2 flex justify-center w-full dark:hover:bg-[#393062] hover:bg-gray-2`}
          >
            <a href="#">Vantagens</a>
          </li>
          <li
            className={`${ListMenu} dark:bg-purple-2 bg-gray-6 rounded-b-md py-2 flex justify-center w-full dark:hover:bg-[#393062] hover:bg-gray-2`}
          >
            <a href="#">Participantes</a>
          </li>
        </ul>
      ) : (
        <ul className="gap-16 hidden md:flex">
          <li className={`${ListMenu}`}>
            <a href="#">Sobre</a>
          </li>
          <li className={`${ListMenu}`}>
            <a href="#">Equipe</a>
          </li>
          <li className={`${ListMenu}`}>
            <a href="#">Vantagens</a>
          </li>
          <li className={`${ListMenu}`}>
            <a href="#">Participantes</a>
          </li>
        </ul>
      )}
      {list ? (
        <>
          {darkMode ? (
            <IoClose
              color="white"
              size={35}
              className="cursor-pointer absolute right-8 md:hidden"
              onClick={openAndClose}
            />
          ) : (
            <IoClose
              color="black"
              size={35}
              className="cursor-pointer absolute right-8 md:hidden"
              onClick={openAndClose}
            />
          )}
        </>
      ) : (
        <>
          {darkMode ? (
            <img
              src={lista}
              onClick={openAndClose}
              className="cursor-pointer absolute right-8 md:hidden"
            />
          ) : (
            <img
              src={listaB}
              onClick={openAndClose}
              className="cursor-pointer absolute right-8 md:hidden"
            />
          )}
        </>
      )}

      {darkMode ? (
        <img
          src={sol}
          width={35}
          className="cursor-pointer right-24 absolute flex md:sticky"
          onClick={toggleDarkMode}
        />
      ) : (
        <img
          src={lua}
          width={35}
          className="cursor-pointer right-24 absolute flex md:sticky"
          onClick={toggleDarkMode}
        />
      )}

      {darkMode ? (
        <button className="bg-green-1 text-white-1 flex text-white p-4 w-36 items-center gap-2 justify-center rounded-lg font-inconsolata text-xl">
          github
          <img src={github} width={30} />
        </button>
      ) : (
        <button className="bg-green-1 dark:text-white-1 flex text-white p-4 w-36 items-center gap-2 justify-center rounded-lg font-inconsolata text-xl">
          github
          <img src={github2} width={30} />
        </button>
      )}
    </header>
  );
};
