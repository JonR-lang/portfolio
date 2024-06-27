import ProjectSlidesMobile from "./ProjectSlidesMobile";
import ProjectSlidesDesktop from "./ProjectSlidesDesktop";
const ProjectSection = () => {
  return (
    <div className='mt-10 space-y-6 '>
      <h2 className='font-bold text-neutral-200 md:text-3xl text-2xl custom-project-header-gradient md:pl-2 py-3 text-center md:text-left'>
        Featured Projects
      </h2>
      <ProjectSlidesMobile className='sm:hidden overflow-x-hidden ' />
      <ProjectSlidesDesktop className='hidden sm:block max-w-[800px] mx-auto' />
    </div>
  );
};

export default ProjectSection;
