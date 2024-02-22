const axios = require("axios");

async function handleTmdb(message, arg) {
  let year;
  const yearMatch = arg.match(/(\d{4})$/);
  if (yearMatch) {
    year = parseInt(yearMatch[0]);
    arg = arg.replace(yearMatch[0], "").trim();
  }

  [type, title] = arg.split(/\s+(.+)/).filter(Boolean);

  console.log("Type:", type);
  console.log("Title:", title);
  console.log("Year:", year);

  async function fetchDetails(title, type) {
    const apiKey = "1b7797bda0882359202e6bc898084d1e";
    const baseUrl = "https://api.themoviedb.org/3";
    console.log("Type:", type);
    console.log("Title:", title);
    const searchUrl = `${baseUrl}/search/${type}?api_key=${apiKey}&query=${encodeURIComponent(title)}`;

    if (type === "movie") {
      try {
        const response = await axios.get(searchUrl);
        var data = response.data;

        if (data.results && data.results.length > 0) {
          let movieId;
          if (year) {
            const movieWithYear = data.results.find(
              (movie) =>
                movie.release_date &&
                new Date(movie.release_date).getFullYear() === year,
            );
            if (movieWithYear) {
              movieId = movieWithYear.id;
            } else {
              return "No results found for the provided title and year.";
            }
          } else {
            movieId = data.results[0].id;
          }

          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
          );
          data = await response.json();
          const release = data.release_date
            ? new Date(data.release_date).getFullYear()
            : "N/A";
          const imgUrl = data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : "N/A";
          const {overview, vote_average: rating, vote_count: votes, runtime} = data;
          var genresArray = data.genres.map((genre) => genre.name);

          console.log("TMDB API Response:", data);
          message.reply(`/adduhtml Info,
                    <div style="float:left; margin-right:10px; overflow: scroll;">
                        <img src="${imgUrl}" width="200" height="225">
                    </div> 
                        <div style="border: 5px solid gray; border-radius: 10px; padding: 10px; height: 195px; overflow: scroll;">
                        <strong>Overview:</strong><br>${overview}<br>
                        <strong>Genres:</strong> ${genresArray.join(", ")}<br>
                        <strong>Released:</strong> ${release}<br>
                        <strong>Runtime:</strong> ${runtime} minutes<br>
                        <strong>Rating:</strong> ${rating}<br>
                        <strong>Number of votes:</strong> ${votes}
                    </div>`);
          return;
        } else {
          return "No results found for the provided title.";
        }
      } catch (error) {
        console.error("Error fetching data from TMDB:", error.message);
        return "Error fetching data from TMDB.";
      }
    } else {
      try {
        const response = await axios.get(searchUrl);
        var data = response.data;

        if (data.results && data.results.length > 0) {
          let showId;
          if (year) {
            const showWithYear = data.results.find(
              (show) =>
                show.first_air_date &&
                new Date(show.first_air_date).getFullYear() === year,
            );
            if (showWithYear) {
              showId = showWithYear.id;
            } else {
              return "No results found for the provided title and year.";
            }
          } else {
            showId = data.results[0].id;
          }

          const response = await fetch(
            `https://api.themoviedb.org/3/tv/${showId}?api_key=${apiKey}&language=en-US`,
          );
          data = await response.json();
          const release = data.first_air_date
            ? new Date(data.first_air_date).getFullYear()
            : "N/A";
          const imgUrl = data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : "N/A";
          const {overview, vote_average: rating, number_of_seasons: seasons, vote_count: votes} = data;
          var genresArray = data.genres.map((genre) => genre.name);

          // console.log("Genres:", genresArray);

          console.log("TMDB API Response:", data);

          message.reply(`/adduhtml Info,
                        <div style="float:left; margin-right:10px; overflow: scroll;">
                        <img src="${imgUrl}" width="200" height="225">
                    </div> 
                        <div style="border: 5px solid gray; border-radius: 10px; padding: 10px; height: 195px; overflow: scroll;">
                        <strong>Overview:</strong><br>${overview}<br>
                        <strong>Genres:</strong> ${genresArray.join(", ")}<br>
                        <strong>Released:</strong> ${release}<br>
                        <strong>Seasons:</strong> ${seasons}<br>
                        <strong>Rating:</strong> ${rating}<br>
                        <strong>Number of votes:</strong> ${votes}
                    </div>`);
          return;
        } else {
          return "No results found for the provided title.";
        }
      } catch (error) {
        console.error("Error fetching data from TMDB:", error.message);
        return "Error fetching data from TMDB.";
      }
    }
  }

  fetchDetails(title, type);
}

handleTmdb.requiresArgs = true;
module.exports = handleTmdb;
