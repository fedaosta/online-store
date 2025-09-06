interface iErorrMsg {
    title: string;
    description: string;
    imgeUrl: string;
    price: string;
  } 

export const ErrorTest = (product: {
  title: string;
  description: string;
  imgeUrl: string;
  price: string;
  // here we summend the props to this function
}) => {

  // here we defined all the errors messages withe interface
  const errors :iErorrMsg = {
      title: "",
      description: "",
      imgeUrl:"",
      price: "",
  }  ;

  const validUrl = /[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/.test(
    product.imgeUrl
  );

  if (
    // here if the condition true that mean we have an error in our error message object
    !product.title.trim() ||
    product.title.length < 5 ||
    product.title.length > 80
  ) {
    errors.title =
      "please inetr title that over 10 charechetr and less than 80";
  }

// in thes condation we need to think that all the thing we want 
// in reverse like we if the min lenght is 5 we need to write that 
// if over 5 charcter is true 


  // ----------------------------------xxxxxxxxxx----------------------------
  if (
    // here if the condition is true we have an error
    // in thie case we use the ! to flip "" falsy value to true to add an Error
    !product.description.trim() ||
    product.description.length < 5 ||
    product.description.length > 900
  ) {
    errors.description =
      "please inter description that over 10 charechetr and less than 900";
  }
    // ----------------------------------xxxxxxxxxx----------------------------
    // if the photo pass the test of validUrl than its true 
    // so we convert it to false using the ! sign 
    // cuz the condition is to colect the errors msg
  if (!product.imgeUrl.trim() || !validUrl) {
    errors.imgeUrl = "please inter valid image url";
  }
    // ----------------------------------xxxxxxxxxx----------------------------
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "price is required";
  }
  return errors;
};
