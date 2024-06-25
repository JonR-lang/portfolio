import { useEffect } from "react";
import BreadcrumbComponent from "../components/Breadcrumb";
import { scrollToTop } from "../lib/utils";

const Contact = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <BreadcrumbComponent page='Contact' />
    </div>
  );
};

export default Contact;
