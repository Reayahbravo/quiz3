import React from "react";
import Field from "./Field";

const AuctionDetails = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.details}</p>
      <p>{props.reserve_price}</p>
      <p>By {props.author.full_name}</p>
      <p>
      <Field name="Ends On" value={props.ends_on.toLocaleString()} />
        {" • "}
        <Field name="Created At" value={props.created_at.toLocaleString()} />
        {" • "}
        <Field name="Updated At" value={props.updated_at.toLocaleString()} />
      </p>
    </div>
  );
};

 export default AuctionDetails;