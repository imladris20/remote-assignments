import React from 'react';
import { Link } from 'react-router-dom';

const Issue = ({title, description, id, isShowMore}) => {
  if (id < 5){
    return (
      <div className={`content c${id}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button" to="/">了解更多</Link>
      </div>
    )
  } else {
    return (
      <div className={ isShowMore? `content c${id}` : `hide content c${id}`}>
        <h3 className={isShowMore? "block" : "hide"} >{title}</h3>
        <p  className={isShowMore? "block" : "hide"} >{description}</p>
        <Link className={isShowMore? "button" : "hide button"} to="/">了解更多</Link>
      </div>
    )
  }
}

export default Issue;