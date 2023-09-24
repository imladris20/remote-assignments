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
  } else if ( id === 5) {
    if(isShowMore){
      return (
        <div id='new-content' className={`hide content c${id}`} style={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            flexBasis: '40%',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
          <h3 className="hide hide-content" style={{display: 'block'}}>{title}</h3>
          <p className="hide hide-content" style={{display: 'block'}}>{description}</p>
          <Link className="hide button" to="/" style={{ marginTop: 'auto', alignSelf: 'flex-end'}}>了解更多</Link>
        </div>
      )
    } else {
      return (
        <div id='new-content' className={`hide content c${id}`} style={{ display: 'none' }}>
          <h3 className="hide hide-content" style={{ display: 'none' }}>{title}</h3>
          <p className="hide hide-content" style={{ display: 'none' }}>{description}</p>
          <Link className="hide button" to="/" style={{ display: 'none' }}>了解更多</Link>
        </div>
      )
    }
  } else if ( id > 5) {
    if(isShowMore){
      return (
        <div className={`hide content c${id}`} style={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            flexBasis: '40%',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
          <h3 className="hide hide-content" style={{display: 'block'}}>{title}</h3>
          <p className="hide hide-content" style={{display: 'block'}}>{description}</p>
          <Link className="hide button" to="/" style={{ marginTop: 'auto', alignSelf: 'flex-end'}}>了解更多</Link>
        </div>
      )
    } else {
      return (
        <div className={`hide content c${id}`} style={{ display: 'none' }}>
          <h3 className="hide hide-content" style={{ display: 'none' }}>{title}</h3>
          <p className="hide hide-content" style={{ display: 'none' }}>{description}</p>
          <Link className="hide button" to="/" style={{ display: 'none' }}>了解更多</Link>
        </div>
      )
    }
  }
}

export default Issue;