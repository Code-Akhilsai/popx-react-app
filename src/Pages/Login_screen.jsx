import { useNavigate } from "react-router-dom";
import Input from "../Components/Input.jsx";
const Login_screen = () => {
  const nav_profile = useNavigate();

  return (
    <div className="h-160 bg-[#F7F8F9] px-5 pt-10 sm:border sm:border-gray-300 sm:h-167 sm:w-90 ">
      <h1 className="text-[28px] font-bold text-[#1D2226] leading-tight">
        Signin to your
        <br />
        PopX account
      </h1>

      <p className="text-[#1D2226] opacity-60 text-[18px] mt-3 font-medium">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <div className="mt-8 space-y-5">
        <Input label="Email Address" placeholder="Enter email address" />

        <Input label="Password" type="password" placeholder="Enter password" />

        <button
          onClick={() => nav_profile("/profile")}
          className="w-full h-11 bg-[#CBCBCB] text-white rounded-md font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login_screen;
