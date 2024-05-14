async function handleRandgraycie(message) {
        const graycies = 193;
        const Response = Math.floor(Math.random() * graycies + 1);
        console.log(Response);    


                const urlObj = {
                        192: 'https://mdm-pics.com/vids/IMG_2343.mov',
                        193: 'https://mdm-pics.com/vids/IMG_2345.mov'
                    };
                    
                const url = urlObj[Response];
                    
                if (url) {
                        return message.reply("!show " + url);
                } 
                    
                else {
                        const url = 'https://mdm-pics.com/Graycie/Graycie%20(' + Response + ').jpg';
                        return message.reply("!show " + url);
                }
}
            


handleRandgraycie.requiresArgs = false;
module.exports = handleRandgraycie;
