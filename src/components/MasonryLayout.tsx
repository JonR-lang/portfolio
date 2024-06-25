import { useState } from "react";
import Masonry from "react-masonry-css";
import ProjectImages from "./ProjectImages";
import ProjectImagesSlide from "./ProjectImagesSlide";

const MasonryLayout = ({ images, alt }: { images: string[]; alt: string }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const breakpointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };

  return (
    <>
      <Masonry className='flex gap-2 mt-2' breakpointCols={breakpointObj}>
        {images.map((image, i) => (
          <ProjectImages
            key={i}
            image={image}
            alt={alt}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </Masonry>
      {!!selectedImage && (
        <ProjectImagesSlide
          images={images}
          alt={alt}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
};

export default MasonryLayout;
