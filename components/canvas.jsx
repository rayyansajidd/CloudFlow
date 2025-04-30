'use client';

import React, { useRef, useState, forwardRef } from 'react';
import { useDroppable } from '@dnd-kit/core';
import styles from './Canvas.module.css';

// Main canvas component using forwardRef
const Canvas = forwardRef(({ items, updateItemPosition }, ref) => {
  const { setNodeRef } = useDroppable({
    id: 'canvas-dropzone',
  });

  // Individual node component that can be dragged inside the canvas
  function DraggableNode({ id, img, label, x, y, index }) {
    const nodeRef = useRef(null);
    const [dragging, setDragging] = useState(false);

    function onMouseDown(e) {
      e.preventDefault(); // prevent text selection

      setDragging(true);
      const offsetX = e.clientX - x;
      const offsetY = e.clientY - y;

      function onMouseMove(e) {
        if (dragging) {
          const newX = e.clientX - offsetX;
          const newY = e.clientY - offsetY;
          updateItemPosition(index, newX, newY);
        }
      }

      function onMouseUp() {
        setDragging(false);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      }

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }

    return (
      <div
        ref={nodeRef}
        className={styles.node}
        style={{ left: x, top: y }}
        onMouseDown={onMouseDown}
      >
        <img src={img} alt={label} className={styles.nodeImage} />
      </div>
    );
  }

  return (
    <div ref={(el) => {
      setNodeRef(el); // for drop zone
      if (ref) ref.current = el; // for external mouse position calculation
    }} className={styles.canvas}>
      {items.map((item, index) => (
        <DraggableNode
          key={item.id}
          id={item.id}
          img={item.img}
          label={item.label}
          x={item.x}
          y={item.y}
          index={index}
        />
      ))}
    </div>
  );
});

export default Canvas;
