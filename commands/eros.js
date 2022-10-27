const { SlashCommandBuilder } = require("discord.js");

module.exports ={
    data: new SlashCommandBuilder()
    .setName('eros')
    .setDescription('O eros é gay!'),
    async execute(interaction){
        await interaction.reply(`<@690725962832150619> gay`)
    }
}