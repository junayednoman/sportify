import SectionContainer from "@/components/layout/SectionContainer";
import ContactForm from "./ContactForm";
import SContainer from "@/components/layout/SContainer";

const Contact = () => {
  return (
    <div className="py-4">
      <SectionContainer>
        <SContainer>
          <div className="flex lg:flex-row flex-col lg:gap-20 gap-12 items-center">
            <div className="lg:w-[47%] w-full">
              <h4 className="mb-4 md:text-3xl text-2xl font-semibold">
                Get In Touch
              </h4>
              <p className="text-[15px]">
                We'd love to hear from you! Whether you have a question about
                our products, need assistance with an order, or just want to
                share your feedback, our team is here to help.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786578.0346817595!2d90.35236365282786!3d23.678705522302277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c102e2ece5bb%3A0x446e9dc895326a70!2sBangladesh%20National%20Zoo!5e0!3m2!1sen!2sbd!4v1720615296387!5m2!1sen!2sbd"
                style={{ border: "0" }}
                // allowfullscreen=""
                loading="lazy"
                className="w-[100%] h-[300px] mt-4"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="lg:w-[47%] w-full">
              {/* <h4 className="mb-4 md:text-3xl text-2xl font-semibold">
                Send Us a Message
              </h4> */}
              <ContactForm />
            </div>
          </div>
        </SContainer>
      </SectionContainer>
    </div>
  );
};

export default Contact;
