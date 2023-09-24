import {createContext} from "react";
import { Issues } from '../assets/issues'
// import {useState} from "react";

const DataContext = createContext(null);

export const DataProvider = (props) => {
  // const [user, setUser] = useState(null);

  // const signInUser = (username, password) => {
  //   const newUser = {
  //     username,
  //     password
  //   };
  //   setUser(newUser);
  // }

  // const signOutUser = () => {
  //   setUser(null);
  // }

  return (
    <DataContext.Provider value={{
      issues: Issues
    }}>
      {props.children}
    </DataContext.Provider>
  ) ;
}

export default DataContext;