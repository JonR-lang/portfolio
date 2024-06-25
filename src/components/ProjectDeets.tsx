import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CgAbstract } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { ProjectType } from "../types/project.types";

type ProjectDeetsProp = {
  selectedId: string | null;
  setSelectedId: (value: string | null) => void;
  data: ProjectType;
};

const ProjectDeets = ({
  selectedId,
  data,
  setSelectedId,
}: ProjectDeetsProp) => {
  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div
          layoutId={selectedId}
          className='fixed top-[15%] lg:bottom-[15%] landscape:bottom-[15%] left-[5%] md:left-[15%] md:w-[70%] w-[90%] bg-black/90 z-20 p-4 flex flex-col lg:flex-row gap-3 lg:items-center border md:border-none border-neutral-600 overflow-y-auto'>
          <motion.figure className='lg:max-w-xs xl:max-w-sm aspect-[16/9]'>
            <motion.img
              src={data.thumbnail.desktopSrc}
              className='size-full object-cover'
            />
          </motion.figure>
          <motion.div className='flex flex-col gap-2 mt-1 text-neutral-200 text-center md:text-left w-full'>
            <motion.div
              id='header and rating'
              className='flex flex-col md:flex-row items-center md:justify-between'>
              <motion.h2 className='text-xl md:text-2xl font-semibold'>
                {data.title}
              </motion.h2>
              <motion.div className='flex items-center gap-[4px] justify-center'>
                <motion.span className='text-neutral-200 text-sm md:text-base'>
                  {data.rating.toFixed(1)}
                </motion.span>
                <IoMdStar
                  fontSize={15}
                  className='text-[#FFB23F]  block md:text-xl -mt-[3px]'
                  aria-hidden={true}
                />
                <span className='sr-only'>rating</span>
              </motion.div>
            </motion.div>

            <motion.p className='text-sm -mt-1'>
              {data.short_description}
            </motion.p>

            <motion.div className='flex flex-col justify-between md:justify-start gap-1 text-sm w-full text-left mt-2'>
              <div className='flex items-center gap-[1px]'>
                <CgAbstract
                  fontSize={15}
                  style={{ color: data.theme }}
                  aria-hidden={true}
                />
                <motion.span>
                  {data.type} ({data.status})
                </motion.span>
              </div>
              <div className='flex items-center gap-[1px]'>
                <CgAbstract
                  fontSize={15}
                  style={{ color: data.theme }}
                  aria-hidden={true}
                />
                <motion.span>
                  <motion.span className='opacity-80'>Category: </motion.span>
                  {data.category}
                </motion.span>
              </div>
              <div className='md:flex hidden gap-[1px]'>
                <CgAbstract
                  fontSize={15}
                  style={{ color: data.theme }}
                  aria-hidden={true}
                  className='self-start shrink-0'
                />
                <motion.span>
                  <motion.span className='opacity-80'>Stack: </motion.span>
                  {data.stack.join(", ")}.
                </motion.span>
              </div>
            </motion.div>

            <motion.div className='flex flex-col gap-2 text-center'>
              <Link
                to={`/projects/${data.id}`}
                className='border border-neutral-600 bg-gradient-to-b to-neutral-900 from-black py-2 h-10 shadow-lg hover:border-postman/80 focus:outline-none focus:border-postman/80'>
                View Details
              </Link>
              <motion.div className='flex gap-3'>
                <motion.a
                  href={data.github}
                  className='block flex-1 border border-neutral-600 py-2 h-10 relative bg-gradient-to-b to-neutral-900 from-black hover:border-postman/80 focus:outline-none focus:border-postman/80'>
                  <FaGithub
                    fontSize={25}
                    className='text-center absolute left-[50%] translate-x-[-50%]'
                  />
                  <span className='sr-only'>View repo on github</span>
                </motion.a>
                <motion.a
                  href={data.live_url}
                  className='flex-1 border border-neutral-600 py-2 h-10 bg-gradient-to-b to-neutral-900 from-black hover:border-postman/80 focus:outline-none focus:border-postman/80 block relative'>
                  <FaLink
                    fontSize={25}
                    className='text-center absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'
                  />
                  <span className='sr-only'>View repo on github</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.button
            className='p-2 hidden lg:block md:absolute md:top-3 md:right-3 text-neutral-200'
            onClick={() => setSelectedId(null)}>
            <IoCloseOutline fontSize={30} />
            <span className='sr-only'>Close Menu</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDeets;
