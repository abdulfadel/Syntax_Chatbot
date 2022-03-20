module.exports = {
    name: 'example', //chnage this to your commmand name without the prefix example this would currently be called by entering "-example"
    description: "This description is only viewable in our backend! .",
    execute(message, args, Discord){ 
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CB24F9') //Please Follow the color code per language
        .setTitle('Change Title | MORE') //Change "Title | Keep "More"
        .setURL('https://google.com')//Change this to a resource link pertaining to command
        .setDescription(`This is the command ouput aks front end! Change this to the largest body of text available! 
        Be sure to check out the how-to channel on discord for more formats`)//To display syntax examples checkout ./html_head 
        .setImage("https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png") //Change the image respectively 
        .setFooter('SyntaxAI | Lets match the header!') //Change after the "|"

        message.channel.send({embeds: [newEmbed]})


        
    }

}