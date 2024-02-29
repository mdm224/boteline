async function handleRandskip(message) {
        const skips = 61;

        const Response = Math.floor(Math.random() * skips + 1);
            

       const url = 'https://mdm-pics.com/Skipper/Skipper%20('+ Response + ').jpg';
       return message.reply("!show "+ url);
}


handleRandskip.requiresArgs = false;
module.exports = handleRandskip;
