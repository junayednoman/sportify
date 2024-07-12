import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SButtonSmall from "@/components/ui/SButtonSmall";
import SInput from "@/components/ui/SInput";
import { Textarea } from "@/components/ui/textarea";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <SInput
              inputName={"name"}
              label={"Name"}
              placeholder={"Enter your name"}
              error={methods.formState.errors.name}
            />
          </div>
          <div>
            <SInput
              inputName={"email"}
              label={"Email"}
              placeholder={"Enter your email"}
              error={methods.formState.errors.email}
            />
          </div>
        </div>
        <div>
          <SInput
            inputName={"subject"}
            label={"Subject"}
            placeholder={"Enter subject"}
            error={methods.formState.errors.subject}
          />
        </div>
        <div>
          <label
            htmlFor={"message"}
            className="block text-sm text-gray-700 font-semibold mb-1"
          >
            Message
          </label>
          <Textarea
            className={`${
              methods.formState.errors.message &&
              "outline-red-600 outline-2 outline "
            }`}
            rows={6}
            {...methods.register("message")}
            placeholder="Type your message here."
          />
          {methods.formState.errors.message && (
            <p className="text-red-600 text-xs mt-1">
              {methods.formState.errors.message.message}
            </p>
          )}
        </div>
        <div>
          <SButtonSmall fullWidth={true}>Submit</SButtonSmall>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
