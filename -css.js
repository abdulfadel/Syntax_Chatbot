module.exports = {
    name: 'css',
    description: "What is CSS? .",
    execute(message, args, Discord){ 
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CB24F9')
        .setTitle('CSS Intro | MORE')
        .setURL('https://developer.mozilla.org/en-US/docs/Web/CSS')
        .setDescription('Cascading Style Sheets (CSS) \n is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.')
        /*.addFields(
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
        ) */
        .setImage("https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png")
        .setFooter('SyntaxAI | CSS Intro')

        message.channel.send({embeds: [newEmbed]})


        
    }

}