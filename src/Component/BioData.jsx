import React from "react";
import { Link, useParams,useNavigate} from "react-router-dom";
// import "./BioData.css"
import "../Biodata.css";
const BioData = () => {
  const { id } = useParams();
  console.log(id);
  const s1 = JSON.parse(localStorage.getItem("userData"));
  const Navigate= useNavigate();
  const backHAndeler=()=>{
     Navigate("/DashBoard")
  }
  return (
    <>
     <div className="bod">
      <nav className="nav-bar">
        <div className="nav-ul">
          {/* <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Result</a></li>
              <li><a href="/">Voting</a></li>
              <li><a href="/">Confirmation</a></li>
          </ul> */}
          <Link to="/DashBoard" className="nav-li">
            Voting
          </Link>
          <Link to="/Home" className="nav-li">
            Home
          </Link>
          <Link to="/BioData" className="nav-li">
            VoterDetails
          </Link>

          <Link to="/Result" className="nav-li">
            Result
          </Link>
          {/* <Link to="/Voting"className="li">Voting</Link> */}
        </div>
      </nav>

     
        <header className="heading">
          <h1 className="confirmation-heading">
            Confirmation for your candidate
          </h1>
        </header>

        {/* <main className="main">
          <div className="image">
            <img src={s1[id].large} alt="" srcset="" />
          </div>

          <div className="about">
            <h4>About your candidate</h4>
            <ul>
              <li>Name:- donald trump</li>
              <li>Party:- Republican Party</li>
              <li>Education:- Bachelor of Science in economics</li>
              <li>Promises:- He will make USA great again</li>
              <button>Back To Vote</button>
            </ul>
          </div>
        </main> */}
         <header class="heading">
      <h1 class="confirmation-heading">Confirmation for your candidate</h1>
    </header>

    <main class="main">
      <div class="image">
      <img src={s1[id-1].large} alt=""  />
      </div>

      <div class="information-candidate">
        <h4>About your candidate</h4>
        <ul>
          <li>Name:- {s1[id-1].name}</li>
          <li>Party:-{s1[id-1].party}</li>
          <li>Education:- {s1[id-1].education}</li>
          <li>Promises:-{""}</li>
         
        </ul>
      </div>
    </main>

        <div className="submit">
          <button className="confirm"
          onClick={()=>backHAndeler()}
          >
             vote
          </button>
          
        </div>
      </div>
    </>
  );
};

export default BioData;
