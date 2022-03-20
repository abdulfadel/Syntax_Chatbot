module.exports = {
    name: 'powerpoint',
    description: "Power Point Presentation Example .",
    execute(message, args, Discord){ 
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CB24F9')
        .setTitle('Live Event Demo')
        .setURL('https://www.google.com')
        .setDescription('Here is the description output I spoke of during the presentation :nerd: ')
        /*.addFields(
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
        ) */
        .setImage("https://cdn.discordapp.com/attachments/749519439774482464/953871049630564372/Untitled_design.png")
        .setFooter('SyntaxAI | PowerPoint')

        message.channel.send({embeds: [newEmbed]})


        
    }

}