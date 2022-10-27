const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(msg) {
    if (msg.content.toLowerCase() != "cu") return;
    msg.reply('comi o seu')
  },
};
