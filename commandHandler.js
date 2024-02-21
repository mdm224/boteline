const fs = require('fs');
const path = require('path');

// Function to load all command files
function loadCommands(client) {
    const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const commandFile = require(`./commands/${file}`);
        const commandName = file.split('.')[0];
        client.commands.set(commandName, commandFile);
    }
}

// Command handler function
async function handleCommand(message, client) {
    let command = '';
    let arg = '';
    var msg = message.content.toLowerCase();
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

    if (!client.commands.has(command)) return;

    const commandFile = client.commands.get(command);

    try {
        if (commandFile.requiresArgs && arg.length === 0) {
            // Command requires arguments but none were provided
            message.reply('This command requires arguments. Please provide the necessary arguments.');
        } 
        if (!commandFile.requiresArgs) {
            await commandFile(message);
        }
        else {
            await commandFile(message, arg);
        }
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing that command.');
    }
}

module.exports = { loadCommands, handleCommand };
