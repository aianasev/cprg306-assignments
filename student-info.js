export default function StudentInfo({name, github})
{
    return (
        <div className="flex flex-col items-center">
        <h2 className="font-bold text-green-800">
        Name: {name}
        </h2>
        <h3 className="hover:text-green-500 mt-2">Github Link: <a href = {github} target="_blank">{github}</a></h3>
        </div>
    );
}