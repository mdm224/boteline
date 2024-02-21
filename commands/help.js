async function handleHelp(message, arg) {
    return message.reply('!code Current commands are: \nrandgraycie - posts a random picture of graycie \nrandskip - posts a random picture of skipper \nrandcapy - posts a random picture of a capybara \nping - responds pong!  \nmetal - provides the metal-archives link of the requested band \ntmdb - provides the overview, release year, rating, and poster of the request show/movies. specify if show or movie in command such as -tmdb tv spongebob squarepants or -tmdb movie barbie');
}

handleHelp.requiresArgs = false;
module.exports = handleHelp;