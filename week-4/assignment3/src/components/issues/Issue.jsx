import React from 'react';
import { Link } from 'react-router-dom';

const Issue = ({title, description, id}) => {
  if (id < 5){
    return (
      <div className={`content c${id}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button" to="/">了解更多</Link>
      </div>
    )
  } else if ( id === 5) {
    return (
      <div id='new-content' className={`content c${id} hide`}>
        <h3 className="hide hide-content">{title}</h3>
        <p className="hide hide-content">{description}</p>
        <Link className="hide button" to="/">了解更多</Link>
      </div>
    )
  } else if ( id > 5) {
    return (
      <div className={`content c${id} hide`}>
        <h3 className="hide hide-content">{title}</h3>
        <p className="hide hide-content">{description}</p>
        <Link className="hide button" to="/">了解更多</Link>
      </div>
    )
  }
}

export default Issue;