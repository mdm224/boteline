async function handleRandredpanda(message) {
    const redPands = 275;
    const Response = Math.floor(Math.random() * redPands + 1);
            

    const url = 'https://mdm-pics.com/redPanda/redPanda%20('+ Response + ').jpg';
    return message.reply("!show "+ url);
}


handleRandredpanda.requiresArgs = false;
module.exports = handleRandredpanda;
