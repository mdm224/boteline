async function handleRandwolf(message) {
    const wolves = 974;
    const Response = Math.floor(Math.random() * wolves + 1);
       

   const url = 'https://mdm-pics.com/wolf/wolf%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandwolf.requiresArgs = false;
module.exports = handleRandwolf;
