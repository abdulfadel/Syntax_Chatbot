const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('js')
        .setDescription('JavaScript Description'),
    async execute(interaction){ 
        const newEmbed = new MessageEmbed()
        .setColor('#CB24F9')
        .setTitle('JavaScript Intro | MORE')
        .setURL('https://www.SyntaxSparkers.com')
        .setDescription(` JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`)
        .setImage("https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png")
        .setFooter('SyntaxAI | JavaScript Intro')

        interaction.reply({embeds: [newEmbed]})
    }

}

