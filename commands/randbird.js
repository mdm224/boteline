const randbirb = require("./randbirb.js");

async function handleRandbird(message) {
    randbirb(message);
}
handleRandbird.requiresArgs = false;
module.exports = handleRandbird;