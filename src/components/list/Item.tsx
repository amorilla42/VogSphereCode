import React from "react";


const Item = ({date, title, className}) => {
  return (
    <div className={`d-flex ${className}`}>
      <div className="me-2">{date}</div>
      <div>{title}</div>
    </div>
  );
};

export default Item;