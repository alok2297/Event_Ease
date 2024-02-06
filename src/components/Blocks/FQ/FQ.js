import React from "react";
import "./FQ.css";
const FQ = (props) => {
  const {data} = props;
  return (
    <>{data.map((item,i)=>(<div key={i} className="frequent-question-main">
      <div className="fq-main">
        <div>{item.Question}</div>
        <p>{item.Answer}</p>
      </div>
    </div>))}</>
  );
};

export default FQ;
