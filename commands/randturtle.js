async function handleRandturtle(message) {
    const turtles = 618;
    const Response = Math.floor(Math.random() * turtles + 1);
    console.log('test');    

   const url = 'https://mdm-pics.com/turtle/turtle%20('+ Response + ').jpg';
   return message.reply("!show "+ url);
}


handleRandturtle.requiresArgs = false;
module.exports = handleRandturtle;
