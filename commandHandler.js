const fs = require('fs');
const path = require('path');

function loadCommands(client) {
    const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const commandFile = require(`./commands/${file}`);
        const commandName = file.split('.')[0];
        client.commands.set(commandName, commandFile);
    }
}

async function handleCommand(message, client) {
    let command = '';
    let arg = '';
    const msg = message.content.toLowerCase();
    const parts = msg.split(' ');

    for (let i = 0; i < parts.length; i++) {
        if (parts[i].startsWith('-')) {
            command = parts[i].substring(1);
        } else {
            arg = parts.slice(i).join(' ');
            break;
        }
    }

    console.log(command);
    console.log(arg);

    if (command === 'randanimal') {
        const animals = ['capy', 'axolotl', 'owl', 'ferret', 'leopard', 'raccoon', 'panda', 'turtle', 'fish', 'tt', 'skip', 'graycie', 'deli'];
        const randomIndex = Math.floor(Math.random() * animals.length);
        const randomAnimal = animals[randomIndex];
        const command = `rand${randomAnimal}`;
        const commandFile = client.commands.get(command);
        await commandFile(message);
    }

    if (!client.commands.has(command)) return;

    const commandFile = client.commands.get(command);

    try {
        if (commandFile.requiresArgs && arg.length === 0) {
            message.reply('This command requires arguments. Please provide the necessary arguments.');
        } else {
            if (!commandFile.requiresArgs) {
                await commandFile(message);
            } else {
                await commandFile(message, arg);
            }
        }
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing that command.');
    }
}

module.exports = { loadCommands, handleCommand };
