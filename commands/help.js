async function handleHelp(message, arg) {
    return message.reply('!code Current commands are: '+ 
    '\nrand(enterAnimal): posts a random picture of the requested animal. Current options include: Graycie, Skip, Capy, Ferret, Axolotl, Leopard, Raccoon, Turtle, Fish, tt (Down the Tubes 2 cats), Deli, and Panda\n'+
    '\nYou can also just use randanimal itself as a command, and it will randomly select one of the options listed above and post an image of the selected animal/pet\n' + 
    '\ntmdb: Provides the overview, release date, genre, rating, and number of rates for TV shows and movies. TV shows also return the amount of seasons, and movies return the runtime.'+
    '\nexample usage: -tmdb tv better call saul or -tmdb movie star wars: revenge of the sith. You can also (optionally) include the year as a way to specify which result you would like, if there are multiple of the same name. Year goes after the title (-tmdb tv avatar the last airbender 2005)');
}

handleHelp.requiresArgs = false;
module.exports = handleHelp;
