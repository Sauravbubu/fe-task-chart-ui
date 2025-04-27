import React from 'react';

const ranges = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];

const ChartActions = ({ selectedRange, onRangeChange, onToggleFullScreen, isFullScreen }) => {
  return (
    <div className={`flex items-center justify-between mb-4 ${isFullScreen ? 'fixed top-4 left-4 right-4 z-50 bg-white p-4 shadow-md rounded' : ''}`}>
      <div className="flex gap-4">
        <button
          className="flex items-center gap-1 text-gray-600"
          onClick={onToggleFullScreen} 
        >
          {isFullScreen ? '⛶ Exit Fullscreen' : '⛶ Fullscreen'}
        </button>
        {!isFullScreen && (
          <button className="flex items-center gap-1 text-gray-600">
            ➕ Compare
          </button>
        )}
      </div>
      <div className="flex gap-2">
        {ranges.map(range => (
          <button
            key={range}
            className={`px-3 py-1 rounded ${
              selectedRange === range
                ? 'bg-primary text-white font-semibold'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => onRangeChange(range)}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartActions;
