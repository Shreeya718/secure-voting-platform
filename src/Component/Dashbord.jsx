import React, { Children } from "react";
import { json, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../index.css";
import "./Dashbord.css";
import Data from "./store.json";
import { createContext } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Result } from "postcss";
export const VoteCntContext = createContext();
import Results from "./Result.JSX";
import "./Home.css"

//  export const Context = (props) => {
//   const [count,setCount]=useState(0)
// // return (
//  <ProductContext.Provider value={[ count,setCount]}>
//   {Children}
//   <UserCards setCount={[count,setCount]}/>
//  </ProductContext.Provider >

// )
// }


localStorage.setItem("userData", JSON.stringify(Data));
const s1 = JSON.parse(localStorage.getItem("userData"));
// console.log(s1);
// let w = 5;

// console.log((s1[0].count = 5));
// console.log(s1);

const Dashboard = () => {
  








  console.log(Data);
  const [data, setuserData] = useState(Data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const Navigate = useNavigate();
  // const BackLogIn = () => {
  //   Navigate(-1);
  // };
  // const API = "https://jsonplaceholder.typicode.com/users";
  // const API="https://randomuser.me/api/?results=10

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(API);
  //     const data1 = await res.json();
  //     //   console.log(data);
  //     console.log("hfddsfdsg")
  //     console.log(data1)
  //      const {results}=data1;
  //      console.log(results)
  //    console.log(data1)
  //      setuserData(data1);

  //     setLoading(false);
  //    // console.log("hello Gays")

  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //  fetchData();

  // }, []);
  //console.log(data[0].name.toLowerCase())
  const CheckData = (curData) => {
    curData.name.toLowerCase().includes(search.toLowerCase());
  };

  const searchData = data.filter((curData) => {
    return curData.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(searchData);

  // if (loading) {
  //   return (
  //     <div>
  //       <h1>Loading....</h1>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div>
  //       <h1>{error.message}</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="navi">
      {/* <nav className="nav">
        <Link to="/DashBoard">Home</Link>
        <Link to="/Result">Result</Link>
        <Link to="/Voting">Voting</Link>
        <Link to="/Confirmation">Confirmation</Link>
      </nav> */}
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
      </div>
  </nav>
      <hr />
      <section className="mainpage">
        <div className="vote-search">
          <input
            type="text"
            placeholder="search Voter"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {/* {pokemon.map((curPokemon) => { */}
            {searchData.map((curData) => {
              return <UserCards key={curData.id} UserData={curData} />;
            })}
          </ul>
        </div>
      </section>

      {/* <button onClick={onVote}>Vote Now</button>
      <button onClick={() => BackLogIn()}>Back Log In</button> */}
    </div>
  );
};

export default Dashboard;

export const UserCards = ({ UserData }) => {
  const Navigate = useNavigate();
  const vOTEhANDELER = (name, id) => {
    console.log(name);
      
    const s1 = JSON.parse(localStorage.getItem("userData"));
    console.log(s1);
    console.log("hello",id)
       s1[id-1].count = s1[id-1].count+1;
    console.log(s1);
    localStorage.setItem("userData", JSON.stringify(s1));
    toast.success(`Successfully Voted TO ${name}`);
    toast.success(`Your Vote HAs SucessFully Stored `);
    toast.success(`Transaction ID:fjey374erbjgui34`);


    Navigate("/Result");
  };
  const VoteDetails=(e)=>{
    <Link to={`/BioData/${UserData.id}`}>Deatils</Link>
  }
  return (
    <li className="user-card">
      <figure>
        <img src={`${UserData.large}`} alt={UserData.name} className="image" />
      </figure>
      <h1 className="user-name">{UserData.name}</h1>
      <div className="info">
        <h3>Age:{`${UserData.age}`}</h3>
        <h4>Party{`${UserData.party}`}</h4>
      </div>
     <div className="btnf">
     <button onClick={() => vOTEhANDELER(UserData.name, UserData.id)}>
        Vote
      </button>
       <button onClick={()=>VoteDetails()}> <Link  className="w" to={`/BioData/${UserData.id}`}>Deatils</Link></button>
     </div>
    </li>
  );
};
