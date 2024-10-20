// import { createContext, useContext } from "react";
import { createContext, use, useContext } from "react";


export const BioContext = createContext();

export const BioProvider = ({ children }) => {
 const [count,setCount] = useState(0)
                                 

  return (
    <BioContext.Provider value={{ count, setCount }}>
     
      {/*  */}
      {children}
    </BioContext.Provider>
  );
};
