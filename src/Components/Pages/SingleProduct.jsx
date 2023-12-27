import SingleProductData from "../SingleProduct/SingleProductData";

import "../css/SingleProduct.css";

function SingleProduct() {
  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 justify-center gap-44 bg-white h-fit mb-4">
      <div className="h-fit">
        <div className="mr-11 italic mb-16   text-center flex ">
          <p className="text-5xl">All products / Fantasy</p>
        </div>
        <img src="Images/harrypotter1.webp" alt="" className="w-[25rem] h-[35rem]" />
      </div>
   
        <SingleProductData />
     
    </div>
  );
}

export default SingleProduct;
