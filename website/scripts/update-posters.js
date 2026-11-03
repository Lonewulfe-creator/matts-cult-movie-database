const fs = require("fs");

const API_KEY = process.env.TMDB_API_KEY;
const filmsPath = "./website/data/films.json";

async function updatePosters() {
  const films = JSON.parse(
    fs.readFileSync(filmsPath, "utf8")
  );

  for (const film of films) {
    console.log(`Searching: ${film.title}`);

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        film.title
      )}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          accept: "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.results?.length > 0) {
      const movie = data.results[0];

      if (movie.poster_path) {
        film.poster =
          `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        console.log(`✓ Found poster for ${film.title}`);
      }
    } else {
      console.log(`✗ No match for ${film.title}`);
    }
  }

  fs.writeFileSync(
    filmsPath,
    JSON.stringify(films, null, 2)
  );

  console.log("Finished updating posters");
}

updatePosters();