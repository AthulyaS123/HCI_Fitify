import React, { useState, useRef, useEffect } from 'react';
import '../filterscreen.css';

const MultiSelect = ({ label, options, onChange }) => {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const availableOptions = options.filter(opt => !selected.includes(opt));

  const handleSelect = (option) => {
    const updated = [...selected, option];
    setSelected(updated);
    if (onChange) onChange(updated);
  };

  const handleRemove = (option) => {
    const updated = selected.filter(item => item !== option);
    setSelected(updated);
    if (onChange) onChange(updated);
  };

  // closes dropdown if user clicks anywhere outside of the dropdown box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="multi-select-container mx-auto" ref={dropdownRef}>
      <label className="multi-select-label mx-auto">{label}</label>
      <div className="selected-box mx-auto" onClick={() => setIsOpen(!isOpen)}>
        {selected.map((item) => (
          <span key={item} className="tag">
            {item}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(item);
              }}
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {isOpen && (
        <div className="dropdown-list">
          {availableOptions.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
          {availableOptions.length === 0 && (
            <div className="dropdown-item disabled">No more options</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;