'use client';

import React, { useRef, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import Canvas from '@/components/Canvas';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import styles from './workplace.module.css';

export default function Workplace() {
  const [items, setItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const updateItemPosition = (index, newX, newY) => {
    setItems((prev) =>
      prev.map((node, i) =>
        i === index ? { ...node, x: newX, y: newY } : node
      )
    );
  };

  return (
    <DndContext
      onDragStart={(event) => {
        setDraggedItem({
          label: event.active.data.current?.label,
          img: event.active.data.current?.img,
        });
      }}
      onPointerMove={(event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
      }}
      onDragEnd={(event) => {
        const { over, active } = event;

        if (over?.id === 'canvas-dropzone' && canvasRef.current) {
          const canvasRect = canvasRef.current.getBoundingClientRect();

          const newItem = {
            id: active.id + '-' + Date.now(),
            label: active.data.current?.label,
            img: active.data.current?.img,
            x: cursorPosition.x - canvasRect.left,
            y: cursorPosition.y - canvasRect.top,
          };

          setItems((prev) => [...prev, newItem]);
        }

        setDraggedItem(null);
      }}
    >
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.rightSide}>
          <TopBar />
          <Canvas
            ref={canvasRef}
            items={items}
            updateItemPosition={updateItemPosition}
          />
        </div>
      </div>

      <DragOverlay>
        {draggedItem ? (
          <div style={{ width: 50, height: 50 }}>
            <img
              src={draggedItem.img}
              alt={draggedItem.label}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
