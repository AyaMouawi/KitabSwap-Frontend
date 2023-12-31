import "../css/ContactUsDescription.css";
import { useForm } from "@formspree/react";
import { useState } from "react";
function ContactUsDescription() {
  const [state, handleSubmit] = useForm("xknldeaq");
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    console.log("hi");
    e.preventDefault();
    handleSubmit(e);
    setFormData({ name: "", email: "", message: "" });

    setShowThanksMessage(true);

    setTimeout(() => {
      setShowThanksMessage(false);
    }, 8000);
  };


  return (
    <div className="  mx-40  contactUsDescription-cont mt-16">
      <p className="text-3xl text-center text-book underline HomeArrival-title">
        Get In Touch
      </p>
      <div className="text-center">
        <form className="py-4" onSubmit={handleFormSubmit}>
          <div className="flex flex-wrap mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              
              className="px-4 py-2 bg-gray-100  focus:outline-none text-lg  contactUs-input"
              required
            />
 
            <span className="contactUsDescription-span"></span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-mail"
              className=" md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-lg text-black contactUs-input"
              required
            />
          </div>
          <textarea
            className="w-full px-4 py-2 h-32 bg-gray-100 focus:outline-none  text-lg text-black"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleInputChange}
            name="message"
            required
          ></textarea>
          <button className="bg-book text-white py-2 px-4 border border-book w-fit text-2xl flex ml-auto font-normal mt-5  mb-5"
            disabled={state.submitting}
            type="submit">
        Send
          </button>
        </form>
        {state.succeeded && showThanksMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 relative z-10 w-96">
              <div className="flex items-center justify-center">
                <div className="text-center w-70">
                  <p className="text-2xl m-12 text-red-700  mx-auto">
                    Thank you for contacting us!
                    <br />
                    We will get back to you shortly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactUsDescription;
