import React, { useState } from 'react';

const Cell = ({ val, handleMouseDown, isMouseDown }, i) => {
  const [styleBlack, setStyleBlack] = useState(false);

  const handleClick = (e) => {
    handleMouseDown(true);
    setStyleBlack(!styleBlack);
  };

  const handleDrag = (e) => {
    console.log(isMouseDown);
    if (isMouseDown === true) {
      if (!styleBlack) setStyleBlack(!styleBlack);
    }
  };

  console.log('re-rendering'); // NEED TO DEBUG WHY THIS RE-RENDERS TWICE EVERY TIME A CLICK IS STARTED OR STOPPED
  return (
    <div
      onMouseDown={(e) => handleClick(e)}
      onMouseOver={(e) => handleDrag(e)}
      onMouseUp={() => handleMouseDown(false)}
      style={{
        display: 'block',
        backgroundColor: styleBlack ? 'black' : 'white',
        border: '1px solid',
        padding: '20px',
      }}
    ></div>
  );
};

export default Cell;
