function SingleTradeData({openRequestModal}) {
    return (
      <div className="font-lateef mt-24 flex flex-col">
        <div className="mb-5">
          <p className="text-6xl font-bold mb-4">Harry Potter</p>
          <p className="text-4xl font-love-light">Jk Rowling</p>
         <div className="flex items-center"> <p className="text-4xl italic mb-2 underline">Owner: </p><span className="text-3xl ml-2 italic"> Name</span></div>
         <div className="flex items-center"> <p className="text-4xl italic mb-2 underline">Email: </p> <span className="text-3xl ml-2  italic"> owner@gmail.com</span></div>
         <div className="flex items-center"> <p className="text-4xl italic mb-2 underline">Phone: </p> <span className="text-3xl ml-2  italic"> 123456</span></div>
         <div className="flex items-center"> <p className="text-4xl italic underline">Location: </p> <span className="text-4xl ml-2  italic"> Beirut</span></div> 
        </div>
  

        <div className="mb-4 w-96 text-3xl">
          Description about the product description about the product description
          
        </div>
  
        <div className="mt-auto">
          <button className="bg-book text-white py-3 px-6  text-3xl w-full" onClick={openRequestModal}>
           Request to Trade
          </button>
        </div>
        
      </div>
    );
  }
  
  export default SingleTradeData;