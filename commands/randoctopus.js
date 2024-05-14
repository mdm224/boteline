async function handleRandoctopus(message) {
    const octopus = 100;
        const Response = Math.floor(Math.random() * octopus + 1);
            

       const url = 'https://mdm-pics.com/Octopus/octopus%20('+ Response + ').jpg';
       return message.reply("!show "+ url);
}


handleRandoctopus.requiresArgs = false;
module.exports = handleRandoctopus;
