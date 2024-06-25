import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import data from "../data/data";
import Info from "../components/Info";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import DetailsAccordion from "../components/DetailsAccordion";
import BreadcrumbComponent from "../components/Breadcrumb";
import RatingComponent from "../components/RatingComponent";
import { scrollToTop } from "../lib/utils";
import MasonryLayout from "../components/MasonryLayout";

const ProjectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const project = data.find((project) => project.id === id);

  const pathArray = location.pathname.split("/");
  const parsedPathArray = pathArray.filter((item) => item);
  parsedPathArray.pop();

  useEffect(() => {
    scrollToTop();
  }, []);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <BreadcrumbComponent
        className='-mt-2'
        paths={parsedPathArray}
        page={project.title}
      />
      <div className='text-neutral-200 w-full max-w-[700px] mx-auto mt-2'>
        <h1 className=' text-3xl sm:text-4xl font-bold text-center'>
          {project.title}
        </h1>

        {/* {'animated underline'} */}
        <div className='h-[2px] w-full mt-2' aria-hidden={true}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%", transition: { duration: 4 } }}
            viewport={{ once: true }}
            style={{ background: project.theme }}
            className='h-full'></motion.div>
        </div>

        <figure className='aspect-[15/9] overflow-hidden mt-4'>
          <img
            src={project.thumbnail.desktopSrc}
            alt={project.alt}
            className='w-full object-cover'
          />
        </figure>
        <div className='flex mt-2 items-center gap-2'>
          <span className='block text-xs rounded-md bg-neutral-300/20 p-1 px-2 text-neutral-200 font-[500]'>
            {project.type}
          </span>
          <span className='block text-xs rounded-md bg-neutral-300/20 p-1 px-2 text-neutral-200 font-[500]'>
            {project.category}
          </span>
          <Info info={project.info} />
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          {project.long_description.map((paragraph, i) => (
            <p key={i} className='text-base text-center md:text-left'>
              {paragraph}
            </p>
          ))}
        </div>
        <div className='flex flex-col md:flex-row gap-3 justify-between md:justify-start w-full md:w-aut0 mt-5'>
          <a
            href={project.github}
            target='_blank'
            rel='noreferrer'
            className='bg-gradient-to-tr from-transparent to-black/20 text-center p-3 md:px-5 border flex gap-2 items-center justify-center border-neutral-300/40 hover:border-postman/80 focus:outline-none focus:border-postman/80 shadow-lg'>
            <FaGithub fontSize={25} aria-hidden={true} />
            View on Github
          </a>
          <a
            href={project.live_url}
            target='_blank'
            rel='noreferrer'
            className='flex gap-2 items-center justify-center bg-gradient-to-bl border from-transparent to-black/20 text-center p-3 md:px-5 border-neutral-300/40 hover:border-postman/80 focus:outline-none focus:border-postman/80 shadow-lg'>
            <FaLink fontSize={25} aria-hidden={true} />
            Live Demo
          </a>
          {project.documentation && (
            <a
              href={project.documentation}
              target='_blank'
              rel='noreferrer'
              className='flex gap-2 items-center justify-center bg-gradient-to-bl border from-transparent to-black/20 text-center p-3 md:px-5 border-neutral-300/40 hover:border-postman/80 focus:outline-none focus:border-postman/80 shadow-lg'>
              <IoDocumentTextOutline fontSize={25} aria-hidden={true} />
              Documentation
            </a>
          )}
        </div>
        <div className='flex flex-col justify-center items-center mt-6'>
          <RatingComponent
            value={project.rating}
            items={5}
            className='max-w-[200px]'
          />
          <span>
            <span className='font-semibold text-4xl'>
              {project.rating.toFixed(1)}
            </span>
            / 5
          </span>
        </div>

        <div className='mt-3'>
          <h2 className='font-semibold text-3xl text-center md:text-left py-1'>
            More Info
          </h2>
          {/* {'animated underline'} */}
          <div className='h-[2px] w-full mt-2' aria-hidden={true}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%", transition: { duration: 4 } }}
              viewport={{ once: true }}
              style={{ background: project.theme }}
              className='h-full'></motion.div>
          </div>
          <DetailsAccordion data={project} />
        </div>
      </div>
      <div className='mt-6'>
        <h2 className='font-semibold text-3xl text-center md:text-left py-1 text-neutral-200'>
          Project Gallery
        </h2>
        {/* {'animated underline'} */}
        <div className='h-[2px] w-full mt-1' aria-hidden={true}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%", transition: { duration: 4 } }}
            viewport={{ once: true }}
            style={{ background: project.theme }}
            className='h-full'></motion.div>
        </div>
        <MasonryLayout images={project.images} alt={project.alt} />
      </div>
    </>
  );
};

export default ProjectDetails;
