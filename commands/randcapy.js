async function handleRandcapy(message) {
    const capys = 1212;
        const Response = Math.floor(Math.random() * capys + 1);
            

       const url = 'https://mdm-pics.com/capys/capy%20('+ Response + ').jpg';
       return message.reply("!show "+ url);
}


handleRandcapy.requiresArgs = false;
module.exports = handleRandcapy;
