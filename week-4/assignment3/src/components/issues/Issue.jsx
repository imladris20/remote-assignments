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
  } else if ( id >= 5) {
    if(isShowMore){
      return (
        <div className={`flex content c${id}`} >
          <h3 className="block">{title}</h3>
          <p  className="block">{description}</p>
          <Link className="button" to="/">了解更多</Link>
        </div>
      )
    } else {
      return (
        <div className={`hide content c${id}`} >
          <h3 className="hide" >{title}</h3>
          <p className="hide" >{description}</p>
          <Link className="hide button" to="/" >了解更多</Link>
        </div>
      )
    }
  }
}

export default Issue;