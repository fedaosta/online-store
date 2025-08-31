import type { ButtonHTMLAttributes, ReactNode } from "react";

interface iprop extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
  children: ReactNode;
  width: "w-full" | "w-fit";
}

export const Button = ({ classname, children, width, ...rest }: iprop) => {
  return (
    <button
      className={`${classname} ${width}  cursor-pointer text-white rounded-md`}
      //    here the rest to accept all the funcation that we add without using the iprop
      {...rest}
    >
      {children}
    </button>
  );
};



