async function handleRandrabbit(message) {
    const rabbits = 312;
    const Response = Math.floor(Math.random() * rabbits + 1);  

   const url = 'https://mdm-pics.com/rabbit/rabbit%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandrabbit.requiresArgs = false;
module.exports = handleRandrabbit;
