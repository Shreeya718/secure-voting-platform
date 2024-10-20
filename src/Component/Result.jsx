import React, { useState,useEffect,useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./Dashbord.css"
import Data from"./store.json"
import "./Home.css"
//import { Context, VoteCntContext } from './Dashbord';
const Results = () => {
//   const tally = results.reduce((acc, vote) => {
//     acc[vote] = (acc[vote] || 0) + 1;
//     return acc;
//   }, {});
//const [count,setCount]=useContext(VoteCntContext);
// console.log(count)
const [data,userData]=useState(JSON.parse(localStorage.getItem("userData")));
console.log(data)
    const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [search, setSearch] = useState("");


  const Navigate = useNavigate();
  const BackLogIn = () => {
    Navigate("/DashBoard");
  };
//   const API = "https://jsonplaceholder.typicode.com/users";


// const fetchData = async () => {
//   try {
//     const res = await fetch(API);
//     const data = await res.json();
//     //   console.log(data);
//     console.log("hfddsfdsg")
//     console.log(data);
//      userData(data);
//     setLoading(false);
//    // console.log("hello Gays")
//     return data;
//   } catch (error) {
//     console.log(error);
//     setLoading(false);
//     setError(error);
//   }
// };

// useEffect(() => {
//  const Data= fetchData();
//  userData(Data);
// }, []);
// console.log(data)

// // const searchData=data.filter((curData)=>{
// //    return curData.name.toLowerCase().includes(search.toLowerCase())
// // })
 
  
//   if (loading) {
//     return (
//       <div>
//         <h1>Loading....</h1>
//       </div>
//     );
//   }
  
//   if (error) {
//     return (
//       <div>
//         <h1>{error.message}</h1>
//       </div>
//     );
//   }
// const s1=JSON.parse(localStorage.getItem("product"))
  const searchData = data&&data.filter((curData) => {
    return curData.name.toLowerCase().includes(search.toLowerCase());
  });
  

  return (
    <div>
       
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
       
{/* <h1>Results</h1> */}
      {/* {Object.entries(tally).map(([candidate, count]) => (
        <div key={candidate}>
          <span>{candidate}: {count} votes</span>
        </div>
      ))} */}
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
          {searchData.map((curData,idx) => {
            return (
              <UserCard key={idx} UserData={curData} />
            );
          })}
        </ul>
      </div>
      </section>
    </div>
  );
};

export default Results;


export const UserCard =({UserData})=>{
  const Navigate = useNavigate();
  const vOTEhANDELER=(name)=>{
    
      console.log(name)
      Navigate("/Confirmation");
    }
  return (
      <li className="user-card">
        <figure>
          <img
            src={UserData.large}
            alt={UserData.name}
            className=""
          />
        </figure>
        <h1 className='user-name'>{UserData.name}</h1>
       <h1 className='count'>{UserData.count}</h1>
      </li>
    );

}