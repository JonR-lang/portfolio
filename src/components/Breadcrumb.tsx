import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/Breadcrumb";

import { Link } from "react-router-dom";

type BreadcrumbProp = {
  className?: string;
  paths?: string[];
  page?: string;
};

const BreadcrumbComponent = ({ className, paths, page }: BreadcrumbProp) => {
  return (
    <Breadcrumb className={`text-neutral-200 ${className}`}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {paths &&
          paths.length &&
          paths?.map((path, i) => (
            <BreadcrumbList key={i}>
              <BreadcrumbItem>
                <Link to={`/${path}`}>
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          ))}

        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
