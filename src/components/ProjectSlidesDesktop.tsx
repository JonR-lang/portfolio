import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import projects from "../data/data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const ProjectSlidesDesktop = ({ className }: { className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className={className}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        onSlideChange={handleSlideChange}
        className="pb-8"
      >
        {projects.map((item, i) => (
          <SwiperSlide key={i} className="w-[500px] aspect-[15/9]">
            <Link to={`/projects/${item.id}`} className="block">
              <img
                src={item.thumbnail.desktopSrc}
                alt={item.alt}
                className={`object-cover size-full project-thumbnail`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id="slide-info"
        className="mt-5 h-[100px] text-center text-neutral-200"
      >
        <h2 className="font-semibold text-4xl ">
          {projects[activeIndex].title}
        </h2>
        <p className="text-sm text-neutral-400 mt-2">
          {projects[activeIndex].short_description}
        </p>
        <Link
          to={`/projects/${projects[activeIndex].id}`}
          className="text-xs underline hover:text-white"
        >
          More details
        </Link>
      </div>
    </div>
  );
};

export default ProjectSlidesDesktop;
