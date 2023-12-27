import "../css/homebanner.css"

function HomeBanner() {
  return (
    <div className="w-full flex items-center justify-center  font-lateef font-light">
        <div className="HomeBanner-container-mini flex items-center justify-between  w-full mx-24 mb-12">
    <div className="HomeBanner-title-btn ml-32 mt-auto mb-7 ">
        <h1 className="text-4xl mb-4 w-[32rem]">Checkout our selection of discounted Christmas gifts</h1>
        <button className="bg-book text-white py-2 px-4 border border-book w-fit text-3xl inline-block font-extralight  mb-5">
        Discover Now
          </button>
    </div>
    <div>
        <img src="../Images/BannerPic.png" alt="" className="HomeBanner-img mr-24" />
    </div>
    </div>
</div>
  );
}

export default HomeBanner;
