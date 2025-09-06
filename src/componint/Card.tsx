import type { Iproduct } from "./Interface";
import {Button} from "./ui/Button";
import { txtSlicer } from "./util/functions";
interface iprops {
  // here the interface is external and we add to it the open model function
  product: Iproduct;
  openModel: () => void;
}
// here we ned to get the data as props from the app
//and this props have the same interface in the database
// the function txtslicer is the function that we use to minimize the text
// leters under the numbe we send and the default is 50 leter

const Card = ({ product, openModel  }: iprops) => {
  const { title, description, imgeUrl, category, colors, price } = product;
  return (
    <div className="  flex flex-col   border border-gray-200 rounded-md mx-2 my-2   p-2">
      <img
        src={imgeUrl}
        alt="the product image"
        className="object-fill rounded-md w-full  h-[70%]"
      />
      <div className=" p-3">
        <h1 className="mb-2">{title} </h1>
        <p>{txtSlicer(description, 50)}</p>
        <div className="flex space-x-2 my-2 ">
          <span className={` rounded-full w-4  h-4`} style={{backgroundColor:colors[0]}} />
          <span className=" rounded-full w-4  h-4"style={{backgroundColor:colors[1]}} />
          <span className=" rounded-full w-4 h-4"style={{backgroundColor:colors[2]}} />
        </div>
        <div className="flex justify-between items-center mb-4 ">
          <h1 className="text-indigo-700 font-bold text-[20px] ">${price}</h1>
          <img
            src={category.imgUrl}
            alt={category.name}
            className="w-14 h-14 rounded-full"
          />
        </div>
        <div className="btn flex flex-row h-11 mt-2 space-x-2">
          <Button classname={" bg-indigo-700"} width={"w-full"} onClick={openModel}>
            EDITE
          </Button>
          <Button classname={" bg-red-600"} width={"w-full"}>
            DELETE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
