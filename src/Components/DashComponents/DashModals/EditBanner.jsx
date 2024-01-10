import { useState } from 'react';


function EditBanner({closeEditBannerModal }) {
   

    const handleSubmit = () => {
        closeEditBannerModal();
     }
  

    return ( 
        <div className='font-lateef w-[32rem]'>
            <p className="text-book text-3xl text-center underline my-5">Middle Banner</p>
            <div className="text-center">
                <form className="py-4" onSubmit={handleSubmit}>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            placeholder="Text"
                            // value={}
                            // onChange={}
                            defaultValue={"Checkout our selection of discounted christmas gifts"}
                            className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black w-full"
                        />
                    </div>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            placeholder="Button text"
                            // value={}
                            // onChange={}
                            defaultValue={"Discover"}
                            className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black uppercase w-full"
                        />
                    </div>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            placeholder="Link"
                            // value={}
                            // onChange={}
                            defaultValue={"www.kitabswap.com"}
                            className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                        />
                    </div>

                    {/* {error && <p className="text-red-700 text-sm">{error}</p>} */}
                    <div className="flex justify-end">
                    <button className="text-book border border-book px-4 py-2 hover:bg-book hover:text-white text-xl">
              Submit
            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditBanner;
