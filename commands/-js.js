module.exports = {
    name: 'js',
    description: "What is JavaScript? .",
    execute(message, args, Discord){ 
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CB24F9')
        .setTitle('JavaScript Intro | MORE')
        .setURL('https://www.google.com')
        .setDescription('JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.')
        /*.addFields(
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
        ) */
        .setImage("https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png")
        .setFooter('SyntaxAI | JavaScript Intro')

        message.channel.send({embeds: [newEmbed]})


        
    }

}