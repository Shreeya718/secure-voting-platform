import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Home.css"
import { Navigate } from 'react-router-dom'
const Home = () => {
    const Navigate=useNavigate();
 const votingHandeler=()=>{
 Navigate("/DashBoard")
 }
  return (
    <>
    <div className="mn1">
    <nav>
      <div className='ul'>
          {/* <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Result</a></li>
              <li><a href="/">Voting</a></li>
              <li><a href="/">Confirmation</a></li>
          </ul> */}
          
           <Link to="/DashBoard"className="li" >Voting</Link>
           <Link to="/Home"className="li" >Home</Link>

        <Link to="/Result"className="li">Result</Link>
        {/* <Link to="/Voting"className="li">Voting</Link> */}
        {/* <Link to="/Confirmation"className="li">Confirmation</Link> */}
      </div>
  </nav>
    <div>
       <header className="header">
      <h1 className="first-header">Live update of ellections:</h1>
    </header>

    <main className="about">
      <div className="election1">
        <h2>Election 1:</h2>
        <p>Brief description about upcoming ellections</p>
        <br /><br />

        <button className="election1-button"><a href="">Notify</a></button>
      </div>

      <div className="election2">
        <h2>Election2:</h2>
        <p>Choose Your Vote To Right Candidate </p>
        <p>Election Is live At Odisha</p>
        <br />
        <button className="election2-button"
        onClick={()=>votingHandeler()}
        ><a href="">Proceed to Vote</a></button>
      </div>
    </main>

    <h3 className="announcement">Announcement:</h3>
    <footer className="footer">
      <p className="paragraph">Notification about future events............</p>
    </footer>
    </div>
    </div>
    </>
  )
}

export default Home
