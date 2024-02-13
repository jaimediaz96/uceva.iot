import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UcevaIotContext } from "../Context/UcevaIotContext";

function HamburgerMenu() {
  const { user, isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useContext(UcevaIotContext);

  function closeHamburgerMenu() {
    setIsHamburgerMenuOpen(false);
  }

  return (
    <div className={isHamburgerMenuOpen ?
      "flex sm:hidden flex-col justify-center p-3 bg-green-600 text-white border border-white" :
      "hidden"}>
      <ul className="flex flex-col items-center gap-4">
        <li>
          <NavLink
            to="/about"
            className=""
            onClick={() => closeHamburgerMenu()}>
            ACERCA DE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className=""
            onClick={() => closeHamburgerMenu()}>
            PROYECTOS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/check-in"
            className={user.email ? "hidden" : "flex"}
            onClick={() => closeHamburgerMenu()}>
            REGÍSTRESE
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
