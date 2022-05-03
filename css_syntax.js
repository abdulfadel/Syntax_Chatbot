const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('css_syntax')
        .setDescription('Command defines basic use of CSS Syntax.'),
    async execute(interaction){ 
        const newEmbed = new MessageEmbed()
        .setColor('#CB24F9')
        .setTitle('Command defines basic use of CSS Syntax.')
        .setURL('https://www.SyntaxSparkers.com')
        .setDescription(`A CSS rule consists of a selector and a declaration block.
        The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.
        Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.
        
        p {
             color: red;
             text-align: center;
          }
          
          `)
        .setImage("https://cdn.discordapp.com/attachments/953086484628512818/955162314238222357/unknown.png")
        .setFooter('SyntaxAI | CSS Syntax!')

        interaction.reply({embeds: [newEmbed]})
    }

}

