const API_KEY = process.env.TMDB_API_KEY;

export async function getMoviePoster(title: string) {
  if (!API_KEY) return null;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`,
      {
        next: { revalidate: 86400 },
      }
    );

    const data = await response.json();

    if (!data.results?.length) {
      return null;
    }

    const movie = data.results[0];

    if (!movie.poster_path) {
      return null;
    }

    return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  } catch {
    return null;
  }
}
