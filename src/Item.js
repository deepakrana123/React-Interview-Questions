import React from "react";

const ItemList = ({ item,activeIndex }) => {
  return (
    <>
      <ul className="listBoxContainer">
        {item && item.map((item, index) => <li
        className={`listBoxItem ${index === activeIndex?"activeClass":""}`} key={index}>{item.name}</li>)}
      </ul>
    </>
  );
};

export default ItemList;
