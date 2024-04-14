const { url } = require('inspector');
const probe = require('probe-image-size');
async function handleRandpet(message) {

    const pets = [
        {url: 'https://mdm-pics.com/pet/Rage%20%231.jpg', animal: 'cat', isCommonPhobia: false, user: 'Rage', petName: 'Patches'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZdEpNAx98-e6XmpzZdnensXsArsK2nlLi8unjoLEFZaWs9KMuCsATf5Uf545r5WtzlbhpLIPP8ArJTP0euZcUb0ilEEHF5KJU=w1868-h932-v0', animal: 'cat', isCommonPhobia: false, user: 'GotaLoveYaoi', petName: 'Yoshi'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbIV6cmgUDmzj2ZwVhxP1P0g_4PdvVWIJ3syjeTyVodBKI5hx4Td1htJXBAv0kmuHtcrnmJY3-2NOv08nyV3b_q2A09H-refXk=w1868-h932-v0', animal: 'cat', isCommonPhobia: false, user: 'GotaLoveYaoi', petName: 'Yoshi'},
        {url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYgCiIFrnCrQFZjLN3DWYLQtNZ9SQ5S4YsUH2UDbT6RMPUVlvQqImjjfTl34Q7o__luydHDWyw4eNoQ6KKUdnvVvYahntlZiw=w1868-h932-v0', animal: 'cat', isCommonPhobia: false, user: 'GotaLoveYaoi', petName: 'Yoshi'}
    ]

    const randomIndex = Math.floor(Math.random() * pets.length);
    console.log(randomIndex);
    const url = pets[randomIndex].url;
    const animal = pets[randomIndex].animal;
    const user = pets[randomIndex].user;
    const petName = pets[randomIndex].petName;
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

    if (pets[randomIndex].isCommonPhobia === true)
    {
        return message.reply(`/adduhtml ${randomIndex}, <div ><details> <summary style="border: 5px solid gray; border-radius: 10px; padding: 10px;"> Click to view a user's pet! Trigger Warning: the following image contains a ${animal}! </summary> <img src="${url}" width="${width}" height="${height}"> <Strong> <br> <span style="color: #8097ba">${petName}</span></Strong>, submitted by <username>${user}</username>! </details> </div>`);
    }

    else{
        
        return message.reply(`/adduhtml ${randomIndex}, <img src="${url}" width="${width}" height="${height}"> <Strong> <br> ${petName}</Strong>, submitted by <username>${user}</username>!`);
    }
}


handleRandpet.requiresArgs = false;
module.exports = handleRandpet;
