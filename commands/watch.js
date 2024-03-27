const axios = require("axios");
const getID = require("./getID.js");

async function handleWatch(message, arg) {
  let year, region;
let argParts = arg.split(',');

let firstPart = argParts[0].trim();
let spaceIndex = firstPart.indexOf(' ');

let type = firstPart.substring(0, spaceIndex).trim();
let title = firstPart.substring(spaceIndex + 1).trim();


title = title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

if (argParts.length > 1) {
  year = parseInt(argParts[1].trim());
}

if (argParts.length > 2) {
  region = argParts[2].trim().toUpperCase();
}

console.log("Type:", type);
console.log("Title:", title);
console.log("Year:", year);
console.log("Region:", region);


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
          movieId = getID.movieId(movieId, year, data);
          console.log(movieId);

          const response2 = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apiKey}`

          );
          data2 = await response2.json();
          const buy = data2.results.US !== undefined ? data2.results.US.buy : undefined;
          let buyProviders = buy !== undefined ? buy.map(b => b.provider_name) : "N/A";
          buyProviders = JSON.stringify(buyProviders);
          buyProviders = buyProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');
 
          const flatrate = data2.results[region] !== undefined ? data2.results[region].flatrate : undefined;
          let flatProviders = flatrate !== undefined ? flatrate.map(flatrate => flatrate.provider_name) : "N/A";
         flatProviders = JSON.stringify(flatProviders);
         flatProviders = flatProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');
          message.reply(`/adduhtml Streaming, ${title} can be streamed or purchased through the following platforms: <br><br> <Strong>Flatrate streaming:</Strong> ${flatProviders} <br> <Strong>Buying:</Strong> ${buyProviders} <br><br> Data provided by <a href="https://www.justwatch.com">JustWatch</a>!`);
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
          console.log('test');
          let showId;
          showId = getID.showId(showId, year, data);
          console.log(showId);


          const response2 = await fetch(
            `https://api.themoviedb.org/3/tv/${showId}/watch/providers?api_key=${apiKey}`

          );
         data2 = await response2.json();
        //console.log(data2.results);
         const buy = data2.results[region] !== undefined ? data2.results[region].buy : undefined;
         //console.log(buy);
         let buyProviders = buy !== undefined ? buy.map(b => b.provider_name) : "N/A";
         buyProviders = JSON.stringify(buyProviders);
         buyProviders = buyProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');

         const flatrate = data2.results[region] !== undefined ? data2.results[region].flatrate : undefined;
         let flatProviders = flatrate !== undefined ? flatrate.map(flatrate => flatrate.provider_name) : "N/A";
         flatProviders = JSON.stringify(flatProviders);
         flatProviders = flatProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');


         message.reply(`/adduhtml Streaming, ${title} can be streamed or purchased through the following platforms: <br><br> <Strong>Flatrate streaming:</Strong> ${flatProviders} <br> <Strong>Buying:</Strong> ${buyProviders} <br><br> Data provided by <a href="https://www.justwatch.com">JustWatch</a>!`);
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


handleWatch.requiresArgs = true;
module.exports = handleWatch;
