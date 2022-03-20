module.exports = {
    name: 'css_syntax', //chnage this to your commmand name without the prefix example this would currently be called by entering "-example"
    description: "Command defines basic use of CSS Syntax .",
    execute(message, args, Discord){ 
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CB24F9') //Please Follow the color code per language
        .setTitle('CSS Syntax | MORE') //Change "Title | Keep "More"
        .setURL('https://www.w3schools.com/css/css_syntax.asp')//Change this to a resource link pertaining to command
        .setDescription(`A CSS rule consists of a selector and a declaration block.
        The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.
        Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.
        
        p {
             color: red;
             text-align: center;
          }
          
          `)//To display syntax examples checkout ./html_head 
        .setImage("https://cdn.discordapp.com/attachments/953086484628512818/955162314238222357/unknown.png") //Change the image respectively 
        .setFooter('SyntaxAI | CSS Syntax!') //Change after the "|"

        message.channel.send({embeds: [newEmbed]})


        
    }

}