import SContainer from "@/components/layout/SContainer";
import LoginForm from "@/components/layout/sections/login/LoginForm";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login - Sportify | Equip your game</title>
      </Helmet>
      <SContainer>
        <div className="lg:mt-24 md:mt-16 mt-10">
          <div className="max-w-[570px] mx-auto md:p-7 p-4 border rounded-md">
            <LoginForm />
          </div>
        </div>
      </SContainer>
    </div>
  );
};

export default Login;
