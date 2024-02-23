async function handleRandferret(message) {
    const ferrets = 774;
    const Response = Math.floor(Math.random() * ferrets + 1);
    console.log('test');    

   const url = 'https://mdm-pics.com/Ferret/ferret%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandferret.requiresArgs = false;
module.exports = handleRandferret;
