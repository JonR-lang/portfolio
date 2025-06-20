import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="sm:flex gap-7 text-neutral-100 hidden">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "border-b border-b-postman" : "relative links"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "border-b border-b-postman" : "relative links"
          }
        >
          Contact
        </NavLink>
      </div>
      <button
        onClick={() => setIsMenuOpen(true)}
        className="sm:hidden text-neutral-100 block bg-black/20 p-1 rounded-lg -mt-[2px]"
      >
        <FiMoreVertical fontSize={25} />
        <span className="sr-only">Open Menu</span>
      </button>
      <div
        className={`fixed z-[9999] w-full transition-[top] duration-200 left-0 bg-space-grey/90 backdrop-blur-sm h-[55vh] rounded-b-3xl flex gap-7 text-neutral-100 p-4 items-center flex-col justify-center ${
          isMenuOpen ? "top-0" : "top-[-100%]"
        } transition-[top] duration-200`}
      >
        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </NavLink>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-2 right-2"
        >
          <IoCloseOutline fontSize={30} />
          <span className="sr-only">Close Menu</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
