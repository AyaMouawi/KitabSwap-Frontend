import "../css/ContactUsDescription.css";
import { useForm } from "@formspree/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { hourglass } from 'ldrs';

function ContactUsDescription() {
  hourglass.register();
  const [state, handleSubmit] = useForm("mrgnezww");
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

  const handleSuccess = () => {
    toast.success("Thank you for contacting us! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-40 contactUsDescription-cont mt-16 font-lateef">
      <p className="text-4xl text-center text-book underline HomeArrival-title">
        Get In Touch
      </p>

      {state.submitting ? (
        <div className="text-center">
          <l-hourglass
            size="40"
            bg-opacity="0.1"
            speed="1.75"
            color="rgb(183, 86, 66)"
          ></l-hourglass>
        </div>
      ) : (
        <div className="text-center">
          <form className="py-4" onSubmit={(e) => handleSubmit(e).then(handleSuccess)}>
            <div className="flex flex-wrap mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="px-4 py-2 bg-gray-100 focus:outline-none text-xl contactUs-input"
                required
              />

              <span className="contactUsDescription-span"></span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-mail"
                className="md:mt-0 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black contactUs-input"
                required
              />
            </div>
            <textarea
              className="w-full px-4 py-2 h-32 bg-gray-100 focus:outline-none text-xl text-black"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleInputChange}
              name="message"
              required
            ></textarea>
            <button
              className="bg-book text-white py-2 px-4 border border-book w-fit text-2xl flex ml-auto font-normal mt-5 mb-5 hover:bg-white hover:text-book hover:border-book"
              disabled={state.submitting}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactUsDescription;
