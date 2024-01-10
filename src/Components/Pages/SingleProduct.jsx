import "../css/SingleProduct.css";

function SingleProduct({saleBook}) {

  let priceSection;

  if (saleBook.discount !== null && saleBook.discount !== 0 && saleBook.discount !== 0.00) {
    priceSection = (
      <div className="flex">
        <h4 className="italic text-3xl mb-12" style={{ textDecoration: 'line-through', color: 'red', marginRight: '8px' }}>
          ${saleBook.price}
        </h4>
        <h4 className="italic text-3xl mb-12" style={{ color: 'green' }}>
          ${saleBook.discountedPrice}
        </h4>
      </div>
    );
  } else {
    priceSection = <div className="italic text-3xl mb-12">{saleBook.price}$</div>;
  }

  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 justify-center gap-44 bg-white h-fit mb-4">
      <div className="h-fit">
        <div className="mr-11 italic mb-16   text-center flex ">
          <p className="text-5xl">All products / {saleBook.genreName}</p>
        </div>
        <img src={saleBook.book_image} alt="" className="w-[25rem] h-[35rem]" />
      </div>
   
      <div className="font-lateef mt-24 flex flex-col">
      <div className="mb-5">
        <p className="text-6xl font-bold mb-4">{saleBook.title}</p>
        <p className="text-4xl font-love-light">{saleBook.authorName}</p>
      </div>

      {priceSection}
      <div className="mb-4 w-96 text-3xl">
      {saleBook.description}
        
      </div>

      <div className="mt-auto">
        <button className="bg-book text-white py-3 px-6  text-3xl w-full  ">
         Add To Cart
        </button>
      </div>
    </div>
     
    </div>
  );
}

export default SingleProduct;
