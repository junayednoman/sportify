import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

type TSBreadCrumbItem = {
  label: string;
  url: string;
};
type TSBreadCrumbsProps = {
  pages: TSBreadCrumbItem[];
  currentPage: string;
};

const SBradCrumbs = ({ pages, currentPage }: TSBreadCrumbsProps) => {
  return (
    <div className="my-8">
      <Breadcrumb>
        <BreadcrumbList className="text-base">
          {pages.map((page: TSBreadCrumbItem) => (
            <>
              <BreadcrumbItem className="text-primaryColor">
                <Link to={page.url}>{page.label}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primaryColor" />
            </>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage className="text-blackColor">{currentPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default SBradCrumbs;
