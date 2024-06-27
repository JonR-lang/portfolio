import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section
      id='footer'
      aria-label='footer'
      className='border-t mx-[1.5rem] border-t-neutral-600 text-neutral-200 flex flex-col items-center justify-center'>
      <div className=' p-2 my-4 pb-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between max-w-sm mx-auto gap-3 '>
        <Link to='/' className='relative links'>
          Home
        </Link>
        <Link to='/projects' className='relative links'>
          Projects
        </Link>
        <Link to='/#about' className='relative links'>
          About
        </Link>
        <Link to='/contact' className='relative links'>
          Contact
        </Link>
      </div>
      <p className='text-xs mb-2'>
        &copy; {new Date().getFullYear()} Johnny Iroele
      </p>
    </section>
  );
};

export default Footer;
