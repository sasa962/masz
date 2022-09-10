const { MessageEmbed } = require(`discord.js`)
module.exports = {
   name: `iq`,
   run: async(client, message, args) => {
    const min = Math.ceil("-200");
    const max = Math.floor("200");
    const iq = Math.floor(Math.random() * (max - min)) + min
    const embed = new MessageEmbed()
    .setTitle(`🧠 IQ`)
    .setDescription(`Twoje iq wynosi **${+iq}**`)
    .setColor(`#a81e0f`)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send({ embeds: [embed] })
   }
};