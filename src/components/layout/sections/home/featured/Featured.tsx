import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "@/components/ui/SectionHeader";
import SContainer from "@/components/layout/SContainer";
import SectionContainer from "@/components/layout/SectionContainer";
import ProductCard from "@/components/layout/product card/ProductCard";
import { useGetProductsQuery } from "@/redux/api/product/productApi";
import SLoading from "@/components/ux/SLoading";
import DataNotFound from "@/components/ux/DataNotFound";
import { TProduct } from "@/types";

const Featured = () => {
  const { data, isLoading, error } = useGetProductsQuery(
    { limit: 6, sort: "-createdAt" },
    { pollingInterval: 30000 }
  );

  if (isLoading) {
    return <SLoading />;
  }
  if (error) {
    if (error.status === 404) {
      return <DataNotFound />;
    }
    return (
      <div>
        <h4 className="font-semibold md:text-2xl text-xl">
          Failed to fetch data!
        </h4>
      </div>
    );
  }
  const products = data.data;

  return (
    <div className="py-2 bg-lightWhiteColor">
      <SContainer>
        <SectionContainer>
          <SectionHeader title="Featured Products" />
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent className="md:-ml-1 -ml-4">
              {products.map((product: TProduct, index: number) => (
                <CarouselItem
                  key={index}
                  className="md:pl-5 md:basis-1/2 lg:basis-1/4"
                >
                  <ProductCard key={index} product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </SectionContainer>
      </SContainer>
    </div>
  );
};

export default Featured;
