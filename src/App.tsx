import { useState, type ChangeEvent, type FormEvent } from "react";
import "./App.css";
import Card from "./componint/Card";
import { colors, formInputList, productList } from "./componint/Data";
import Modal from "./componint/ui/Moudle";
import { Input } from "./componint/ui/Input";
import type { Iproduct } from "./componint/Interface";
import { ErrorTest } from "./validation/ErrorTest";
import ErrorMsg from "./componint/ui/ErrorMsg";
import { SpanColor } from "./componint/ui/SpanColor";

function App() {

  const defaultProductValue = {
    title: "",
    description: "",
    imgeUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imgUrl: "",
    }
  };



  //____________________________________USE STATE____________________________________________

  const [isOpen, setIsOpen] = useState(false);

  // this varibles is for holding the data from the input
  // inside varible when we use the onchanged attributes
  const [porduct, setproduct] = useState<Iproduct>(
    {
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
  // this for stor the errors that we summend in the submit functoin 
  const [errors, Seterrors] = useState({
    title: "",
    description: "",
    imgeUrl: "",
    price: "",
  })
  const [TempColor, SetTempColor] = useState<string[]>([])


  // _____________________________HANDLER FUNCTIONS____________________________________________

  const openModel = () => setIsOpen(true);

  const closeModel = () => setIsOpen(false);

  const onCancel = () => {
    // this is to reset the filedes
    setproduct(defaultProductValue);
    closeModel()
  }
  // here we use then chaneg event to let the type script to know the type of our function
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // here i bring the name and the value of each filed and add it to my product obj
    const { value, name } = event.target;
    setproduct(
      { ...porduct, [name]: value },
    );
    // here is for update the errore state and the name that we use here 
    // is the name of the filed like 
    //   title: string;  description: string;  imgeUrl: string;  price: string;

    Seterrors({
      ...errors,
      [name]: "",
    })
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const error = ErrorTest({
      title: porduct.title,
      description: porduct.description, imgeUrl: porduct.imgeUrl, price: porduct.price
    })
    //this is for test the errors to send the data to the servevr
    // and its return boolean value  
    const hasErrorMsg = Object.values(error).some((value) => value === "")
      && Object.values(error).every((value) => value === "")
    // console.log(TestError)

    // here if we have error we store them inside the Seterrrors state 
    if (!hasErrorMsg) {
      Seterrors(error);
      return
    }
    // here we can write tha api to send tha data
    console.log("send to the server")
  }



  // ______________________________________RENDER_______________________________________________________
  // here we send the data to the componint as props
  const renderProductList = productList.map((product) => (
    <Card key={product.id} product={product} openModel={openModel} />
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

      <ErrorMsg Msg={errors[input.name]} />

    </div>
  ));

  const renderColor = colors.map((item) => <SpanColor key={item} Color={item}
    onClick={() => {
      if (TempColor.includes(item)) { SetTempColor(TempColor.filter((color) => color !== item)) }
      else { SetTempColor(prev => [...prev, item]) }

    }}

  />)
  const renderTempColor = TempColor.map((item) => <span className="rounded-md block cursor-pointer text-white p-1 text-center  h-6"
   style={{ backgroundColor: item }} key={item}
   onClick={()=>{
    SetTempColor(TempColor.filter((color)=> color !==item ))
   }}
   >{item}</span>)
  // _________________________________THE RETURN APP_______________________________________________
  return (
    <>
      <main className="container mx-auto w-[90%]  rounded-xl mt-8 p-2 ">
        <button
          className="bg-indigo-700 w-full text-white h-20 cursor-pointer rounded-md "
          onClick={openModel}
        >
          Add
        </button>
        <div className="  m-auto grid  grid-cols-1 md:grid-cols-2  xl:grid-cols-4">
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} close={close} title="Add new product">
          <form action="#" onSubmit={submitHandler} className="space-y-3">
            {renderProductForm}
           <div className="tempColor   flex flex-wrap space-x-2 space-y-2 ">
            {renderTempColor}
            </div>
            <div className="spanColor flex flex-wrap justify-between space-x-2 ">
              {renderColor}
            </div>
            <div className="flex justify-between space-x-3">
              <button
                className=" bg-indigo-700 hover:bg-indigo-600 w-full cursor-pointer  h-11 mt-2  text-white rounded-md "
                onClick={onCancel}
              >
                Add
              </button>
              <button
                className="bg-gray-400 hover:bg-gray-500  h-11 mt-2  cursor-pointer w-full rounded-md text-white "
                onClick={onCancel}
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
