// module.exports = {
//     name: 'html_head',
//     description: "Provides <head> html syntax with example.",
//     execute(message, args, Discord){ 
//         const newEmbed = new Discord.MessageEmbed()
//         .setColor('#1FA48C')
//         .setTitle('HTML <head> | MORE')
//         .setURL('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head')
//         .setDescription(`The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets

//         <!doctype html>
//         <html>
//          <head>
//           <title>Document title</title>
//          </head>
//         </html>`)
//         /*.addFields(
//             {name: '', value: ''},
//             {name: '', value: ''},
//             {name: '', value: ''},
//             {name: '', value: ''},
//         ) */
//         .setImage("https://www.computerhope.com/jargon/h/head.png")
//         .setFooter('SyntaxAI | HTML <head>')

//         message.channel.send({embeds: [newEmbed]})


        
//     }

// }

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('html_head')
        .setDescription('html_head example'),
    async execute(interaction){ 
        const newEmbed = new MessageEmbed()
        .setColor('#1FA48C')
        .setTitle('HTML <head> | MORE')
        .setURL('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head')
        .setDescription(`The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets

        <!doctype html>
        <html>
         <head>
          <title>Document title</title>
         </head>
        </html>`)
        .setImage("https://www.computerhope.com/jargon/h/head.png")
        .setFooter('SyntaxAI | HTML <head>')

        interaction.reply({embeds: [newEmbed]})
    }

}