const { Events, Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./secret/token.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],

});
client.once(Events.ClientReady, (client) => {
  console.log(`Starting content, logged as ${client.user.tag}`);
});

let signatures = 0;
let signators = [];
client.on(Events.MessageCreate, (msg) => {
  if ( msg.content.toLowerCase() == "eros" && !signators.includes(msg.author.username)) {
    signatures++;
    signators.push(msg.author.username)
    msg.reply(
      `${msg.author.username} concordou em assinar a petição que afirma que Eros é gay\nJá são ${signatures} assinaturas`
    );
  } else if (msg.content.toLowerCase() == "eros" && signators.includes(msg.author.username)) {
    msg.reply(
      `${msg.author.username} reenfatizou que eros é gay, mesmo já tendo dito isso antes.\nKkkkk mto gay`
    );
  }
});

client.login(token);