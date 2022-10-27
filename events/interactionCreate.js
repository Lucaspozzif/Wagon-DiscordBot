const { Events } = require("discord.js");
const users = require("../data/user.json");

const user = {
  //attributes
  for: 0,
  def: 0,
  dex: 0,
  int: 0,
  debuff: {
    for: 0,
    def: 0,
    dex: 0,
    int: 0,
  },
  weapon: {},
  shield: {},
  ring: [],
  armor: {},

  hp: [50, 50],
  mana: [10, 10],
  stamina: [100, 100],
  crystal: [120, 120],

  xp: {
    adventure: 0,
    upgrade: 0,
    investiment: 0,
  },
  lvl: {
    adventure: 0,
    upgrade: 0,
    investiment: 0,
  },
  gold: 50,
  inventory: [],
  party: [],
};

module.exports = {
  name: Events.InteractionCreate,
  async execute(int) {
    if (!users[int.user.id]) users[int.user.id] = user;
    if (!int.isChatInputCommand()) return;

    const command = int.client.commands.get(int.commandName);

    console.log(command)
    if (!command) {
      await int.reply("Não encontrei esse comando.");
      return;
    }
    try {
      await command.execute(int);
    } catch (err) {
      console.log(`An error happened at the ${int.commandName}\n\n${err}`);
    }
  },
};
