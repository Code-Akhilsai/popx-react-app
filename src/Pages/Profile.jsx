import profile_pic from "../assets/profile_pic.png";
import cam_icon from "../assets/icon.png";
const Profile = () => {
  return (
    <div className="h-160 bg-[#F7F8F9] sm:h-167 sm:w-90 sm:border sm:border-gray-300">
      <div className="bg-white px-5 py-5 shadow-[0px_3px_6px_rgba(0,0,0,0.03)]">
        {" "}
        <h1 className="text-[18px] font-medium text-[#1D2226]">
          Account Settings
        </h1>
      </div>

      <div className="px-5 py-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src={profile_pic}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />

            <button className="absolute bottom-0 right-0 w-5 h-5 bg-[#6C25FF] rounded-full flex items-center justify-center">
              <img src={cam_icon} />
            </button>
          </div>

          <div>
            <h2 className="font-semibold text-[#1D2226]">Marry Doe</h2>

            <p className="text-sm text-[#1D2226]">Marry@gmail.com</p>
          </div>
        </div>

        <p className="mt-6 text-[13.5px] text-[#1D2226] leading-6 opacity-100 font-semibold">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam.
        </p>
      </div>

      <div className="border-b border-dashed border-gray-300"></div>

      <div className="flex-1"></div>

      <div className="border-b border-dashed border-gray-300"></div>
    </div>
  );
};

export default Profile;
