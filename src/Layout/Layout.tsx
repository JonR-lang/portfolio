import Footer from "../components/Footer";
import Header from "../components/Header";
import { Toaster } from "../components/ui/toaster";

const Layout = ({
  children,
  className,
}: { children: React.ReactNode } & { className: string }) => {
  return (
    <div className={className}>
      <Header />
      <div className="min-h-[calc(100vh-100px)] px-[1.5rem]">{children}</div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
