export default function Item({name, quantity, category})
{
    return (
        <div className="bg-yellow-100 p-4 m-2 rounded-lg shadow-md w-64 text-center">
        <h2 className="font-bold text-green-400">
        {name}
        </h2>
        <h3 className="text-green-700">
        Quantity: {quantity}
        </h3>
        <h3 className="text-green-700">
        Category: {category}
        </h3>
        </div>
    );
}