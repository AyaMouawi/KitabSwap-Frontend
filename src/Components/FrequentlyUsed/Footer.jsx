import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 pt-8 md:pt-16 pb-4 px-4 md:px-10">
      <div className="Footer-Description w-full md:w-1/3 text-center md:text-left">
        <img src="Images/Icons/brownlogo.png" alt="" className="h-8 navbar-logo-image" />
        <p className="text-sm md:text-2xl mb-4 italic pt-5">
          Where every book has a story, and every story finds a new home.
        </p>
        <p className="text-sm md:text-lg italic footer-full-screen">© Copyright kitabswap 2024</p>
      </div>
      <div className="Footer-Links w-full md:w-1/3 text-center md:text-center">
        <ul className="space-y-4">
          <li>
            <Link to={"/Shop"}><a href="" className="text-xl md:text-xl md:hover:text-red-700">Shop</a></Link>
          </li>
          <li>
          <Link to={"/Trade"}><a href="" className="text-xl md:text-xl md:hover:text-red-700">Trade</a></Link>
          </li>
          <li>
          <Link to={"/ContactUs"}><a href="" className="text-xl md:text-xl md:hover:text-red-700">Contact</a></Link>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-3/12 footer-socials-div ">
     <table className="Footer-Socials">
    <tr>
        <td className="Footer-Socials flex items-center">
            <img src="../Images/Icons/location 1.png" className="content-center footer-socials-img" alt="" />
            <p className="ml-2 text-xl">Betchay, Baabda, Lebanon</p>
        </td>
    </tr>
    <tr>
        <td className="Footer-Socials flex items-center">
            <img src="../Images/Icons/mail 1.png" className="content-center footer-socials-img" alt="" />
            <p className="ml-2 text-xl">kitabswap.leb@gmail.com</p>
        </td>
    </tr>
    <tr>
        <td className="Footer-Socials flex items-center">
            <img src="../Images/Icons/insta 1.png" className="content-center footer-socials-img" alt="" />
            <p className="ml-2 text-xl">@kitabswap.leb</p>
        </td>
    </tr>
    <tr>
        <td className="Footer-Socials flex items-center">
            <img src="../Images/Icons/facebook 1.png" className="content-center footer-socials-img" alt="" />
            <p className="ml-2 text-xl">@kitabswap.leb</p>
        </td>
    </tr>
</table>
      </div>
      <p className="text-sm md:text-xl italic footer-phone-screen">© Copyright KitabSwap 2024</p>
    </div>
  );
}

export default Footer;
