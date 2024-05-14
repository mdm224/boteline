async function handlePoints(message, arg) {
    if (!handlePoints.users) {
        handlePoints.users = [];
    }
    
    if (arg === "print") {
        const replyMessage = handlePoints.users.map(user => `${user.name}: ${user.points}`).join('<br>');
        console.log(handlePoints.users);
        if (!handlePoints.users.length)
        {
            message.reply("/adduhtml Leaderboard, <Strong>Current leaderboard:</Strong> <br> Nobody!");
        }
        else{
        message.reply("/adduhtml Leaderboard, <Strong>Current leaderboard:</Strong> <br>" + replyMessage);
        }
        return;
    }

    if (arg === 'clear') {
        handlePoints.users = [];
        message.reply("Points cleared!");
        return;
    }
    arg = " " + arg;
    arg.split(",").forEach(arg => {
    if (arg.includes(':')) {
        const [user, pointsStr] = arg.split(':');
        const points = parseInt(pointsStr);

        const userIndex = handlePoints.users.findIndex(u => u.name === user);
        if (userIndex !== -1) {
            handlePoints.users[userIndex].points += points;
        } else {
            handlePoints.users.push({ name: user, points });
        }

        message.reply('Points updated!');
        return;
    }
    else{
        const userIndex = handlePoints.users.findIndex(user => user.name === arg);
        if (userIndex !== -1) {
            handlePoints.users[userIndex].points += 1;
        } else {
            handlePoints.users.push({ name: arg, points: 1 });
        }
}
});

    message.reply('Points updated!');
}


handlePoints.requiresArgs = true;
module.exports = handlePoints;
