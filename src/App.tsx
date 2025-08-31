import { useState, type ChangeEvent } from "react";
import "./App.css";
import Card from "./componint/Card";
import { formInputList, productList } from "./componint/ProductList";
import Modal from "./componint/ui/Moudle";
import { Input } from "./componint/ui/Input";
import type { Iproduct } from "./componint/Interface";
function App() {
  //

  const [isOpen, setIsOpen] = useState(false);

  // this varibles is for holding the data from the input
  // inside varible when we use the onchanged attributes
  const [porduct, setproduct] = useState<Iproduct>({
    title: "",
    description: "",
    imgeUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imgUrl: "",
    },
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  
  }
  // here we use then chaneg event to let the type script to know the type of our function
  const onChangeHandler = (event: ChangeEvent<HTMLInputElemen>) => {
    // here i bring the name and the value of each filed and add it to my product obj
    const { value, name } = event.target;
    setproduct({ ...porduct, [name]: value });
  };
  // here we send the data to the componint as props
  const renderProductList = productList.map((product) => (
    <Card key={product.id} product={product} open={open} />
  ));

  const renderProductForm = formInputList.map((input) => (
    <div className=" flex flex-col">
      <label className="mb-[3px]" htmlFor={input.id}>
        {input.label}
      </label>

      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        // here we made loop we summend the elemnt who has the input.name from product to use
        // and while we move in the form list from the title until the description 
        // but we need to but in the interface of form list to let know that we only use 
        // this three value that we give in data 
        value={porduct[input.name]}
        onChange={onChangeHandler}
      />
  
    </div>
  ));



  return (
    <>
      <main className="container mx-auto w-[90%]  rounded-xl mt-8 p-2 ">
        <button
          className="bg-indigo-700 w-full text-white h-20 cursor-pointer rounded-md "
          onClick={open}
        >
          Add
        </button>
        <div className="  m-auto grid  grid-cols-1 md:grid-cols-2  xl:grid-cols-4">
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} close={close} title="Add new product">
          <form action="#" className="space-y-3">
            {renderProductForm}
            <div className="flex justify-between space-x-3">
              <button
                className=" bg-indigo-700 hover:bg-indigo-600 w-full cursor-pointer  h-11 mt-2  text-white rounded-md "
                onClick={close}
              >
                Add
              </button>
              <button
                className="bg-gray-400 hover:bg-gray-500  h-11 mt-2  cursor-pointer w-full rounded-md text-white "
                onClick={close}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </main>
    </>
  );
}

export default App;
