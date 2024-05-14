async function handleRandotter(message) {
    const redPands = 353;
    const Response = Math.floor(Math.random() * redPands + 1);
            

    const url = 'https://mdm-pics.com/otter/otter%20('+ Response + ').jpg';
    return message.reply("!show "+ url);
}


handleRandotter.requiresArgs = false;
module.exports = handleRandotter;
