import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPostman } from "react-icons/si";
// import { SiSass } from "react-icons/si";

const AboutSection = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse gap-3'>
      <div className='text-neutral-200 space-y-4 flex-1 md:text-right'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          consectetur accusamus distinctio placeat corrupti dolorum tempora
          labore natus, nihil recusandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
          rerum nulla esse ut vero.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
          rerum nulla esse ut vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et voluptatum natus vitae. Sint itaque saepe tenetur
          distinctio, nobis ex odio quisquam autem obcaecati omnis.
        </p>
      </div>
      <div className='grid place-content-center mt-10 md:mt-0 flex-1'>
        <div className='text-neutral-200 grid grid-cols-3 max-w-md gap-10 px-3 '>
          <SiExpress
            className='text-[50px] sm:text-[100px] hover:text-express hover:-rotate-[5deg] duration-150 hover:scale-105 cursor-pointer'
            aria-hidden={true}
          />
          <SiMongodb
            className='text-[50px] sm:text-[100px] hover:text-mondoDb hover:scale-105 cursor-pointer duration-150 hover:-translate-y-2'
            aria-hidden={true}
          />
          <SiNodedotjs
            className='text-[50px] sm:text-[100px] hover:text-nodeJs hover:scale-105 cursor-pointer duration-150 hover:rotate-[5deg]'
            aria-hidden={true}
          />
          <SiTailwindcss
            className='text-[50px] sm:text-[100px] hover:text-tailwind hover:scale-105 cursor-pointer duration-150 hover:rotate-[10deg]'
            aria-hidden={true}
          />
          <SiPostman
            className='text-[50px] sm:text-[100px] text-postman hover:scale-105 cursor-pointer duration-150 hover:translate-y-2'
            aria-hidden={true}
          />
          <SiReact
            className='text-[50px] sm:text-[100px] hover:text-react hover:scale-105 cursor-pointer duration-150 hover:rotate-[5deg]'
            aria-hidden={true}
          />
          <p className='sr-only'>
            Technologies I am familiar with include, but not limited to,
            MongoDb, express-JS, node-JS, react, tailwind, postman
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
