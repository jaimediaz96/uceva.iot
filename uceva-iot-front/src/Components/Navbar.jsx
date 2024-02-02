import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center top-0 w-full z-10 px-10 font-extrabold text-lg bg-green-600 text-white">
      <ul className="flex items-center gap-4">
        <li>
          <NavLink to="/">
            <img
              className='h-24 opacity-90 mix-blend-difference'
              src="/Logo.png"
              alt="Logo Uceva.Iot" />
          </NavLink>
        </li>
        {}
        <li className="ml-20">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            ACERCA DE
          </NavLink>
        </li>
        {}
        <li className="ml-4">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            PROYECTOS          </NavLink>
        </li>
      </ul>
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
    </nav>
  );
}

export default Navbar;
