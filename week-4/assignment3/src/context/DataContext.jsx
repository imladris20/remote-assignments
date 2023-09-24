import {createContext} from "react";
import { Issues } from '../assets/issues'
import { useState } from "react";

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

  const [isChanged, setChanging] = useState(false);
  const [isOriginNavShowed, setOrigin] = useState(true);
  const [isFloatNavShowed, setFloat] = useState(false);


  const changeBanner = () => {
    setChanging(!isChanged)
  }

  const changeOriginNav = () => {
    setOrigin(!isOriginNavShowed)
    setFloat(!isFloatNavShowed)
  }

  const changeFloatNav = () => {
    setFloat(!isFloatNavShowed)
    setOrigin(!isOriginNavShowed)
  }


  return (
    <DataContext.Provider value={{
      issues: Issues,
      isChanged,
      isOriginNavShowed,
      isFloatNavShowed,
      actions: {
        changeBanner,
        changeOriginNav,
        changeFloatNav
      }
    }}>
      {props.children}
    </DataContext.Provider>
  ) ;
}

export default DataContext;