import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section id='footer' aria-label='footer' className='border-t'>
      <div className='text-neutral-200 p-2 my-4 pb-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between max-w-sm mx-auto gap-3 '>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </section>
  );
};

export default Footer;
