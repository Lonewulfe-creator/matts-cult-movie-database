import Image from "next/image";
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
            <div className="mb-4 h-80 overflow-hidden rounded">
              {film.poster ? (
                <Image
                  src={film.poster}
                  alt={film.title}
                  width={300}
                  height={450}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-zinc-800"></div>
              )}
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
