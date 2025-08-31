import type { InputHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Iprop extends InputHTMLAttributes<HTMLInputElement> {}


// we used the ...rest to imped all the attributes like onclick and change the value and 
// all this stuff and we add it to the props
export const Input = ({ ...rest }: Iprop) => {
  return(
    <input className="border-[1px] border-gray-300 shadow-md
   focus:border-indigo-500 focus:outline-none focus:ring-1
   focus:ring-indigo-500 rounded-md px-3 py-3 text-md  "
     {...rest}  />
  )
  ;
};
