const { Client, Collection } = require("discord.js");
const config = require('./config.json');
const fs = require(`fs`);
const client = new Client({ intents: 32767 })

module.exports = client;

const activities_list = [
  
  { type: `LISTENING`, message: `Użyj komendy: .help` },
  { type: `PLAYING`, message: `Sell bot `}
];

client.on('ready', () => {
  console.log(`${client.user.tag} jest online`);
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1) ;

      client.user.setActivity(activities_list[index].message, { type: activities_list[index].type });
  }, 10000);
});

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();


client.categories = fs.readdirSync('./commands');

['command'].forEach((handler) => {
  require(`./handler/${handler}`)(client);
});

client.login(config.token);
