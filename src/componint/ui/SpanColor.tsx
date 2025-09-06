import type { HTMLAttributes } from "react";

interface iprop extends HTMLAttributes<HTMLSpanElement>
{
    Color:string;
}


export const SpanColor = ({Color , ...rest } : iprop ) => {
  return (
    <span className="block rounded-full cursor-pointer w-5  h-5" 
     style={{backgroundColor:Color }} 
     {...rest}
     ></span>   
  )
}