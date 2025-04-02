export default function Item({ id, name, quantity, category, onSelect }) {
    const handleClick = () => {
      onSelect(name);
    };
  
    return (
      <div
        className="p-4 bg-green-300 rounded-lg shadow mb-4 cursor-pointer"
        onClick={handleClick}
      >
        <h3 className="font-bold text-black">{name}</h3>
        <p className="text-gray-700">Quantity: {quantity}</p>
        <p className="text-gray-500">Category: {category}</p>
      </div>
    );
  }
  