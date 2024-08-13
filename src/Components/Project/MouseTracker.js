import React from 'react';

export default function MouseTracker({ x, y, viewName, isVisible }) {
  return (
    isVisible && (
      <div
        style={{
          position: 'fixed',
          left: x + 'px',
          top: y + 'px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '15px',
          borderRadius: '90px',
          pointerEvents: 'none',
        }}
      >
        {viewName}
      </div>
    )
  );
}
