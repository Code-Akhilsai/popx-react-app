import { useNavigate } from "react-router-dom";

const Landing_screen = () => {
  const nav = useNavigate();

  return (
    <div className="flex flex-col justify-end h-160 bg-[#F7F8F9] px-5 pb-6  sm:border sm:border-gray-300 sm:h-167 sm:w-90 sm:pb-8">
      <h1 className="text-[24px] font-bold text-[#1D2226] opacity-100">
        Welcome to PopX
      </h1>

      <p className="text-[#1D2226] text-[15px] mt-2 opacity-60 font-semibold">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <button
        onClick={() => nav("/signup")}
        className="w-full h-11 bg-[#6C25FF] text-white rounded-md mt-5 font-semibold text-[15px]"
      >
        Create Account
      </button>

      <button
        onClick={() => nav("/login")}
        className="w-full h-11 bg-[#6C25FF4B] text-[#1D2226] rounded-md mt-3 font-semibold text-[15px]"
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Landing_screen;
