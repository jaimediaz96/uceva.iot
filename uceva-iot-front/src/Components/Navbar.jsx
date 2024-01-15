import { NavLink } from "react-router-dom"

function Navbar() {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed top-0 w-full z-10 py-3 px-10 font-extrabold text-lg">
      <ul className="flex items-center gap-4">
        <li>
          <NavLink to="/">
            <img
              className='h-24'
              src="../../public/Logo.png"
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
            to="/blog"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Proyectos
          </NavLink>
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
  )
}

export default Navbar