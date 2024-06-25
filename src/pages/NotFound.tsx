import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full flex items-center justify-center min-h-[calc(100vh-100px)] font-montserrat'>
      <div className='flex flex-col items-center text-neutral-300 translate-y-[-50px]'>
        <p className='font-bold text-7xl'>404</p>
        <p>The page you seek does not exist.</p>
        <button
          onClick={() => navigate("/")}
          className='p-3 border border-neutral-500 w-full max-w-xs mt-3 hover:border-postman/80 focus:outline-none focus:border-postman/80'>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
