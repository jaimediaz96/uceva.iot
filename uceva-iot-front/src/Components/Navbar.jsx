import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { UcevaIotContext } from "../Context/UcevaIotContext";
import { UserIcon, Bars3Icon } from '@heroicons/react/24/solid'

function Navbar() {
  const {
    user,
    isHamburgerMenuOpen,
    setIsHamburgerMenuOpen,
    isUserMenuOpen,
    setIsUserMenuOpen
  } = useContext(UcevaIotContext);
  const activeStyle = "underline underline-offset-4";

  function renderSession() {
    if (user?.email) {
      return (
        <button
          className="h-10 w-10 p-1 bg-gray-300 rounded-full"
          onClick={() => { setIsUserMenuOpen(!isUserMenuOpen) }} >
          <UserIcon className="h-8 w-8 text-black" />
        </button>
      );
    }
    else {
      return (
        <ul className="flex items-center gap-4 font-sans text-xs font-bold">
          <li>
            <NavLink
              to="/sign-in"
              className="flex py-3 px-2 sm:pt-3.5 sm:pb-3 sm:px-6 rounded-full text-center text-black bg-gray-100 shadow-xl hover:text-gray-200">
              INICIE SESIÓN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/check-in"
              className="hidden sm:flex pt-3.5 pb-3 px-6 rounded-full text-white bg-blue-400 shadow-xl hover:bg-orange-400">
              REGÍSTRESE
            </NavLink>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex items-center h-16 w-full px-3 sm:px-10 bg-green-600 text-white">
      <nav className="flex justify-between items-center w-full">
        <NavLink to="/" className="">
          <img
            className='h-12 mix-blend-difference'
            src="/Logo.png"
            alt="Logo Uceva.Iot" />
        </NavLink>
        <ul className="hidden sm:flex items-center gap-6 font-sans text-base font-bold">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              ACERCA DE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              PROYECTOS
            </NavLink>
          </li>
        </ul>
        {renderSession()}
        <button className="flex sm:hidden">
          <Bars3Icon
            className="h-8 w-8"
            onClick={() => { setIsHamburgerMenuOpen(!isHamburgerMenuOpen) }} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
