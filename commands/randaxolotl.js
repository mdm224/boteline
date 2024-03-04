async function handleRandaxolotl(message) {
    const axols = 58;
        const Response = Math.floor(Math.random() * axols + 1);
            

       const url = 'https://mdm-pics.com/Axolotl/axolotl%20('+ Response + ').jpg';
       return message.reply("!show "+ url);
}


handleRandaxolotl.requiresArgs = false;
module.exports = handleRandaxolotl;
