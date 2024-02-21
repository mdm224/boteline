async function handleRandgraycie(message) {
        const graycies = 58;
        const Response = Math.floor(Math.random() * graycies + 1);
        console.log('test');    

       const url = 'https://mdm-pics.com/Graycie/Graycie'+ Response + '.jpg';
       return message.reply("!show "+ url);
}


handleRandgraycie.requiresArgs = false;
module.exports = handleRandgraycie;
