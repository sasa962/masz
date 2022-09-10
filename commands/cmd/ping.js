const { MessageEmbed } = require(`discord.js`)
module.exports = {
   name: `ping`,
   run: async(client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle(`**Pong!**`)
    .setColor(`#0fa6a8`)
    .setDescription(`Ping bota: \n\`${client.ws.ping}\``)
    message.channel.send({ embeds: [embed] })
   }
};