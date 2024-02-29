async function handleRandfish(message) {
    const fish = 620;
    const Response = Math.floor(Math.random() * fish + 1);

   const url = 'https://mdm-pics.com/fish/fish%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandfish.requiresArgs = false;
module.exports = handleRandfish;
