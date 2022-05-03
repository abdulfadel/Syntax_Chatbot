const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('css')
        .setDescription('CSS Description'),
    async execute(interaction){ 
        const newEmbed = new MessageEmbed()
        .setColor('#CB24F9')
        .setTitle('CSS Intro | MORE')
        .setURL('https://www.SyntaxSparkers.com')
        .setDescription(`Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`)
        .setImage("https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png")
        .setFooter('SyntaxAI | CSS Intro')

        interaction.reply({embeds: [newEmbed]})
    }

}

