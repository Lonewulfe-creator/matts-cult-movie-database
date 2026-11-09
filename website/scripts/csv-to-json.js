const fs = require("fs");

const csv = fs.readFileSync("./data/films.csv", "utf8");

const lines = csv
  .split("\n")
  .filter(line => line.trim() !== "")
  .filter(line => !/^,+$/.test(line.trim()));

const headers = lines[0]
  .split(",")
  .map(h => h.trim());

const films = [];

for (let i = 1; i < lines.length; i++) {
  const row = lines[i];

  if (!row.trim()) continue;

  const cols = row.match(
    /(".*?"|[^",]+)(?=\s*,|\s*$)/g
  );

  if (!cols || cols.length < 15) continue;

  const film = {
    rank: Number(cols[12]),
    title: cols[0].replace(/^"|"$/g, ""),
    year: Number(cols[1]),
    director: cols[13].replace(/^"|"$/g, ""),
    genre: cols[10].replace(/^"|"$/g, ""),
    subGenre: cols[11].replace(/^"|"$/g, ""),
    poster: "",

    whereToWatch: cols[2].replace(/^"|"$/g, ""),
    aiScore: Number(cols[3]),
    imdbScore: Number(cols[4]),
    cultScore: Number(cols[5]),
    collectionScore: Number(cols[6]),

    watchedStatus: cols[7].replace(/^"|"$/g, ""),
    synopsis: cols[9].replace(/^"|"$/g, ""),

    country: cols[14].replace(/^"|"$/g, ""),
    decade: cols[15]
      ? cols[15].replace(/^"|"$/g, "")
      : ""
  };

  films.push(film);
}

films.sort((a, b) => a.rank - b.rank);

fs.writeFileSync(
  "./data/films.json",
  JSON.stringify(films, null, 2)
);

console.log(`Created ${films.length} films`);
