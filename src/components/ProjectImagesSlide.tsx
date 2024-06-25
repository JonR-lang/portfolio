import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IoCloseOutline } from "react-icons/io5";

type PISProp = {
  images: string[];
  alt: string;
  setSelectedImage: (value: string | null) => void;
  selectedImage: string;
};

const ProjectImagesSlide = ({
  images,
  alt,
  selectedImage,
  setSelectedImage,
}: PISProp) => {
  const imageIndex = images.findIndex((image) => selectedImage == image);

  return (
    <div className='hidden z-30 fixed lg:flex justify-center items-center inset-0 w-full h-screen bg-black/90 p-2 py-6'>
      <button
        onClick={() => setSelectedImage(null)}
        className='absolute top-5 right-5 text-neutral-200'>
        <IoCloseOutline fontSize={30} />
        <span className='sr-only'>Close Menu</span>
      </button>
      <div className='w-[80%] max-w-[1000px] flex flex-col items-center justify-center gap-3'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          initialSlide={imageIndex}
          navigation={{
            prevEl: ".custom_prev",
            nextEl: ".custom_next",
            disabledClass: "swiper_button-disabled",
          }}
          modules={[Navigation]}
          className='w-full'>
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image} alt={alt} className='mx-auto' />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex gap-5'>
          <button className='custom_prev p-2 border border-neutral-300'>
            <MdOutlineKeyboardArrowLeft
              fontSize={20}
              className='text-neutral-300'
            />
          </button>
          <button className='custom_next p-2 border border-neutral-300'>
            <MdOutlineKeyboardArrowRight
              fontSize={20}
              className='text-neutral-300'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectImagesSlide;
