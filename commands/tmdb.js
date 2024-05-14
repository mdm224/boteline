const axios = require("axios");
const getID = require("./getID.js");

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
    const apiKey = "";
    const baseUrl = "https://api.themoviedb.org/3";
    console.log("Type:", type);
    console.log("Title:", title);
    

    if (type === "movie" || type === "film") {
      try {
        type = "movie";
        const searchUrl = `${baseUrl}/search/${type}?api_key=${apiKey}&query=${encodeURIComponent(title)}`;

        const response = await axios.get(searchUrl);
        var data = response.data;
        
        if (data.results && data.results.length > 0) {
          let movieId;
          movieId = getID.movieId(movieId, year, data);
          console.log(movieId);
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
          );
          
          data = await response.json();
      
          const release = data.release_date
          const imgUrl = data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : "https://banner2.cleanpng.com/20180422/pqw/kisspng-photographic-film-movie-icons-cinema-clapperboard-5adc6cb00e9939.5609916715243951840598.jpg";
            const {overview = "N/A", vote_average: rating = "N/A", vote_count: votes = "N/A", runtime = "N/A"} = data;
          var genresArray = data.genres.map((genre) => genre.name);

          console.log(`genre: ${genresArray.join(", ")}`);
          console.log(`overview: ${overview}`);
          console.log(`rating: ${rating}`);
          console.log(`votes: ${votes}`);
          console.log(`imgUrl: ${imgUrl}`);
          console.log(`release: ${release}`);
          
          message.reply(`/adduhtml ${title},
                    <div style="float:left; margin-right:10px; overflow: scroll;">
                        <img src="${imgUrl}" width="175" height="225">
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
          message.reply (`${title} was not found on tmdb`);
          return;
        }
      } catch (error) {
        console.error(title + "Error fetching data from TMDB:", error.message);
        return message.reply("Error fetching data from TMDB.");
      }
    } else if (type === "tv" || type === "show") {
      try {
        type = "tv";
        const searchUrl = `${baseUrl}/search/${type}?api_key=${apiKey}&query=${encodeURIComponent(title)}`;
        const response = await axios.get(searchUrl);
        var data = response.data;
        

        if (data.results && data.results.length > 0) {
          let showId;
          showId = getID.showId(showId, year, data);
          console.log(showId);


          const response = await fetch(
            `https://api.themoviedb.org/3/tv/${showId}?api_key=${apiKey}&language=en-US`,
          );
          data = await response.json();
          const release = data.first_air_date
            ? new Date(data.first_air_date).getFullYear()
            : "N/A";
          const imgUrl = data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : "https://banner2.cleanpng.com/20180422/pqw/kisspng-photographic-film-movie-icons-cinema-clapperboard-5adc6cb00e9939.5609916715243951840598.jpg";
          const {overview = "N/A", vote_average: rating = "N/A", number_of_seasons: seasons = "N/A", vote_count: votes = "N/A"} = data;
          var genresArray = data.genres ? data.genres.map((genre) => genre.name) : "N/A";

          //  console.log(data);
            console.log(`genre: ${genresArray.join(", ")}`);
            console.log(`overview: ${overview}`);
            console.log(`rating: ${rating}`);
            console.log(`seasons: ${seasons}`);
            console.log(`votes: ${votes}`);
            console.log(`imgUrl: ${imgUrl}`);
            console.log(`release: ${release}`);
          message.reply(`/adduhtml ${title},
                        <div style="float:left; margin-right:10px; overflow: scroll;">
                        <img src="${imgUrl}" width="175" height="225">
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
          message.reply (`${title} was not found on tmdb`);
          return;
        }
      } catch (error) {
        console.error(title + "Error fetching data from TMDB:", error.message);
        return message.reply("Error fetching data from TMDB. Title: " + title);
      }
    }
  }

  fetchDetails(title, type);
}


handleTmdb.requiresArgs = true;
module.exports = handleTmdb;
