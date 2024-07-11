import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductPagination = () => {
  return (
    <div className="mt-8">
      <Pagination className="items-center justify-between">
        <div className="items-center gap-3 md:flex hidden">
          <p> Items per page</p>
          <Select>
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder="6" />
            </SelectTrigger>
            <SelectContent className="max-w-[70px]">
              <SelectGroup>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="21">21</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p>Showing 0-6 of 34</p>
        </div>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductPagination;
