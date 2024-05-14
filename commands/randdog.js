async function handleRanddog(message) {
    const dogs = 1006;
    const Response = Math.floor(Math.random() * dogs + 1);
            

    const url = 'https://mdm-pics.com/dogs/dogs%20('+ Response + ').jpg';
    return message.reply("!show "+ url);
}


handleRanddog.requiresArgs = false;
module.exports = handleRanddog;
