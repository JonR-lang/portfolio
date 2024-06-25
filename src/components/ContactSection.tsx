import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";

const ContactSection = () => {
  return (
    <section className='flex items-center justify between gap-5 p-4  md:p-8 bg-black/30 text-neutral-300 mt-6  flex-col md:flex-row'>
      <div className='flex-[2]'>
        <h2 className='text-neutral-100 font-bold md:font-extrabold text-2xl sm:text-3xl md:text-4xl text-center md:text-left'>
          Let's work together on your next project!
        </h2>
        <h3 className='mt-4 text-center md:text-left'>
          You can contact me via:
        </h3>
        <p className='text-center md:text-left mt-1 text-neutral-100'>
          <span className='text-neutral-400'>Mobile: </span>+2348063197455
        </p>
        <p className='text-center md:text-left mt-1 text-neutral-100'>
          <span className='text-neutral-400'>Email: </span>
          iroelejohnny@outlook.com
        </p>
        <div className='flex my-5 gap-6 justify-center md:justify-start'>
          <a
            href='https://instagram.com/ynnhoj.r'
            className='hover:scale-105 transition'>
            <SlSocialInstagram fontSize={25} />
            <span className='sr-only'>Link to Johnny's instagram</span>
          </a>
          <a
            href='https://twitter.com/iroelejohnny'
            className='hover:scale-105 transition'>
            <RiTwitterXLine fontSize={25} />
            <span className='sr-only'>Link to Johnny's twitter</span>
          </a>
          <a
            href='https://github.com/jonr-lang'
            className='hover:scale-105 transition'>
            <SiGithub fontSize={25} />
            <span className='sr-only'>Link to Johnny's github</span>
          </a>
        </div>
      </div>
      <div className='flex justify-center items-center md:flex-1 w-full'>
        <button className='bg-postman text-neutral-100 shadow-md py-3 px-2 w-full max-w-[200px]'>
          Contact
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
