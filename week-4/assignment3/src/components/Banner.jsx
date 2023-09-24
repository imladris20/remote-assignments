import React, {useContext} from "react";
import DataContext from "../context/DataContext";

const Banner = () => {

  const {actions, isChanged} = useContext(DataContext);

  return (
    <>
      <div className="message" onClick={actions.changeBanner}>
        {isChanged
          ? <h1 className="welcome-message">一起面對這座島嶼的創傷</h1>
          : <h1 className="welcome-message">我們的家園怎麼了？</h1> 
        }
      </div>
      <h2>社會議題</h2>
    </>
  )
}

export default Banner;