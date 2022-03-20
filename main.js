const { Client, Intents, DiscordAPIError } = require('discord.js');

require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-';

const fs = require('fs');

const Discord = require("discord.js");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'js'){
        client.commands.get('js').execute(message, args, Discord);
    } else if (command === 'change_me'){//DO NOT CHANGE THIS IS AN EXAMPLE!
        client.commands.get('change_me').execute(message, args, Discord);//DO NOT CHANGE THIS IS AN EXAMPLE
    } else if (command === 'powerpoint'){
        client.commands.get('powerpoint').execute(message, args, Discord);
    } else if (command === 'css'){
        client.commands.get('css').execute(message, args, Discord);
    } else if (command === 'example'){
        client.commands.get('example').execute(message, args, Discord);
    } else if (command === 'html_head'){
        client.commands.get('html_head').execute(message, args, Discord);
    } else if (command === 'css_syntax'){//DO NOT CHANGE THIS IS AN EXAMPLE!
        client.commands.get('css_syntax').execute(message, args, Discord);//DO NOT CHANGE THIS IS AN EXAMPLE
    }
});


client.login(process.env.Token);