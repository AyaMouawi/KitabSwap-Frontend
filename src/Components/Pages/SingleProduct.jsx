import "../css/SingleProduct.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleProduct({saleBook, closeModal}) {

  let priceSection;

  if (saleBook.discount !== "-") {
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

  const addToCart = () => {
    const cartItem = {
      bookId: saleBook.saleBook_id,
      quantity: 1,
      totalPrice: saleBook.discountedPrice !== null
        ? saleBook.discountedPrice 
        : saleBook.originalPrice
    };
  
    try {
      const storedCart = localStorage.getItem("cart");
      const cart = storedCart ? JSON.parse(storedCart) : [];
      const isBookInCart = cart.some(item => item.bookId === cartItem.bookId);
  
      if (isBookInCart) {
        toast.warning("This book is already in your cart!");
      } else {
        cart.push(cartItem);
  
        localStorage.setItem("cart", JSON.stringify(cart));
  
        const storedCartDetails = localStorage.getItem("cartDetails");
        const cartDetails = storedCartDetails ? JSON.parse(storedCartDetails) : [];
  
        const isBookInDetails = cartDetails.some(item => item.saleBook_id === saleBook.saleBook_id);
  
        if (isBookInDetails) {
          toast.warning("This book is already in your cart!");
        } else {
          cartDetails.push(saleBook);
  
          localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
  
          toast.success("Product added to your cart successfully!", {
            onClose: () => {
              closeModal();
            }
          });
        }
      }
    } catch (error) {
      console.error("Error parsing or updating cart:", error);
      localStorage.setItem("cart", JSON.stringify([cartItem]));
  
      localStorage.setItem("cartDetails", JSON.stringify([saleBook]));
    }
  };
  
  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 justify-center gap-44 bg-white h-fit mb-4 SingleProduct-cont">
      <div className="h-fit SingleProduct-cont-mini">
        <div className="mr-11 italic mb-16   text-center flex ">
          <p className="text-5xl">All products / {saleBook.genreName}</p>
        </div>
        <img src={saleBook.book_image} alt="" className="w-[25rem] h-[35rem]" />
      </div>
   
      <div className="font-lateef mt-24 flex flex-col SingleProductData-cont">
      <div className="mb-5">
        <p className="text-6xl font-bold mb-4">{saleBook.title}</p>
        <p className="text-4xl font-love-light">{saleBook.authorName}</p>
      </div>

      {priceSection}
      <div className="mb-4 w-96 text-3xl">
      {saleBook.description}
        
      </div>

      <div className="mt-auto">
        <button className="bg-book text-white py-3 px-6  text-3xl w-full border border-book hover:bg-white hover:text-book hover: border-book " onClick={addToCart}>
         Add To Cart
        </button>
      </div>
    </div>
     
    </div>
  );
}

export default SingleProduct;
