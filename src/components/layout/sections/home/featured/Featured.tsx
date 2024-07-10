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

const products = [
  {
    name: "Pro Elite Cricket Bat",
    category: "Cricket",
    quantity: 20,
    brand: "Sportify",
    rating: 4.8,
    price: 150.0,
    description:
      "The Pro Elite Cricket Bat is crafted from premium English willow, designed for players who demand power and precision. Its lightweight build and robust sweet spot ensure exceptional performance, whether you're playing in a local match or on the professional stage. The bat features a sleek design, superior grip, and outstanding balance, making it a top choice for cricket enthusiasts.",
    image:
      "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713",
    tag: "20% Off",
  },
  {
    name: "Goal Master Football",
    category: "Football",
    quantity: 35,
    brand: "Sportify",
    rating: 4.5,
    price: 40.0,
    description:
      "The Goal Master Football is designed for optimum performance and durability. Made from high-quality synthetic leather, this football provides excellent control and feel. It's perfect for both training sessions and competitive matches. Get ready to score big with the Goal Master!",
    image:
      "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713",
    tag: "New Arrival",
  },
  {
    name: "Slam Dunk Basketball",
    category: "Basketball",
    quantity: 15,
    brand: "Sportify",
    rating: 4.7,
    price: 35.0,
    description:
      "Take your game to the next level with the Slam Dunk Basketball. Engineered with deep channels and a composite cover, it offers superior grip and control. Whether you're playing on indoor courts or outdoor surfaces, this basketball ensures a consistent and reliable performance.",
    image:
      "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713",
    tag: "10% Off",
  },
  {
    name: "Precision Golf Clubs Set",
    category: "Golf",
    quantity: 10,
    brand: "Sportify",
    rating: 4.9,
    price: 300.0,
    description:
      "Enhance your golfing experience with the Precision Golf Clubs Set. This complete set includes everything you need to dominate the course, from drivers to putters. Crafted with advanced materials and technology, these clubs deliver exceptional distance, accuracy, and control.",
    image:
      "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713",
    tag: "Best Seller",
  },
  {
    name: "Precision Golf Clubs Set",
    category: "Golf",
    quantity: 10,
    brand: "Sportify",
    rating: 4.9,
    price: 300.0,
    description:
      "Enhance your golfing experience with the Precision Golf Clubs Set. This complete set includes everything you need to dominate the course, from drivers to putters. Crafted with advanced materials and technology, these clubs deliver exceptional distance, accuracy, and control.",
    image:
      "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713",
    tag: "Best Seller",
  },
  {
    name: "Precision Golf Clubs Set",
    category: "Golf",
    quantity: 10,
    brand: "Sportify",
    rating: 4.9,
    price: 300.0,
    description:
      "Enhance your golfing experience with the Precision Golf Clubs Set. This complete set includes everything you need to dominate the course, from drivers to putters. Crafted with advanced materials and technology, these clubs deliver exceptional distance, accuracy, and control.",
    image:
      "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713",
    tag: "Best Seller",
  },
  {
    name: "Precision Golf Clubs Set",
    category: "Golf",
    quantity: 10,
    brand: "Sportify",
    rating: 4.9,
    price: 300.0,
    description:
      "Enhance your golfing experience with the Precision Golf Clubs Set. This complete set includes everything you need to dominate the course, from drivers to putters. Crafted with advanced materials and technology, these clubs deliver exceptional distance, accuracy, and control.",
    image:
      "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713",
    tag: "Best Seller",
  },
  {
    name: "Precision Golf Clubs Set",
    category: "Golf",
    quantity: 10,
    brand: "Sportify",
    rating: 4.9,
    price: 300.0,
    description:
      "Enhance your golfing experience with the Precision Golf Clubs Set. This complete set includes everything you need to dominate the course, from drivers to putters. Crafted with advanced materials and technology, these clubs deliver exceptional distance, accuracy, and control.",
    image:
      "https://cricketstoreonline.com/cdn/shop/files/2A24410-Aura-Pro__93869.1704735009.600.600.jpg?v=1708097393&width=713",
    tag: "Best Seller",
  },
];

const Featured = () => {
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
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="md:pl-5 md:basis-1/2 lg:basis-1/4"
                >
                  <ProductCard
                    key={index}
                    tag={product.tag}
                    name={product.name}
                    category={product.category}
                    quantity={product.quantity}
                    brand={product.brand}
                    rating={product.rating}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                  />
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
