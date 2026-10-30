export default function FilmsPage() {
  const films = [
    { title: "Suspiria", year: 1977 },
    { title: "Possession", year: 1981 },
    { title: "Videodrome", year: 1983 },
    { title: "The Beyond", year: 1981 },
    { title: "The Thing", year: 1982 },
    { title: "Society", year: 1989 },
  ];

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        Film Collection
      </h1>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {films.map((film) => (
          <div
            key={film.title}
            className="rounded-xl bg-zinc-900 p-4"
          >
            <div className="mb-4 h-80 rounded bg-zinc-800"></div>

            <h2 className="font-semibold">
              {film.title}
            </h2>

            <p className="text-zinc-400">
              {film.year}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}