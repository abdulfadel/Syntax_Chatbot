module.exports = {
    name: 'html_head',
    description: "Provides <head> html syntax with example.",
    execute(message, args, Discord){ 
        const newEmbed = new Discord.MessageEmbed()
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
        /*.addFields(
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
        ) */
        .setImage("https://www.computerhope.com/jargon/h/head.png")
        .setFooter('SyntaxAI | HTML <head>')

        message.channel.send({embeds: [newEmbed]})


        
    }

}