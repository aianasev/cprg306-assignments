import ItemList from "./item-list";

export default function Page() 
{
    return (
      <main>
        <h1 className="bg-green-400 font-bold text-xl text-yellow-200 flex flex-col items-center py-10">Shopping List</h1>
        <ItemList></ItemList>
      </main>
    );
}