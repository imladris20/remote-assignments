import React, {useContext} from "react";
import DataContext from '../../context/DataContext';
import Issue from "./Issue";

const IssueContainer = () => {
  const {issues}= useContext(DataContext);
  
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
    </div>
  )
}

export default IssueContainer