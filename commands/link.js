const probe = require('probe-image-size');

async function handlelink(message, args) {
    console.log(args);
    let commaTxt = args.split(',');
    commaTxt.shift();
    let indexOfComma = args.indexOf(',');
    if (indexOfComma !== -1) {
        args = args.substring(0, indexOfComma);
    }   
    console.log(args);

    let result = await probe(args);
    
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
    
    
    let r = (Math.random() + 1).toString(36).substring(7);
    
    return message.reply(`/adduhtml ${r}, <div><details> <summary style="border: 5px solid gray; border-radius: 10px; padding: 10px;"> ${commaTxt} </summary> <img src="${args}" width="${width}" height="${height}"></details></div>`);
}
handlelink.requiresArgs = true;
module.exports = handlelink;
