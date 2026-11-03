import Image from "next/image";
import films from "../data/films.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-red-600">
            Lonewulfe's Vault of Cult Cinema
          </h1>

          <nav className="flex gap-6 font-semibold text-zinc-300">
            <a href="/films">Films</a>
            <a href="#">Top 100</a>
            <a href="#">Watchlist</a>
            <a href="#">Stats</a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-[850px] items-center justify-center overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-red-950/70"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-7xl font-bold tracking-wider text-red-500 drop-shadow-[0_0_25px_rgba(220,38,38,0.7)] md:text-8xl">
            LONEWULFE'S
          </h2>

          <h3 className="mt-2 text-4xl tracking-[0.3em] text-white md:text-5xl">
            VAULT OF CULT CINEMA
          </h3>

          <p className="mt-8 text-lg uppercase tracking-[0.4em] text-zinc-300">
            Obscure • Unsettling • Unforgettable
          </p>

          <p className="mt-6 text-xl text-zinc-300">
            Horror • Sci-Fi • Giallo • Exploitation • Midnight Movies
          </p>

          <div className="mx-auto mt-12 max-w-3xl">
            <input
              type="text"
              placeholder="Search the vault..."
              className="w-full rounded-xl border border-zinc-700 bg-black/40 p-5 text-center text-lg text-white backdrop-blur-sm"
            />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg border border-zinc-800 bg-black/60 p-4">
              <div className="text-3xl font-bold text-red-500">
                {films.length}
              </div>
              <div className="text-sm uppercase tracking-wider text-zinc-400">
                Films
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-black/60 p-4">
              <div className="text-3xl font-bold text-red-500">
                24
              </div>
              <div className="text-sm uppercase tracking-wider text-zinc-400">
                Genres
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-black/60 p-4">
              <div className="text-3xl font-bold text-red-500">
                10
              </div>
              <div className="text-sm uppercase tracking-wider text-zinc-400">
                Decades
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-black/60 p-4">
              <div className="text-3xl font-bold text-red-500">
                100
              </div>
              <div className="text-sm uppercase tracking-wider text-zinc-400">
                Top Ranked
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-2xl border border-red-900 bg-gradient-to-r from-red-950 to-black p-10">
          <h3 className="text-3xl font-bold">
            #{films[0].rank} {films[0].title}
          </h3>

          <p className="mt-4 text-zinc-300">
            Lonewulfe's highest-ranked cult movie from the collection.
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
