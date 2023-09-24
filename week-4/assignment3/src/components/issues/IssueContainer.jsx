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
      <div className='more-content click-hide'>
        {
          isShowMore
          ?
            <Link className="button click-hide-a" to="/" onClick={actions.changeShowMore}>
              收起議題
              <img className="arrow" alt="arrow" src="/up-arrow.png" />
            </Link>
          :
            <Link className="button click-hide-a" to="/" onClick={actions.changeShowMore}>
              看更多議題
              <img className="arrow" alt="arrow" src="/right-arrow.png" />
            </Link>
        }
      </div>
    </div>
  )
}

export default IssueContainer