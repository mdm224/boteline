async function handleRandtt(message) {
    const dttCats = 132;
        const Response = Math.floor(Math.random() * dttCats + 1);
            

       const url = 'https://mdm-pics.com/dttCats/dttCat%20('+ Response + ').jpg';
       return message.reply("!show "+ url);
}


handleRandtt.requiresArgs = false;
module.exports = handleRandtt;
