import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import {register} from "../../redux/actions/users";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 import "../css/SignUp.css";


function SignUp() {

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    floor: "",
    building: "",
    street: "",
    city: "",
    description: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (userDetails.password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    dispatch(register(userDetails));
  };

  return (
    <div className="flex h-screen SignUp-container scale-95 font-lateef">
      <div className="w-1/2 md:flex items-center justify-center hidden">
      <Link to="/"><img
        src="Images/AboutPicSign.png"
        alt="Background"
        className="object-cover h-[80vh] SignUp-img"
      /></Link>
      </div>
      <div className="w-1/2 flex items-center justify-center SignUp-form ">
        <form className="p-12 py-0 w-full signup-title" onSubmit={handleRegister}>
          <h1 className="text-6xl  mb-4 text-center signup-title">Welcome To KitabSwap</h1>
          <h1 className="text-2xl mb-6 italic text-center signup-description">
            Book store and trading point for all book lovers
          </h1>

     
          <div className="flex">
      
            <div className="mb-6 mr-4 flex-1 signup-input-container">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleInputChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 italic text-2xl signup-input"
                placeholder="First Name"
              />
            </div>

         
            <div className="mb-6 flex-1 signup-input-container">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleInputChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 italic text-2xl signup-input"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex">
       
            <div className="mb-6 mr-4 flex-1 signup-input-container">
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 italic text-2xl signup-input"
                placeholder="Email"
              />
            </div>

  
            <div className="mb-6 flex-1 signup-input-container">
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleInputChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 italic text-2xl signup-input"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="flex signup-password">
 
            <div className="mb-4 mr-4 flex-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={userDetails.password}
                onChange={handleInputChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 pr-10 italic text-2xl"
                placeholder="Password"
              />
              <div
                className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="20"
                    viewBox="0 0 640 512"
                  >
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                  </svg>
                )}
              </div>
            </div>

     
            <div className="mb-4 flex-1 relative signup-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 pr-10 italic text-2xl"
                placeholder="Confirm Password"
              />
              <div
                className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="20"
                    viewBox="0 0 640 512"
                  >
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center mb-4 signup-delivery">
            <div className="flex-grow  h-[3px] bg-black ml-12 signup-line"></div>
            <p className="mx-4 text-lg font-bold">for delivery purposes</p>
            <div className="flex-grow h-[3px] bg-black mr-12 signup-line"></div>
          </div>

          <div className="flex">
      
            <div className="mb-6 mr-4 flex-1 signup-input-container">
              <input
                type="number"
                id="floor"
                name="floor"
                value={userDetails.floor}
                onChange={handleInputChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 italic text-2xl signup-input"
                placeholder="Floor"
              />
            </div>

       
            <div className="mb-6 flex-1 signup-input-container">
              <input
                type="text"
                id="building"
                name="building"
                value={userDetails.building}
                onChange={handleInputChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 italic text-2xl signup-input"
                placeholder="Building"
              />
            </div>
          </div>
          <div className="flex">
      
            <div className="mb-6 mr-4 flex-1 signup-input-container">
              <input
                type="text"
                id="street"
                name="street"
                value={userDetails.street}
                onChange={handleInputChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 italic text-2xl signup-input"
                placeholder="Street"
              />
            </div>

            <div className="mb-6 flex-1 signup-input-container">
              <input
                type="text"
                id="city"
                name="city"
                value={userDetails.city}
                onChange={handleInputChange}
                className="w-full p-2 py-3 border border-black bg-gray-100 italic text-2xl signup-input"
                placeholder="City"
              />
            </div>
          </div>
          <div className="mb-5">
            <input
              type="text"
              id="description"
              name="description"
              value={userDetails.description}
              onChange={handleInputChange}
              className="w-full p-2 py-3 border border-black bg-gray-100 italic text-2xl signup-input"
              placeholder="Additional Description"
            />
          </div>

          <div className="text-center">
            <button className="bg-book text-white py-2 px-4 w-96 text-3xl mb-4 signup-button border border-book hover:bg-white hover:text-book hover: border-book ">
              Register
            </button>
          </div>
          <div className="text-center signup-loginlink">
          <Link to="/SignIn"><a href="" className="underline text-xl hover:text-book">
              Already have an account? Log in
            </a></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
