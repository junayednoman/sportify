import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BannerItem from "./banner/BannerItem";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  return (
    <div className="bg-lightWhiteColor md:mt-8 mt-5">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2400,
            stopOnInteraction: true,
          
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <BannerItem
              heading={"Summer Sports Sale!"}
              subHeading={"Get Up to 50% Off on All Sporting Goods"}
              para="Don't miss out on our biggest summer sale yet! Whether you're gearing up for cricket, football, basketball, or any other sport, now's the time to upgrade your equipment. "
              btn={"Shop Now"}
              bgClass="banner-1"
            />
          </CarouselItem>
          <CarouselItem>
            <BannerItem
              heading={"Score Big Savings!"}
              subHeading={"Exclusive Discounts on Cricket, Football, and More"}
              para="Unlock unbeatable prices on your favorite sports gear. From cricket bats to footballs and beyond, we've got everything you need to play your best game."
              btn={"Grab the Deal"}
              bgClass="banner-2"
            />
          </CarouselItem>
          <CarouselItem>
            <BannerItem
              heading={"Limited Time Offer!"}
              subHeading={"Enjoy Up to 40% Off on Your Favorite Sports Gear"}
              para="Act fast and save big on top-tier sports equipment. Our limited-time offer brings you incredible savings on gear for cricket, football, basketball, golf, badminton, hockey, and baseball."
              btn={"Shop Now"}
              bgClass="banner-3"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Banner;
