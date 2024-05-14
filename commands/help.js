async function handleHelp(message, arg) {
    return message.reply('!code Current commands are: '+ 
    '\nrand(enterAnimal): posts a random picture of the requested animal. Current options include: Graycie, Skip, Capy, Ferret, Axolotl, Wolf, Leopard, Raccoon, Turtle, Birb, Red panda, Maine Coon, Rabbit, Fox, Fish, Dog, Vulture, Cat, Octopus, tt (Down the Tubes 2 cats), Deli, and Panda\n'+
    '\nYou can also just use randanimal itself as a command, and it will randomly select one of the options listed above and post an image of the selected animal/pet\n' + 
    '\ntmdb: Provides the overview, release date, genre, rating, and number of rates for TV shows and movies. TV shows also return the amount of seasons, and movies return the runtime.'+
    '\nexample usage: -tmdb tv better call saul or -tmdb movie star wars: revenge of the sith. You can also (optionally) include the year as a way to specify which result you would like, if there are multiple of the same name. Year goes after the title (-tmdb tv avatar the last airbender 2005)' +
    '\n\nwatch: Provides a list of where you can LEGALLY watch a show / movie, according go JustWatch.coms database.' + 
    '\nFormat is like this: -watch tv/movie [title] [year], [region acronym]. Do not actually include the brackets when using the command\n' +
    '\nrandwin: nothing else needed here, just randomly selects a previous -otd winner (goes back to early 2022) and then runs the tmdb command on it');

}

handleHelp.requiresArgs = false;
module.exports = handleHelp;