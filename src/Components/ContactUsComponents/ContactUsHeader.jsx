import "../css/footer.css";
import "../css/ContactUsHeader.css";
function ContactUsHeader() {
  return (
    <div className="contactUsHeader-cont font-lateef pt-12 px-24">
   
            <p href="" className="text-6xl italic  mb-16 font-medium pl-4 contactUs-title">
              Contact Us
            </p>

      <div className="max-w-screen flex  p-4 pt-0 contactUs-mini">
        <div className="w-1/3 contactUs-mini-socials">

          <table className="Footer-Socials contactUs-socials-table ">
            <tr>
              <td className="Footer-Socials flex items-center">
                <img
                  src="../Images/Icons/location 1.png"
                  className="content-center footer-socials-img"
                  alt=""
                />
                <p className="ml-2 text-3xl">Betchay, Baabda, Lebanon</p>
              </td>
            </tr>
            <tr>
              <td className="Footer-Socials flex items-center">
                <img
                  src="../Images/Icons/mail 1.png"
                  className="content-center footer-socials-img"
                  alt=""
                />
                <p className="ml-2 text-3xl">kitabswap.leb@gmail.com</p>
              </td>
            </tr>
            <tr>
              <td className="Footer-Socials flex items-center">
                <img
                  src="../Images/Icons/insta 1.png"
                  className="content-center footer-socials-img"
                  alt=""
                />
                <p className="ml-2 text-3xl">@kitabswap.leb</p>
              </td>
            </tr>
            <tr>
              <td className="Footer-Socials flex items-center">
                <img
                  src="../Images/Icons/facebook 1.png"
                  className="content-center footer-socials-img"
                  alt=""
                />
                <p className="ml-2 text-3xl">@kitabswap.leb</p>
              </td>
            </tr>
          </table>
        </div>
  
        <div className="w-2/3 contactus-img-cont">
          <img
            src="../Images/ContactPic.png"
            alt="Hero Image"
  
            className="w-full ContactUsHeader-img"
          />
           <img
            src="../Images/ContactPicRes.png"
            alt="Hero Image"
          
            className="w-full ContactUsHeader-img-resp"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUsHeader;
