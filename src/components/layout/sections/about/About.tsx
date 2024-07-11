import SContainer from "../../SContainer";
import SectionContainer from "../../SectionContainer";
import Features from "../home/features/Features";
import OurTeam from "./OurTeam";
import aboutImg from "@/assets/images/Sport_balls.svg.png";

const About = () => {
  return (
    <>
      <SContainer>
        <SectionContainer>
          <div className="flex items-center gap-10">
            <div className="lg:w-[56%] w-full">
              <h4 className="md:text-4xl text-3xl font-semibold mb-3">
                About Us
              </h4>
              <p className="">
                Welcome to Sportify, your premier destination for top-quality
                sporting goods! Established in 2024, Sportify was founded by a
                group of sports enthusiasts who recognized the need for a
                reliable, customer-focused sports equipment provider. Our
                passion for sports drives us to source and offer the best
                equipment and accessories for cricket, football, basketball,
                golf, badminton, hockey, and baseball. We believe that access to
                high-quality gear can significantly enhance performance and
                enjoyment in any sport, and we are committed to providing our
                customers with products that meet the highest standards of
                quality and durability.
              </p>
              <p className="mt-3 ">
                At Sportify, we understand that every athlete, from beginners to
                professionals, deserves the best equipment to achieve their
                goals. Our extensive range of products is carefully curated to
                cater to the diverse needs of our customers, ensuring that you
                find exactly what you need to excel in your sport. We pride
                ourselves on our excellent customer service and are always here
                to assist you with any queries or concerns.
              </p>
            </div>
            <div className="w-[40%] lg:block hidden">
              <img className="w-[70%] mx-auto" src={aboutImg} alt="" />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div>
            <h4 className="md:text-4xl text-3xl font-semibold mb-3">
              Our Mission
            </h4>
            <p className="lg:text-lg">
              At Sportify, our mission is to empower athletes of all levels by
              providing superior sports equipment and exceptional customer
              service. We are dedicated to fostering a community where sports
              enthusiasts can find the best products, share their passion, and
              continuously improve their skills. Our commitment to quality,
              innovation, and customer satisfaction drives us to constantly seek
              new ways to enhance the sporting experience for our customers.
            </p>
            <p className="mt-3 lg:text-lg">
              We believe that sports have the power to bring people together,
              inspire greatness, and promote a healthy lifestyle. By offering
              high-quality products and expert advice, we aim to make sports
              accessible and enjoyable for everyone. Our mission is not just
              about selling equipment; it's about supporting athletes in their
              pursuit of excellence and helping them achieve their personal
              best.
            </p>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div>
            <h4 className="md:text-4xl text-3xl font-semibold mb-3">
              Our Vision
            </h4>
            <p className="lg:text-lg">
              Our vision at Sportify is to become the leading provider of
              sporting goods globally, known for our commitment to quality,
              innovation, and community engagement. We strive to create a world
              where every athlete, regardless of their level of experience, has
              access to the best sports equipment and resources they need to
              succeed.
            </p>
            <p className="mt-3 lg:text-lg">
              We envision Sportify as a hub for the global sports community,
              where athletes can connect, share their experiences, and inspire
              each other to push their limits. By continuously expanding our
              product range and enhancing our services, we aim to stay ahead of
              the curve and set new standards in the sporting goods industry.
            </p>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div>
            <h4 className="md:text-4xl text-3xl font-semibold mb-3">
              Get in Touch
            </h4>
            <p className="lg:text-lg">
              We value our customers and are always here to help you with any
              questions, comments, or concerns. Our dedicated support team is
              ready to assist you and ensure that your experience with Sportify
              is nothing short of excellent.
            </p>
            <p className="mt-3 lg:text-lg">
              <strong>Email:</strong> support@sportify.com
            </p>
            <p className="mt-3 lg:text-lg">
              <strong>Phone:</strong> +880-1234-567890
            </p>
            <p className="mt-3 lg:text-lg">
              <strong>Address:</strong> 123 Sportify Avenue, Dhaka, Bangladesh
            </p>
          </div>
        </SectionContainer>
      </SContainer>
      <OurTeam />
      <Features />
    </>
  );
};

export default About;
