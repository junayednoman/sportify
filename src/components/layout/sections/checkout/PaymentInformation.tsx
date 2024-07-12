import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PaymentInformation = () => {
  return (
    <div>
      <h4 className="md:text-2xl font-semibold text-xl">Payment Information</h4>
      <div className="mt-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-lightWhiteColor rounded-md px-3 hover:decoration-0">
              <p className="hover:text-primaryColor duration-200">
                Cash On Delivery
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-lightWhiteColor p-4 rounded-md mt-2">
                At Sportify, we offer the convenience of Cash on Delivery (COD)
                for your purchases. Simply place your order online and pay in
                cash when it is delivered to your doorstep. Enjoy a secure and
                hassle-free shopping experience with our COD option.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PaymentInformation;
