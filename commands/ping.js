function handlePing(message) {
    return message.reply("pong!");
}
handlePing.requiresArgs = false;
module.exports = handlePing;