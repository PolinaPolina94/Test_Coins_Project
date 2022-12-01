import React from "react";

function Item(props) {
  return (
  
    <div>
      {" "}
      {props.name} 
      <div>{props.price}</div>{" "}
    </div>
    );
}

export default Item;
