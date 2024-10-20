import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes, Router } from "react-router-dom";
import "./OuterPage.css";

import Registration from "./Registration.jsx";
// import Nav from "../Component2/Nav.jsx";

const OuterPage = () => {
  const [aadharNumber, setAadharNumber] = useState("");
  const [password, setPassword] = useState("");

  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  // Check if MetaMask is installed
  const checkIfMetaMaskInstalled = () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    } else {
      console.error('MetaMask is not installed. Please install it to use this app.');
      setError('MetaMask is not installed. Please install it to use this app.');
    }
  };

  // Connect to MetaMask
  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
      setError('Failed to connect to MetaMask.');
    }
  };

  // Handle account and network changes
  useEffect(() => {
    checkIfMetaMaskInstalled();

    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        setAccount(null);
      }
    };

    const handleChainChanged = () => {
      window.location.reload();
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, []);


  const Navigate = useNavigate();
  const LoginSection = () => {
    connectWallet();
    console.log(aadharNumber, password);
    Navigate("/Home");
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img
          src="https://s3-alpha-sig.figma.com/img/3695/2d79/61223ea3dfa6df3faa7876ebfb1aeb3f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GyHfpXpwXMWWSNT7xNaSPPiUaxdyKYWcsdEMBU2TPxUD0GiPfgsvW8RJ~XGv4Uakz4ukuuNqcxQNh~6q8LR91iJ9K7SbsEjSsas5WhbYf-CN3dY79ucnyeZu8m2bdwoAlF0P~Ngl1B5q5cHE4xBhKY2Rh-2CzIvf0aXjQ3kGAWq1sDFXk92Y0qBKgLHEKIM4oChWhkkzpio2bTbOUJjE~JC35td6KHPNApPWVCmUZe3DilG4VH8-P~boQWidT2THNtcTUL-23IilwdiGcCzzy6qbmVTUqj1owPBLqla-5LWiSGmjKzXQRIthVtIuB8kOEVhilny45tLA2WDTbEqJmg__"
          alt="Voting"
        />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="aadhaar">Aadhaar Number:</label>
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              placeholder="Enter your Aadhar number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Passoword number"
              required
            />
          </div>
          <button type="submit" onClick={LoginSection}>
            Login via MetaMask
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/Registration">RegisterHere</Link>
        </p>
      </div>
      <div className="custom-shape-divider-bottom-1729247153">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default OuterPage;
