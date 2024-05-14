async function handleRandfox(message) {
    const foxes = 746;
    const Response = Math.floor(Math.random() * foxes + 1);
            

    const url = 'https://mdm-pics.com/foxes/fox%20('+ Response + ').jpg';
    return message.reply("!show "+ url);
}


handleRandfox.requiresArgs = false;
module.exports = handleRandfox;
