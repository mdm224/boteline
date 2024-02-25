async function handleRandowl(message) {
    const owls = 292;
    const Response = Math.floor(Math.random() * owls + 1);
    console.log('test');    

   const url = 'https://mdm-pics.com/Owl/owl%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandowl.requiresArgs = false;
module.exports = handleRandowl;
