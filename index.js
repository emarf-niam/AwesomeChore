const { Client, Intents } = (Discord = require('discord.js'));
const client = new Client({ intents: Intents.ALL });
global.Embed = Discord.MessageEmbed;

client.on('message', message => {
    const { prefix, commands } = require('./config.json');
    const command = message.content.match(new RegExp(`^(?:${prefix}(${commands.join('|')}))`));
    if (command?.[1]) require(`./commands/${command[1]}.js`)(message);
});

client.login(process.env.token);
