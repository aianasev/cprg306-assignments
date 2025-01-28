import Movie from "./movies"

export default function Page() 
{
    return (

        <>
        <h1 className = "text-lg text-blue-400">Movie List</h1>
        <Movie name="Catch Me If You Can" actor = "Leonardo Di Caprio" img="https://pics.filmaffinity.com/catch_me_if_you_can-348431648-mmed.jpg">
        </Movie>
        <Movie name = "Avengers" actor = "Robert Downey Jr." img = "https://th.bing.com/th/id/OIP.HLaE6e2mFuCr0VssswIzWwHaKN?rs=1&pid=ImgDetMain">

        </Movie>
        </>
    );
}

// export default function Movie({name, actor, img})
// {
//     return (
//         <div className="grid h-80 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//         <h2>
//             {name}
//         </h2>
//         <h3>{actor}</h3>
//         <img className="h-40" src= {img}></img>
//         </div>
//     );
// }