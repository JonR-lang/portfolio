import { useEffect } from "react";

type ToastProp = {
  variant: "destructive" | "outline";
  header?: string;
  description: string;
  className?: string;
  closeToast: () => void;
};

const Toast = ({
  variant,
  header,
  description,
  className,
  closeToast,
}: ToastProp) => {
  const variantClass =
    variant === "destructive"
      ? "bg-red-500 text-neutral-200"
      : "bg-white text-neutral-700";

  useEffect(() => {
    setTimeout(closeToast, 3000);
  }, []);

  return (
    <div
      className={`p-2 py-3 fixed top-4 md:top-auto md:bottom-5 right-4 left-4 md:left-auto md:max-w-xs rounded-md z-[9999] ${variantClass} ${className}`}>
      {header && <p className='font-semibold text-lg'>{header}</p>}
      <p>{description}</p>
    </div>
  );
};

export default Toast;
