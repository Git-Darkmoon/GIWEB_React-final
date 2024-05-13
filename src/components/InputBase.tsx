import { InputProps } from "@/types/InputProps"

function InputBase({
  id,
  label,
  icon,
  type,
  placeholder,
  registerFn,
}: InputProps & React.HTMLProps<HTMLInputElement>) {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-base lg:text-lg font-medium text-primary "
      >
        {label}
      </label>
      <div className="relative ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-300">
          {icon}
        </div>
        <input
          type={type}
          id={id}
          className=" text-base rounded-lg block w-full pl-10 p-2.5 bg-blacky border-2 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          {...registerFn(id)}
        />
      </div>
    </>
  )
}
export default InputBase
