const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('website')
        .setDescription('Syntax Sparkers Website'),
    async execute(interaction) {
        await interaction.reply('https://syntaxsparkers.com')
    },
};
