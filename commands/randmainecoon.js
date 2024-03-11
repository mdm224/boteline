async function handleRandmainecoon(message) {
    const redPands = 170;
    const Response = Math.floor(Math.random() * redPands + 1);
            

    const url = 'https://mdm-pics.com/maine%20coon/maine%20coon_'+ Response + '.jpg';
    return message.reply("!show "+ url);
}


handleRandmainecoon.requiresArgs = false;
module.exports = handleRandmainecoon;
