import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./Dashbord.css"
const Confirmation = () => {
  
  const Navigate=useNavigate();
  const onNext=()=>{
  Navigate('/Result');
  }
  return (
    <>
    <nav className="nav">
    <Link to="/DashBoard">Home</Link>
    <Link to="/Result">Result</Link>
    <Link to="/Voting">Voting</Link>
    <Link to="/Confirmation">Confirmation</Link>

    
  </nav>
    <section>
        <div className="content">
        <h1>Confirmation</h1>
      <p>Your vote has been successfully recorded!</p>
      <button onClick={()=>onNext()}>View Results</button>
        </div>
      </section>
    </>
  );
};

export default Confirmation;
