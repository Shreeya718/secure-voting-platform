import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes,Router} from "react-router-dom";import "./Component/OuterPage.css";

import Registration from "./Component/Registration.jsx";
import OuterPage from "./Component/OuterPage.jsx";
import Dashboard from "./Component/Dashbord.jsx";
import Results from "./Component/Result.jsx";
import Voting from "./Component/Voting.jsx";
import Confirmation from "./Component/Conformation.jsx";
import Home from "./Component/Home.jsx";
import BioData from "./Component/BioData.jsx";
const App = () => {
  const [aadharNumber, setAadharNumber] = useState("");
  const [password, setPassword] = useState("");
 
  return ( 
   
      <Routes>
         <Route path="/" element={<OuterPage/>}></Route>
         <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/DashBoard" element={<Dashboard />}></Route>
        {/* <Route path="/DashBoard/:id" element={<Dashboard />}></Route> */}

        <Route path="/Result" element={<Results />}></Route>
        <Route path="/BioData/:id" element={<BioData />}></Route>

        {/* <Route path="/Voting" element={<Voting />}></Route> */}
        {/* <Route path="/Confirmation" element={<Confirmation />}></Route> */}
    </Routes>
    
   
  );
};


export default App;