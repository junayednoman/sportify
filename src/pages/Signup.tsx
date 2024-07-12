import SContainer from "@/components/layout/SContainer";
import SignUpForm from "@/components/layout/sections/sign up/SignUpForm";
import { Helmet } from "react-helmet";

const Signup = () => {
  return (
    <div>
      <Helmet>
        <title>Sign Up - Sportify | Equip your game</title>
      </Helmet>
      <SContainer>
        <div className="lg:mt-24 md:mt-16 mt-10">
          <div className="max-w-[570px] mx-auto md:p-7 p-4 border rounded-md">
            <SignUpForm />
          </div>
        </div>
      </SContainer>
    </div>
  );
};

export default Signup;
