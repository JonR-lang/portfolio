import { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import projectData from "../data/data";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

// import required modules
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const ProjectSlidesMobile = ({ className }: { className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  const projects = useMemo(() => {
    return projectData;
  }, []);

  return (
    <div className={`relative ${className} -mx-5`}>
      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          effect={"creative"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={20}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
              rotate: [0, 0, -5],
            },
            next: {
              translate: ["100%", 0, 0],
              rotate: [0, 0, 5],
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCreative, Pagination, Autoplay]}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="pb-12"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className="aspect-[3/4]">
              <div className="relative group h-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50">
                {/* Image Container */}
                <img
                  src={project.thumbnail.mobileSrc}
                  alt={project.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Information */}
      <div className="mt-2 px-4 h-[300px]">
        <div className="backdrop-blur-sm rounded-2xl p-6 border border-neutral-700/50 flex flex-col">
          {/* Current Project Info */}
          <div className="text-center">
            <h3 className="font-bold text-xl text-neutral-100 mb-2">
              {projects[activeIndex].title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {projects[activeIndex].short_description}
            </p>
          </div>
          <Link
            to={`/projects/${projects[activeIndex].id}`}
            className="inline-flex items-center px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-neutral-200 hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group mt-4 mx-auto"
          >
            <span className="text-sm font-medium">View Details</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlidesMobile;
