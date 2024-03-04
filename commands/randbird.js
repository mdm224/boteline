async function handleRandbird(message) {
    const birds = 761;
    const Response = Math.floor(Math.random() * birds + 1);
            

    const url = 'https://mdm-pics.com/birds/birds%20('+ Response + ').jpg';
    return message.reply("!show "+ url);
}


handleRandbird.requiresArgs = false;
module.exports = handleRandbird;
