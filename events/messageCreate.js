const { Events } = require("discord.js");
const users = require('../data/user.json')

module.exports = {
  name: Events.MessageCreate,
  async execute(msg) {
    if (msg.content.toLowerCase() != "cu") return;
    msg.reply('comi o seu')
    if(msg.author.id == 770619805576593429)
    console.log(users)
  },
};
