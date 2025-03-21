import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import projectData from "../data/data";

import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const ProjectSlidesMobile = ({ className }: { className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperElRef = useRef(null);
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  const projects = useMemo(() => {
    return projectData;
  }, []);

  const images = useMemo(() => {
    return projectData.map((project) => project.thumbnail);
  }, []);

  return (
    <div className={className}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        cardsEffect={{
          slideShadows: true,
        }}
        onSlideChange={handleSlideChange}
        className="w-[90%] aspect-[9/13]"
        ref={swiperElRef}
      >
        {images.map((item, i) => (
          <SwiperSlide
            key={i}
            className={`flex items-center justify-center rounded-xl border-2 border-gray-500 text-7xl font-bold text-neutral-200 size-full`}
          >
            <img
              src={item.mobileSrc}
              alt={item.mobileSrc}
              className={`object-cover size-full project-thumbnail overflow-hidden`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="slide-info" className="mt-4 h-[120px] text-neutral-200">
        <h2 className=" font-semibold text-xl">
          {projects[activeIndex].title}
        </h2>
        <p className="text-sm text-neutral-400">
          {projects[activeIndex].short_description}
        </p>
        <Link
          to={`/projects/${projects[activeIndex].id}`}
          className="text-sm underline hover:text-white"
        >
          More details
        </Link>
      </div>
    </div>
  );
};

export default ProjectSlidesMobile;
