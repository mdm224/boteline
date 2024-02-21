async function handleMetal(message, arg) {
    var  bandName = arg.toString().replace(/ /g, "_");
        const url = ('https://www.metal-archives.com/bands/'+bandName);


        var words = arg.split(" ");

       for (let i = 0; i < words.length; i++) 
          {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
          }

          words.join(' ');
          words = words.toString().replace(/,/g, " ");


          if (words.charAt(words.length - 1) === 's'){
          return message.reply(words+"' Metal-Archives Page: " + url);
          }

          else{
            return message.reply(words+"'s Metal-Archives Page: " + url);
          }
}

handleMetal.requiresArgs = true;
module.exports = handleMetal;