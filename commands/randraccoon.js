async function handleRandraccoon(message) {
    const raccoons = 296;
    const Response = Math.floor(Math.random() * raccoons + 1);
    console.log('test');    

   const url = 'https://mdm-pics.com/raccoon/raccoon%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandraccoon.requiresArgs = false;
module.exports = handleRandraccoon;
