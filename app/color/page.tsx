'use client'

import { useState } from 'react';

const initialColors = [
    'red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'cyan'
];

const ColorPalette = () => {
    const [colors, setColors] = useState<string[]>(initialColors);

    const handleColorChange = (index: number, newColor: string) => {
        const newColors = [...colors];
        newColors[index] = newColor;
        setColors(newColors);
    };

    const handleDragStart = (index: number) => {
        const newColors = [...colors];
        const draggedItem = newColors.splice(index, 1)[0];
        setColors(newColors);
        setDraggingItem(draggedItem);
    };

    const handleDrop = (index: number) => {
        const newColors = [...colors];
        newColors.splice(index, 0, draggingItem);
        setColors(newColors);
        setDraggingItem('');
    };

    const [draggingItem, setDraggingItem] = useState<string>('');

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Color Palette</h1>
            <div className="grid grid-cols-4 gap-4">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center"
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(index)}
                    >
                        <div
                            className={`w-16 h-16 mb-2`}
                            style={{ backgroundColor: color }}
                        />
                        <input
                            type="text"
                            value={color}
                            onChange={(e) => handleColorChange(index, e.target.value)}
                            className="p-1 border rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;
