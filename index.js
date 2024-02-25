const { Client } = require('ps-client');
const { loadCommands, handleCommand } = require('./commandHandler');

const Bot = new Client({ username: 'mdms bot', password: '', debug: true, avatar: 'hayley', rooms: ['[redacted]', 'pets&animals', 'tvfilms', 'thestudio', '[redacted]'] });

Bot.commands = new Map();
loadCommands(Bot);

Bot.connect();

Bot.on('message', message => {
    const ranks = ['+', '*', '%', '@', '#', '&'];
    const userRank = message.msgRank;
    const prefix = '-';
    var msg = message.content.toLowerCase();
    if (message.isIntro) return;

    if (!msg.startsWith(prefix)) {
        return;
    }

    if(!ranks.includes(userRank))
    {

        console.log(message.target);
        if(message.target.roomid === ('[redacted]'))
        {
            handleCommand(message, Bot);
        }
        else{
            return;
        }
    }
    else{
        handleCommand(message, Bot);
    }
});
