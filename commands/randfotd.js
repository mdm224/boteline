const randwin = require("./randwin.js");
async function handleRandfotd(message) {
    randwin.randFotd(message);
}

handleRandfotd.requiresArgs = false;
module.exports = handleRandfotd;