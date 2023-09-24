import React from 'react';
import { Link } from 'react-router-dom';

const Issue = ({title, description, id}) => (
  <div className={`content c${id}`}>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link className="button" to="/">了解更多</Link>
  </div>
);

export default Issue;