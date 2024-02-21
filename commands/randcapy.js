async function handleRandcapy(message) {
    const capys = 730;
        const Response = Math.floor(Math.random() * capys + 1);
            

       const url = 'https://mdm-pics.com/capys/capy'+ Response + '.jpg';
       return message.reply("!show "+ url);
}


handleRandcapy.requiresArgs = false;
module.exports = handleRandcapy;
