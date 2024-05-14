const { url } = require('inspector');
const probe = require('probe-image-size');

async function handleEmoji(message, arg) {
    const emojis = [
        {emojName: 'lemon_dom', url: 'https://mdm-pics.com/emojis/lemondom.png' },
        {emojName: 'lemon_sad', url: 'https://mdm-pics.com/emojis/lemon_cry.png'},
        {emojName: 'lemon_relieved', url: 'https://mdm-pics.com/emojis/lemon_relieved.png'},
        {emojName: 'lemon_weary', url: 'https://mdm-pics.com/emojis/lemonpensive.png'}
    ]

    if (arg === 'list')
    {
        const names = [];
        for (i = 0; i < emojis.length; i++)
        {
            names.push(emojis[i].emojName);
        }

        const formattedNames = names.map((name, index) => `${name}`).join(', ');
        message.reply("Current emojis are: " + formattedNames);
    }

    for (i = 0; i < emojis.length; i++)
    {
        if (arg === emojis[i].emojName)
        {
            const url = emojis[i].url;
            let result = await probe(url);

            width = result.width;
            height = result.height;
            maxHeight = 300;
            maxWidth = 300;
    
        if (width <= maxWidth && height <= maxHeight){
            width = width;
            height = height; 
        }

    
        else {
            const ratio = Math.min(maxHeight / height, maxWidth / width);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
        }

        return message.reply(`/adduhtml ${emojis[i].emojName}, <img src="${url}" width="${width}" height="${height}">`);
        }
    }
}

handleEmoji.requiresArgs = true;
module.exports = handleEmoji;