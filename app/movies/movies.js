export default function Movie({name, actor, img})
{
    return (
        <div className="grid h-80 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2>
            {name}
        </h2>
        <h3>{actor}</h3>
        <img className="h-40" src= {img}></img>
        </div>
    );
}