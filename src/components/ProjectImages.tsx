type ProjectImagesProp = {
  image: string;
  alt: string;
  setSelectedImage: (value: string | null) => void;
};

const ProjectImages = ({ image, alt, setSelectedImage }: ProjectImagesProp) => {
  return (
    <figure
      onClick={() => {
        setSelectedImage(image);
      }}
      className='w-full my-2 rounded-xl overflow-hidden cursor-pointer'>
      <img src={image} alt={alt} className='size-full' />
    </figure>
  );
};

export default ProjectImages;
