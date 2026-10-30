export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-red-600">
            Matt's Cult Movie Database
          </h1>

          <nav className="flex gap-6 text-zinc-300">
            <a href="#">Films</a>
            <a href="#">Top 100</a>
            <a href="#">Watchlist</a>
            <a href="#">Stats</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-7xl font-bold">
          Discover Cult Cinema
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

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h3 className="mb-8 text-3xl font-bold">Featured Films</h3>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-zinc-900 p-4">
            <div className="mb-4 h-80 rounded bg-zinc-800"></div>
            <h4>Suspiria</h4>
            <p className="text-zinc-400">1977</p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-4">
            <div className="mb-4 h-80 rounded bg-zinc-800"></div>
            <h4>Possession</h4>
            <p className="text-zinc-400">1981</p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-4">
            <div className="mb-4 h-80 rounded bg-zinc-800"></div>
            <h4>Videodrome</h4>
            <p className="text-zinc-400">1983</p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-4">
            <div className="mb-4 h-80 rounded bg-zinc-800"></div>
            <h4>The Beyond</h4>
            <p className="text-zinc-400">1981</p>
          </div>
        </div>
      </section>
    </main>
  );
}