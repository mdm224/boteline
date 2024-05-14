function movieId(movieId, year, data)
{
  if (year) {
    const movieWithYear = data.results.find(
      (movie) =>
        movie.release_date &&
        new Date(movie.release_date).getFullYear() === year,
    );
    if (movieWithYear) {
     return movieId = movieWithYear.id;
    } else {
      return "No results found for the provided title and year.";
    }
  } else {
    console.log(data.results[0].id);
    return movieId = data.results[0].id;
  }
}


function showId(showId, year, data)
{
  if (year) {
    const showWithYear = data.results.find(
      (show) =>
        show.first_air_date &&
        new Date(show.first_air_date).getFullYear() === year,
    );
    if (showWithYear) {
      return showId = showWithYear.id;
    } else {
      return "No results found for the provided title and year.";
    }
  } else {
    return showId = data.results[0].id;
  }
}


module.exports = { movieId, showId};