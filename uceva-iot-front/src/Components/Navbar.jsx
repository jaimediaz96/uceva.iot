import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { UcevaIotContext } from "../Context/UcevaIotContext";
import { UserIcon } from '@heroicons/react/24/solid'

function Navbar() {
  const activeStyle = "underline underline-offset-4";
  const { user } = useContext(UcevaIotContext);

  function renderSession() {
    if (user?.email) {
      return (
        <figure className="h-10 w-10 p-1 bg-gray-300 rounded-full">
          <UserIcon className="h-8 w-8 text-black" />
        </figure>
      );
    }
    else {
      return (
        <ul className="flex items-center gap-4">
          <li>
            <NavLink
              to="/sign-in"
              className="py-4 px-6 border-none rounded-lg text-black bg-gray-100 shadow-lg overflow-hidden hover:text-gray-200">
              Iniciar sesión
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/check-in"
              className="py-4 px-6 border-none rounded-lg text-white bg-blue-400 shadow-lg overflow-hidden hover:bg-orange-400">
              Registrarse
            </NavLink>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>
      <nav className="flex justify-between items-center fixed top-0 w-full z-10 px-10 font-extrabold text-lg bg-green-600 text-white">
        <ul className="flex items-center gap-4">
          <li>
            <NavLink to="/">
              <img
                className='h-24  opacity-90 mix-blend-difference'
                src="/Logo.png"
                alt="Logo Uceva.Iot" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Acerca de
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Proyectos
            </NavLink>
          </li>
        </ul>
        {renderSession()}
      </nav>
    </header>
  );
}

export default Navbar;
