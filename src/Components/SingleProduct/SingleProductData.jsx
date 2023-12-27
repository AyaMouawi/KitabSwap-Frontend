function SingleProductData() {
  return (
    <div className="font-lateef mt-24 flex flex-col">
      <div className="mb-5">
        <p className="text-6xl font-bold mb-4">Harry Potter</p>
        <p className="text-4xl font-love-light">Jk Rowling</p>
      </div>

      <div className="italic text-3xl mb-12">30 $</div>
      <div className="mb-4 w-96 text-3xl">
        Description about the product description about the product description
        
      </div>

      <div className="mt-auto">
        <button className="bg-book text-white py-3 px-6  text-3xl w-full  ">
         Add To Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProductData;