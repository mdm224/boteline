async function handleRandpanda(message) {
    const pandas = 500;
    const Response = Math.floor(Math.random() * pandas + 1);
    console.log('test');    

   const url = 'https://mdm-pics.com/panda/panda%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandpanda.requiresArgs = false;
module.exports = handleRandpanda;
