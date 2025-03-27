

const ColorList = ({ colors, selectedColor, onSelectColor }) => {
    return (
        <div className="mt-4">
            <h4 className="text-lg font-semibold">Color</h4>
            <ul className="flex gap-3 mt-2">
                {colors.map((color) => (
                    <li 
                        key={color} 
                        onClick={() => onSelectColor(color)} 
                        className={`w-8 h-8 rounded-full cursor-pointer transition duration-300 
                            border-2 ${selectedColor === color ? 'border-black scale-110' : 'border-transparent'} 
                            shadow-md hover:scale-110`}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </ul>
            <p className="mt-2 text-gray-700">
                Active Color: <span className="font-semibold" style={{ color: selectedColor }}>
                    {selectedColor || 'None'}
                </span>
            </p>
        </div>
    );
};

export default ColorList;
