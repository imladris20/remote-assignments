import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import DataContext from '../../context/DataContext';
import Issue from "./Issue";

const IssueContainer = () => {
  const { issues } = useContext(DataContext);

  let issueArray = issues.map((issue) => {
    return (
      <Issue
        title={issue.title}
        description={issue.description}
        key={issue.id}
        id={issue.id}
      />
    )
  });

  return (
    <div className="row">
      {issueArray}
      <div className='more-content click-hide'>
        <Link className="button click-hide-a" to="#new-content">看更多議題 <img className="arrow" alt="arrow" src="/right-arrow.png" /></Link>
      </div>
    </div>
  )
}

export default IssueContainer