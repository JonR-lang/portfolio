import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import ProjectDeets from "./ProjectDeets";
import { ProjectType } from "../types/project.types";

type ProjectCardProp = {
  data: ProjectType;
};

const ProjectCard = ({ data }: ProjectCardProp) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div>
      <motion.button
        layoutId={data.id}
        onClick={() => {
          setSelectedId(data.id);
        }}
        className=' w-full bg-black/90 p-3 hover:outline hover:outline-[1px] hover:outline-postman/50 focus:outline focus:outline-[1px] focus:outline-postman/50'>
        <motion.figure className='w-full aspect-[14/9]'>
          <motion.img
            src={data.thumbnail.desktopSrc}
            alt={data.alt}
            className='size-full object-cover grayscale'
          />
        </motion.figure>
        <motion.div className='flex justify-between items-center mt-1'>
          <motion.h2 className='text-xl text-neutral-200'>
            {data.title}
          </motion.h2>
          <motion.div className='flex items-center gap-[4px]'>
            <motion.span className='text-neutral-200 text-sm'>
              {data.rating.toFixed(1)}
            </motion.span>
            <IoMdStar
              fontSize={16}
              className='text-[#FFB23F] block -mt-[2px]'
              aria-hidden={true}
            />
            <span className='sr-only'>rating</span>
          </motion.div>
        </motion.div>
      </motion.button>

      <ProjectDeets
        data={data}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />

      {selectedId && (
        <div
          className='fixed z-40 inset-0 w-full h-screen bg-black/40 md:bg-black/20'
          onClick={() => setSelectedId(null)}></div>
      )}
    </div>
  );
};

export default ProjectCard;
