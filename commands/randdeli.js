async function handleRanddeli(message) {
    const delis = 74;
    const Response = Math.floor(Math.random() * delis + 1);
    console.log('test');    

   const url = 'https://mdm-pics.com/deli/deli%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRanddeli.requiresArgs = false;
module.exports = handleRanddeli;
