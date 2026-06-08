const Input = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="relative">
      <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF] font-semibold">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-11 border border-gray-300 rounded-md px-3 outline-none bg-transparent "
      />
    </div>
  );
};

export default Input;
