import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items = {},
  valueProperty = "_id",
  contentProperty = "name",
  onItemSelect,
  selectedItem,
}) => {
  if (!items || (Array.isArray(items) && items.length === 0)) {
    return <p>No items available</p>;
  }

  if (!valueProperty || !contentProperty) {
    return <p>Error: Missing required properties</p>;
  }

  if (!Array.isArray(items)) {
    return (
      <ul className="list-group">
        {Object.keys(items).map((item) => (
          <li
            key={items[item][valueProperty]}
            className={
              "list-group-item" +
              (items[item] === selectedItem ? " active" : "")
            }
            onClick={() => onItemSelect(items[item])}
            role="button"
          >
            {items[item][contentProperty]}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            "list-group-item" + (item === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(item)}
          role="button"
        >
          {item[contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};

export default GroupList;
