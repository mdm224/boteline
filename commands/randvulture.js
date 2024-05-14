async function handleRandvulture(message) {
    const vultures = 475;
    const Response = Math.floor(Math.random() * vultures + 1);
    console.log('test');    

   const url = 'https://mdm-pics.com/vultures/vulture%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandvulture.requiresArgs = false;
module.exports = handleRandvulture;
