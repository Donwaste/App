import React from "react";

const GroupList = ({
  items = {},
  valueProperty = "_id",
  contentProperty = "name",
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={
            "list-group-item" + (items[item] === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(items[item])}
          role="button"
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
