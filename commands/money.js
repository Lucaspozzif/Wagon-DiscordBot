const { SlashCommandBuilder } = require("discord.js");

const users = require("../data/user.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("money")
    .setDescription("Show your amount of gold"),
  async execute(interaction) {
    const gold = users[interaction.user.id].gold;
    await interaction.reply(`Você tem $${gold} :coin:`);
  },
};
