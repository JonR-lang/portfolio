import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`h-[100px] w-full flex justify-between items-center px-[1.5rem] sticky z-20 ${
        scrollDirection === "down" ? "-top-24" : "top-0 custom-header-gradient"
      }`}>
      <div>
        <p className='font-montserrat font-extrabold text-3xl text-neutral-200'>
          <Link to='/' className='block drop-shadow-xl'>
            JON
          </Link>
        </p>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
