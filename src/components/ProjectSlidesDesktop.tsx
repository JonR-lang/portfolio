import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import projects from "../data/data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const ProjectSlidesDesktop = ({ className }: { className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToPrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-neutral-800/80 hover:bg-neutral-700/90 text-neutral-200 hover:text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-neutral-700/50 shadow-lg hover:shadow-xl group"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-neutral-800/80 hover:bg-neutral-700/90 text-neutral-200 hover:text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-neutral-700/50 shadow-lg hover:shadow-xl group"
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="pb-12"
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {projects.map((item, i) => (
            <SwiperSlide key={i} className="w-[500px] aspect-[15/9]">
              <div className="relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Link to={`/projects/${item.id}`} className="block relative">
                  <img
                    src={item.thumbnail.desktopSrc}
                    alt={item.alt}
                    className="object-cover aspect-video size-full project-thumbnail transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-300 line-clamp-2 mb-2">
                      {item.short_description}
                    </p>
                    <div className="flex items-center text-xs text-neutral-400">
                      <span>View Project</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Info Section */}
      <div className="mt-8 text-center">
        <div className="relative overflow-hidden">
          <div
            className="transition-all duration-500 ease-out"
            key={activeIndex}
          >
            <h2 className="font-bold text-5xl text-neutral-100 mb-3 tracking-tight">
              {projects[activeIndex].title}
            </h2>
            <p className="text-base text-neutral-400 mb-4 max-w-2xl mx-auto leading-relaxed">
              {projects[activeIndex].short_description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4">
              <Link
                to={`/projects/${projects[activeIndex].id}`}
                className="inline-flex items-center px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-neutral-200 hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              >
                <span className="text-sm font-medium">View Details</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>

              {/* Project Counter */}
              <div className="flex items-center text-sm text-neutral-500">
                <span className="font-medium text-neutral-300">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="mx-2">/</span>
                <span>{String(projects.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full max-w-md mx-auto">
        <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-neutral-400 to-neutral-200 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((activeIndex + 1) / projects.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlidesDesktop;
