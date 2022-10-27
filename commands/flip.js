const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const users = require("../data/user.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("flip")
    .setDescription("flip a coin and win money with this")
    .addNumberOption((option) =>
      option
        .setMinValue(0)
        .setName("amount")
        .setDescription("the amount of money you want to bet")
    ),
  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("0")
        .setEmoji("🙂")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("1")
        .setEmoji("👑")
        .setStyle(ButtonStyle.Secondary)
    );

    const amount = Math.floor(interaction.options.getNumber("amount")) ?? "0";

    if (amount > users[interaction.user.id].gold)
      return interaction.reply({
        content: `Que pena, você não possui $${amount} :confused: tente com um valor menor\nDinheiro disponível em sua conta: $${
          users[interaction.user.id].gold
        } :coin:`,
        ephemeral: true,
      });
    const filter = (i) =>
      (i.customId === "0" || i.customId === "1") &&
      i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      time: 10000,
    });

    collector.on("collect", async (i) => {
      const side = Math.round(Math.random());
      var icon = "";
      await i.update({ content: "Girando..." });
      setTimeout(() => {
        if (side == 0) {
          icon = "cara :slight_smile:";
        } else {
          icon = "coroa :crown:";
        }
        if (side == i.customId) {
          users[i.user.id].gold += amount;
          i.editReply(`Parabéns! Era ${icon} você ganhou ${amount}`);
        } else {
          users[i.user.id].gold -= amount;
          i.editReply(`Que pena, era ${icon}, você perdeu ${amount}`);
        }
      }, 1000);
    });

    await interaction.reply({
      content: `Você apostou ${amount} :coin:`,
      components: [row],
    });
  },
};
