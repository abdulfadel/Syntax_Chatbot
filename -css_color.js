module.exports = {
    name: 'css_color',
    description: "Gives user output about color syntax in CSS.",
    execute(message, args, Discord){ 
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#03a613')
        .setTitle('CSS Color | MORE')
        .setURL('https://developer.mozilla.org/en-US/docs/Web/CSS/color')
        .setDescription(`The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.
        
 /* Keyword values */
color: currentcolor;

/* <named-color> values */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* <hex-color> values */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()> values */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34.0 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* <hsl()> values */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.0 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* <hwb()> values */
color: hwb(90 10% 10%);
color: hwb(90 10% 10% / 0.5);
color: hwb(90deg 10% 10%);
color: hwb(1.5708rad 60% 0%);
color: hwb(.25turn 0% 40% / 50%);

/* Global values */
color: inherit;
color: initial;
color: revert;
color: unset;
`)
        /*.addFields(
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
        ) */
        .setImage("https://www.w3schools.com/colors/img_colormap.gif")
        .setFooter('SyntaxAI | CSS Color')

        message.channel.send({embeds: [newEmbed]})


        
    }

}