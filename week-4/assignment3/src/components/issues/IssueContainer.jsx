import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import DataContext from '../../context/DataContext';
import Issue from "./Issue";

const IssueContainer = () => {
  const { issues, isShowMore, actions } = useContext(DataContext);

  let issueArray = issues.map((issue) => {
    return (
      <Issue
        title={issue.title}
        description={issue.description}
        key={issue.id}
        id={issue.id}
        isShowMore={isShowMore}
      />
    )
  });

  return (
    <div className="row">
      {issueArray}
      <div className='more-content-btn click-hide'>
        <Link className="button click-hide-a" to="/" onClick={actions.changeShowMore}>
          { isShowMore? '收起議題' : '看更多議題' }
          <img className="arrow" alt="arrow" src="/remote-assignments/right-arrow.png" />
        </Link>
      </div>
    </div>
  )
}

export default IssueContainer