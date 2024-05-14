async function handleRandturtle(message) {
    const cats = 799;
    const Response = Math.floor(Math.random() * cats + 1);
    console.log('test');    

   const url = 'https://mdm-pics.com/cats/cat%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandturtle.requiresArgs = false;
module.exports = handleRandturtle;
