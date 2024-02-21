const axios = require('axios');

async function handleTmdb(message, arg) {
    [type, title] = arg.split(/\s+(.+)/).filter(Boolean);
        console.log('Type:', type);
        console.log('Title:', title);

        async function fetchDetails(title, type) {
            const apiKey = '';
            const baseUrl = 'https://api.themoviedb.org/3';
            console.log('Type:', type);
        console.log('Title:', title);
            const searchUrl = `${baseUrl}/search/${type}?api_key=${apiKey}&query=${encodeURIComponent(title)}`;
        
            if (type === "movie"){
            try {
                const response = await axios.get(searchUrl);
                var data = response.data;
                console.log("no issues");
        
                if (data.results && data.results.length > 0) {
                    const movieId = data.results[0].id;

                    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
                    data = await response.json();
                    const overview = data.overview;
                    const release = data.release_date ? new Date(data.release_date).getFullYear() : 'N/A';
                    const imgUrl = data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : 'N/A';
                    const rating = data.vote_average;
                    const votes = data.vote_count;
                    const seasons = 'N/A';
                    const runtime = data.runtime + ' minutes';
                    var genresArray = data.genres.map(genre => genre.name);

                    console.log('TMDB API Response:', data);
                    message.reply(`/adduhtml Info,
                    <div style="float:left; margin-right:10px; border: 2px solid black; padding: 10px;">
                        <img src="${imgUrl}" width="170" height="195">
                    </div> 
                        <div style="border: 5px solid black; border-radius: 30px; padding: 10px; height: 185px;">
                        <strong>Overview:</strong><br>${overview}<br>
                        <strong>Genres:</strong> ${genresArray.join(', ')}<br>
                        <strong>Released:</strong> ${release}<br>
                        <strong>Runtime:</strong> ${runtime}<br>
                        <strong>Rating:</strong> ${rating}<br>
                        <strong>Number of votes:</strong> ${votes}
                    </div>`);
                        return;
                } else {
                    return 'No results found for the provided title.';
                }
            } catch (error) {
                console.error('Error fetching data from TMDB:', error.message);
                return 'Error fetching data from TMDB.';
            }
            
        }
            else{
                try {
                    const response = await axios.get(searchUrl);
                    var data = response.data;
            
                    if (data.results && data.results.length > 0) {
                        const showId = data.results[0].id;

                        const response = await fetch(`https://api.themoviedb.org/3/tv/${showId}?api_key=${apiKey}&language=en-US`);
                        data = await response.json();
                        const overview = data.overview;
                        const release = data.first_air_date ? new Date(data.first_air_date).getFullYear() : 'N/A';
                        const imgUrl = data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : 'N/A';
                        const rating = data.vote_average;
                        const votes = data.vote_count;
                        const seasons = data.number_of_seasons;
                        const runtime = 'N/A';
                        var genresArray = data.genres.map(genre => genre.name);
                        
                       // console.log("Genres:", genresArray);

                        console.log('TMDB API Response:', data);

                        message.reply(`/adduhtml Info,
                        <div style="float:left; margin-right:10px; padding: 10px;">
                        <img src="${imgUrl}" width="170" height="195">
                    </div> 
                        <div style="border: 5px solid gray; border-radius: 10px; padding: 10px; height: 185px;">
                        <strong>Overview:</strong><br>${overview}<br>
                        <strong>Genres:</strong> ${genresArray.join(', ')}<br>
                        <strong>Released:</strong> ${release}<br>
                        <strong>Seasons:</strong> ${seasons}<br>
                        <strong>Rating:</strong> ${rating}<br>
                        <strong>Number of votes:</strong> ${votes}
                    </div>`);
                        return;
                    } else {
                        return 'No results found for the provided title.';
                    }
                } catch (error) {
                    console.error('Error fetching data from TMDB:', error.message);
                    return 'Error fetching data from TMDB.';
                }
            }
    }
        
            fetchDetails(title, type);
        
}


handleTmdb.requiresArgs = true;
module.exports = handleTmdb;
