import films from "../../data/films.json";




export default function FilmsPage() {
  
  
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        Film Collection
      </h1>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {films.map((film) => (
          <div
            key={film.rank}
            
           className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg transition duration-300 hover:scale-105 hover:border-red-500 hover:bg-zinc-800"
          >

            <div className="mb-4 flex h-80 items-end rounded bg-gradient-to-t from-black via-zinc-900 to-zinc-700 p-6">
              
  <div className="w-full">

    
    <div className="text-2xl font-bold text-white">

      
      {film.title}
    </div>
    <div className="mt-2 text-sm">
      {film.year}
    </div>
  </div>
</div>

            

            <h2 className="font-semibold text-red-500">
              #{film.rank} {film.title}
            </h2>

            <p className="text-zinc-400">
              {film.year}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {film.director}
            </p>

            <p className="text-sm text-red-400">
              {film.subGenre}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
