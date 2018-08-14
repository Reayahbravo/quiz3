import React from "react";

const Field = props => {
  return (
  <small
    style={{
      color: "deepskyblue",
      textTransform: "uppercase"
    }}
  >
    <strong
      style={{
        color: "darkblue"
      }}
    >
      {props.name}:{" "}
    </strong>
    {props.value}
  </small>
);
};
export default Field;