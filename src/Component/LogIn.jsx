// src/components/Login.js
// import React from 'react';

// const Login = ({ onLogin, onRegister }) => {
//   const handleMetaMaskLogin = () => {
//     // Integrate MetaMask login logic here
//     onLogin();
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <button onClick={handleMetaMaskLogin}>Connect MetaMask</button>
//       <p>or</p>
//       <input type="email" placeholder="Email" />
//       <input type="password" placeholder="Password" />
//       <button onClick={onLogin}>Login</button>
//       <p>Don't have an account? <button onClick={onRegister}>Register here</button></p>
//     </div>
//   );
// };

// export default Login;


// src/components/AadharLogin.js
import React, { useState } from 'react';

const AadharLogin = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpVisible, setIsOtpVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Aadhar Number:', aadharNumber);
    if (isOtpVisible) {
      console.log('OTP:', otp);
    }
  };

  const handleAadharSubmit = (e) => {
    e.preventDefault();
    setIsOtpVisible(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">Aadhar Login</h1>
        <form onSubmit={isOtpVisible ? handleLogin : handleAadharSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Aadhar Number</label>
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your Aadhar number"
              required
            />
          </div>
          {isOtpVisible && (
            <div className="mb-4">
              <label className="block text-gray-700">OTP (Optional)</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter OTP (if you have one)"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            {isOtpVisible ? 'Login' : 'Next'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AadharLogin;
