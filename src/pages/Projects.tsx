import BreadcrumbComponent from "../components/Breadcrumb";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className='font-montserrat'>
      <BreadcrumbComponent className='-mt-2' page='Projects' />

      <h2 className='py-2 w-full text-4xl font-semibold text-neutral-300'>
        Projects
      </h2>

      {/* {animated underline} */}
      <div className='h-[1px] w-full  mt-1' aria-hidden={true}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 4 } }}
          viewport={{ once: true }}
          className='h-full bg-postman'></motion.div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:portrait:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-2 gap-4 mt-2'>
        {projects.map((item, i) => (
          <ProjectCard key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
