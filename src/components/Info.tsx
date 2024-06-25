import { IoInformationCircleOutline } from "react-icons/io5";

const Info = ({ info }: { info?: string }) => {
  return (
    <div className='ml-auto relative cursor-pointer -mt-1'>
      <IoInformationCircleOutline
        fontSize={23}
        className='peer'
        aria-hidden={true}
      />
      <span
        className={`text-sm p-2 absolute right-[23px] bottom-[23px] w-[200px] bg-neutral-800/90 backdrop-blur-sm rounded shadow-md hidden peer-hover:block`}
        aria-hidden={true}>
        {info}
      </span>
      <span className='sr-only'>{info && info}</span>
    </div>
  );
};

export default Info;
