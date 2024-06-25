import ProjectSlidesMobile from "./ProjectSlidesMobile";
import ProjectSlidesDesktop from "./ProjectSlidesDesktop";
const ProjectSection = () => {
  return (
    <div className='mt-10 space-y-6 '>
      <h2 className='font-bold text-neutral-200 text-[1.6rem] bg-gradient-to-r from-black/40 to-transparent pl-2 py-3  border-black border-l-2'>
        Featured Projects
      </h2>
      <ProjectSlidesMobile className='sm:hidden overflow-x-hidden ' />
      <ProjectSlidesDesktop className='hidden sm:block max-w-[800px] mx-auto' />
    </div>
  );
};

export default ProjectSection;
