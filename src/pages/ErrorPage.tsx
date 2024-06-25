import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const { resetBoundary } = useErrorBoundary();
  const navigate = useNavigate();

  return (
    <div className='w-full flex items-center justify-center min-h-[calc(100vh-100px)] font-montserrat'>
      <div className='flex flex-col items-center text-neutral-300 translate-y-[-50px]'>
        <p className='font-bold text-3xl text-center'>
          Something Went Wrong {":("}
        </p>
        <div className='flex gap-3 flex-col w-full md:flex-row mt-3'>
          <button
            onClick={resetBoundary}
            className='p-3 border border-neutral-500 w-full max-w-xs hover:border-postman/80 focus:outline-none focus:border-postman/80'>
            Retry
          </button>
          <button
            onClick={() => navigate("/")}
            className='p-3 border border-neutral-500 w-full max-w-xs hover:border-postman/80 focus:outline-none focus:border-postman/80'>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
