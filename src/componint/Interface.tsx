export interface Iproduct {
  id?: string | undefined;

  title: string;

  description: string;

  imgeUrl: string;

  price: string;

  colors: string[];

  category: {
    name: string;
    imgUrl: string;
  };
}
export interface iFormInputList {
  id: string;
  name:"title" | "description"|"imgeUrl"|"price" ;
  label:string;
  type:string;
}
