const axios = require("axios");
const getID = require("./getID.js");

async function handleWatch(message, arg) {
let year, region;
let argParts = arg.split(',');

let firstPart = argParts[0].trim();
let spaceIndex = firstPart.indexOf(' ');

let type = firstPart.substring(0, spaceIndex).trim();
let title = firstPart.substring(spaceIndex + 1).trim();





const yearMatch = arg.match(/(\d{4})/);
  title = title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  if (yearMatch) {
    year = parseInt(yearMatch[0]);
    arg = arg.replace(yearMatch[0], "").trim();
    title = title.replace(yearMatch[0], "").trim();
  }

  
if (argParts.length > 1) {
  region = argParts[1].trim().toUpperCase();
}
else {
  region = "US";
}

console.log("Type:", type);
console.log("Title:", title);
console.log("Year:", year);
console.log("Region:", region);


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

          const response2 = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apiKey}`

          );
          data2 = await response2.json();
          console.log(data2.results[region]);
          const buy = data2.results[region] !== undefined ? data2.results[region].buy : undefined;
          let buyProviders = buy !== undefined ? buy.map(b => b.provider_name) : "N/A";
          buyProviders = JSON.stringify(buyProviders);
          buyProviders = buyProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');

          const rent = data2.results[region] !== undefined ? data2.results[region].rent : undefined;
          let rentProviders = buy !== undefined ? rent.map(b => b.provider_name) : "N/A";
          rentProviders = JSON.stringify(rentProviders);
          rentProviders = rentProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');

          const free = data2.results[region] !== undefined ? data2.results[region].free : undefined;
          let freeProviders = free !== undefined ? free.map(free => free.provider_name) : "N/A";
          freeProviders = JSON.stringify(freeProviders);
          freeProviders = freeProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');
          console.log(freeProviders);
 
          const flatrate = data2.results[region] !== undefined ? data2.results[region].flatrate : undefined;
          let flatProviders = flatrate !== undefined ? flatrate.map(flatrate => flatrate.provider_name) : "N/A";
          flatProviders = JSON.stringify(flatProviders);
          flatProviders = flatProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');
          message.reply(`/adduhtml ${title}_${region}, <div style="background: linear-gradient(to right, #1a0659, #00b3ff); padding: 10px; border-radius: 5px; color: white;">${title} can be streamed or purchased through the following platforms: <br><br> <Strong>Free streaming: </Strong> ${freeProviders} <br> <Strong>Subscription streaming:</Strong> ${flatProviders} <br> <Strong>Renting:</Strong> ${rentProviders} <br> <Strong>Buying:</Strong> ${buyProviders} <br><br> Data provided by <a href="https://www.justwatch.com" style="color: white;">JustWatch</a>! (To see prices, check <a href="https://www.themoviedb.org/movie/${movieId}/watch?translate=false&locale=${region}"  style="color: white;">TMDB</a>!)</div>`);

        } else {
          return "No results found for the provided title.";
        }
      } catch (error) {
        console.error(title + "Error fetching data from TMDB:", error.message);
        return "Error fetching data from TMDB.";
      }
    } else if (type === "tv" || type === "show") {
      try {
        type = "tv";
        const searchUrl = `${baseUrl}/search/${type}?api_key=${apiKey}&query=${encodeURIComponent(title)}`;
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
        console.log(data2.results);
         const buy = data2.results[region] !== undefined ? data2.results[region].buy : undefined;
         //console.log(buy);

        const free = data2.results[region] !== undefined ? data2.results[region].free : undefined;
        let freeProviders = free !== undefined ? free.map(free => free.provider_name) : "N/A";
        freeProviders = JSON.stringify(freeProviders);
        freeProviders = freeProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');
        console.log(freeProviders);
          

         let buyProviders = buy !== undefined ? buy.map(b => b.provider_name) : "N/A";
         buyProviders = JSON.stringify(buyProviders);
         buyProviders = buyProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');

         const flatrate = data2.results[region] !== undefined ? data2.results[region].flatrate : undefined;
         let flatProviders = flatrate !== undefined ? flatrate.map(flatrate => flatrate.provider_name) : "N/A";
         flatProviders = JSON.stringify(flatProviders);
         flatProviders = flatProviders.replace(/[\[\]"]/g, '').replace(/,/g, ', ');


         message.reply(`/adduhtml ${title}_${region}, <div style="background: linear-gradient(to right, #1a0659, #00b3ff); padding: 10px; border-radius: 5px; color: white;">${title} can be streamed or purchased through the following platforms: <br><br> <Strong>Free streaming: </Strong> ${freeProviders} <br> <Strong>Subscription streaming:</Strong> ${flatProviders} <br> <Strong>Buying:</Strong> ${buyProviders} <br><br> Data provided by <a href="https://www.justwatch.com" style="color: white;">JustWatch</a>!  (To see prices, check <a href="https://www.themoviedb.org/tv/${showId}/watch?translate=false&locale=${region}"  style="color: white;">TMDB</a>!)</div>`);

          return;
        } else {
          return "No results found for the provided title.";
        }
      } catch (error) {
        console.error(title + "Error fetching data from TMDB:", error.message);
        return "Error fetching data from TMDB.";
      }
    }
  }

  fetchDetails(title, type);
}


handleWatch.requiresArgs = true;
module.exports = handleWatch;
