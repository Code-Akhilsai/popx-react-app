import { useNavigate } from "react-router-dom";
import Input from "../Components/Input.jsx";
const Signup_screen = () => {
  const nav_profile = useNavigate();

  return (
    <div className=" h-160 bg-[#F7F8F9] px-5 pt-10 flex flex-col sm:border sm:border-gray-300 sm:h-167 sm:w-90 sm:pb-8">
      <h1 className="text-[28px] font-bold text-[#1D2226] leading-tight opacity-100">
        Create your
        <br />
        PopX account
      </h1>

      <div className="mt-8 space-y-5">
        <Input label="Full Name*" />
        <Input label="Phone number*" />
        <Input label="Email address*" />
        <Input label="Password*" type="password" />
        <Input label="Company name" />

        <div>
          <p className="text-[13px] text-[#1D2226] font-semibold opacity-100">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>

          <div className="flex gap-6 mt-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                defaultChecked
                className="accent-[#6C25FF]"
              />
              <span>Yes</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="agency" className="accent-[#6C25FF]" />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={() => nav_profile("/profile")}
        className="mt-auto mb-5 w-full h-12 bg-[#6C25FF] text-white rounded-md font-semibold"
      >
        Create Account
      </button>
    </div>
  );
};

export default Signup_screen;
