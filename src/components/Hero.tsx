import { SlSocialLinkedin } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";

const Hero = () => {
  return (
    <div className='relative h-[calc(100vh-100px)] text-neutral-300 flex justify-center items-center'>
      <div className='w-full max-w-[15rem] -mt-[100px]'>
        <h1>
          <span className='block'>Hi, I'm </span>
          <span className='block text-7xl font-extrabold text-center'>JON</span>
        </h1>
        <p className='mt-1 block text-right'>A Fullstack Developer.</p>
      </div>
      <div className='flex sm:flex-col gap-6 absolute bottom-10 sm:left-0'>
        <a
          href='https://www.linkedin.com/in/johnny-iroele-729b192a5/'
          target='_blank'
          rel='noreferrer'>
          <SlSocialLinkedin fontSize={25} aria-hidden={true} />
          <span className='sr-only'>Link to Johnny's instagram</span>
        </a>
        <a
          href='https://twitter.com/iroelejohnny'
          target='_blank'
          rel='noreferrer'>
          <RiTwitterXLine fontSize={25} aria-hidden={true} />
          <span className='sr-only'>Link to Johnny's twitter</span>
        </a>
        <a href='https://github.com/jonr-lang' target='_blank' rel='noreferrer'>
          <SiGithub fontSize={25} aria-hidden={true} />
          <span className='sr-only'>Link to Johnny's github</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
