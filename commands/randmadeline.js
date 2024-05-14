async function handleRandgraycie(message) {
    const maddy = [
        {url: 'https://mdm-pics.com/vids/My%20Movie.mp4'},
        {url: 'https://mdm-pics.com/vids/CHEESE.mp4'},
        {url: 'https://mdm-pics.com/vids/apertureMoment.mp4'},
        {url: 'https://mdm-pics.com/vids/clockwork.mp4'}
    ];

    const Response = Math.floor(Math.random() * maddy.length);
    console.log(Response);
    const url = maddy[Response].url;
    return message.reply("!show " + url);
}
        


handleRandgraycie.requiresArgs = false;
module.exports = handleRandgraycie;
