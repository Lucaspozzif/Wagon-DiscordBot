const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        const date = new Date
        const d = {
          day: date.getDate(),
          month: date.getMonth()+1,
          year: date.getFullYear(),
          hour: date.getUTCHours(),
          minute: date.getUTCMinutes()
        }
        
        console.log(`Starting at ${d.day}/${d.month}/${d.year} ${d.hour}:${d.minute} UTC, logged as ${client.user.tag}`);
	},
};