import films from "../data/films.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-red-600">
            Matt&apos;s Cult Movie Database
          </h1>

          <nav className="flex gap-6 font-semibold text-zinc-300">
            <a href="/films">Films</a>
            <a href="#">Top 100</a>
            <a href="#">Watchlist</a>
            <a href="#">Stats</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-7xl font-bold leading-tight">
          Discover the Greatest
          <br />
          Cult Movies Ever Made
        </h2>

        <p className="mt-6 text-xl text-zinc-400">
          Horror • Sci-Fi • Giallo • Exploitation • Midnight Movies
        </p>

        <div className="mt-10">
          <input
            type="text"
            placeholder="Search films..."
            className="w-full max-w-xl rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-2xl border border-red-900 bg-gradient-to-r from-red-950 to-black p-10">
          <h3 className="text-3xl font-bold">
            #1 An American Werewolf in London
          </h3>

          <p className="mt-4 text-zinc-300">
            Matt&apos;s highest-ranked cult movie from the collection.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h3 className="mb-8 text-3xl font-bold">
          Top Ranked Films
        </h3>

        <div className="grid gap-6 md:grid-cols-4">
          {films.slice(0, 4).map((film) => (
            <div
              key={film.rank}
              className="rounded-xl bg-zinc-900 p-4 transition duration-300 hover:scale-105 hover:bg-zinc-800"
            >
              <div className="mb-4 h-80 rounded bg-zinc-800"></div>

              <h4 className="font-semibold text-red-500">
                #{film.rank} {film.title}
              </h4>

              <p className="text-zinc-400">
                {film.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="mb-6 text-3xl font-bold">
          Collection Stats
        </h3>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-zinc-900 p-6">
            <h4 className="text-4xl font-bold text-red-500">
              250+
            </h4>

            <p className="text-zinc-400">
              Films
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h4 className="text-4xl font-bold text-red-500">
              100
            </h4>

            <p className="text-zinc-400">
              Top Ranked
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h4 className="text-4xl font-bold text-red-500">
              24
            </h4>

            <p className="text-zinc-400">
              Genres
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h4 className="text-4xl font-bold text-red-500">
              1980s
            </h4>

            <p className="text-zinc-400">
              Favourite Decade
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}