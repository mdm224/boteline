async function handleRandbirb(message) {
    const birds = 762;
    const Response = Math.floor(Math.random() * birds + 1);
            

    const url = 'https://mdm-pics.com/birds/birds%20('+ Response + ').jpg';
    return message.reply("!show "+ url);
}


handleRandbirb.requiresArgs = false;
module.exports = handleRandbirb;
