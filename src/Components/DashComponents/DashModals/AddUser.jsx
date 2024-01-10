import { useState } from 'react';


function AddUser({ closeAddUserModal}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [description, setDescription] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState('');

  const validateInput = () => {
    if (!firstName) {
      setError("First name is required.");
      return false;
    }
    if (!lastName) {
      setError("Last name is required.");
      return false;
    }
    if (!email || !isValidEmail(email)) {
      setError("Email is required.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    if (!phoneNumber) {
      setError("Phone number is required.");
      return false;
    }
    return true;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit =() => {
    validateInput();
      closeAddUserModal();
  
  };

  return (
    <div className='font-lateef w-[40rem]'>
      <p className="text-book text-3xl text-center underline my-5">Add User</p>
      <div className="text-center">
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
            />
            <span className="mx-4"></span>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
            />
            <span className="mx-4"></span>
            <input
              type="text"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
            />
            <span className="mx-4"></span>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
            />
          </div>
          <div className="flex mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className=" px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          {error && <p className="text-red-700 text-sm">{error}</p>}
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

export default AddUser;
