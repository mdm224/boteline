async function handleRandleopard(message) {
    const leopards = 171;
    const Response = Math.floor(Math.random() * leopards + 1);
    console.log('test');    

   const url = 'https://mdm-pics.com/Leopard/leopard%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandleopard.requiresArgs = false;
module.exports = handleRandleopard;
