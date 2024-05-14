async function handleRandrabbit(message) {
    const penquins = 261;
    const Response = Math.floor(Math.random() * penquins + 1);  

   const url = 'https://mdm-pics.com/penguin/penquin%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandrabbit.requiresArgs = false;
module.exports = handleRandrabbit;
