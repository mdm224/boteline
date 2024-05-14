const randwin = require("./randwin.js");
async function handleRandsotd(message) {
    randwin.randSotd(message);
}

handleRandsotd.requiresArgs = false;
module.exports = handleRandsotd;