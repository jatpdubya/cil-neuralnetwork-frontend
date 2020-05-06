import React, { useState } from 'react';
import Cell from './Cell';

const DrawPad = ({ grid, width, height }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (val) => {
    setIsMouseDown(val);
  };

  return (
    <div className="card" style={{ width: '80%', margin: 'auto' }}>
      <div className="ui-drawpad">
        {grid.map((row, i) => {
          return (
            <div className="row" style={{ display: 'flex' }} key={i}>
              {row.map((val, i) => {
                return (
                  <Cell
                    key={i}
                    val={val}
                    handleMouseDown={handleMouseDown}
                    isMouseDown={isMouseDown}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DrawPad;
