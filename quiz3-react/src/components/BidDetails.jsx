import React from "react";
import Field from "./Field";

 const BidDetails = props => {
    const { onDeleteClick = () => {} } = props;

    return (
        <div>
        <p>{props.title}</p>
        <p>By {props.author.first_name}</p>
        <p>{props.bid}</p>
        <p>{props.current_price}</p>
        <p>{props.reserve_price}</p>
        <p>{props.previous_bids}</p>
        <p>
        <button onClick={() => onDeleteClick(props.id)}>Delete</button>
        {" • "}
        <Field name="Created At" value={new Date(props.created_at).toLocaleString()} />
        </p>
        </div>
    );
};
 export default BidDetails;