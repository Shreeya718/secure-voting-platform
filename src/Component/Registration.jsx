// src/components/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Registration.css"
const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [VoterId, setVoterId] = useState('')

  const [] = useState('')


  const navigate=useNavigate();

  const handleRegistration = () => {
    // You can add registration logic here (e.g., API call)
    console.log('Registered:', { email, password });
    onRegister();
   navigate("/");
  };
  const onRegister= () => {
    // You can add registration logic here (e.g., API call)
    console.log('Registered:', { email, password });
   navigate("/");
  };

  return(
   <>
   <div className="bodq">
      {/* <h1>Registration</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
      <p>Already have an account? <button onClick={onRegister}>Login here</button></p> */}
   <div className="container">
        <div className="info-box">
            <h2>INFORMATION</h2>
            <p>A voting system is a set of rules and methods by which votes are cast, counted, and used to determine the outcome of an election.</p>
            <p><strong>Conclusion</strong> 
                Different voting systems have their strengths and weaknesses. The choice of a voting system can have a significant impact on political representation, governance, and voter behavior.  While some systems promote majority rule and stability, others prioritize representation and inclusivity.</p>
            <button className="account-btn">Have An Account</button>
        </div>
        <div className="form-box">
            <h2>REGISTER FORM</h2>
            <form>
                <div className="input-group">
                  <input type="text" placeholder="Your name" required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <input
       type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
                <input type="text" placeholder="Your voter ID card" required
                value={VoterId}
                onChange={(e) => setVoterId(e.target.value)}
                />
                <input type="password" placeholder="Password" required
                   value={password}onChange={(e) => setPassword(e.target.value)} />
               
                <div className="checkbox">
                    <input type="checkbox" required/>
                    <label>I agree to the <a href="#">Terms and Conditions</a></label>
                </div>
                <button type="submit" className="register-btn"
                onClick={handleRegistration}
                >Register</button>
                <p>Already have an account? <button onClick={onRegister}>Login here</button></p> 
            </form>
        </div>
    </div>
    </div>
   </>
   );
};

export default Registration;
