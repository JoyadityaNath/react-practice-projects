import { useState } from "react";
import { accordionData } from "./data";
import "./styles.css";

export default function Accordion() {
  const [singleSelection, setSingleSelection] = useState(null);
  const [showMultiSelection, setShowMultiSelection] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  const handleSingleSelection = (id) => {
    setSingleSelection((prev) => (prev === id ? null : id));
  };

  const handleMultiSelectionToggle = () => {
    setMultiSelection((prev) => !prev);
  };

  const handleMultiSelectionClick = (id) => {
    const copyMultiple = [...showMultiSelection];
    if (copyMultiple.indexOf(id) === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(copyMultiple.indexOf(id), 1);
    }
    setShowMultiSelection(copyMultiple);
  };

  return (
    <div className="accordion-container">
      <button className="toggle-button" onClick={handleMultiSelectionToggle}>
        {multiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>

      {accordionData.map((item) => (
        <div
          key={item.id}
          className="accordion-item"
          onClick={
            multiSelection
              ? () => handleMultiSelectionClick(item.id)
              : () => handleSingleSelection(item.id)
          }
        >
          <div className="accordion-title">{item.title}</div>
          {multiSelection
            ? showMultiSelection.indexOf(item.id) !== -1 && (
                <div className="content">{item.content}</div>
              )
            : singleSelection === item.id && (
                <div className="content">{item.content}</div>
              )}
        </div>
      ))}
    </div>
  );
}
