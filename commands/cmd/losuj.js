const { MessageEmbed } = require(`discord.js`)
module.exports = {
   name: `losuj`,
   run: async(client, message, args) => {
    const min = Math.ceil("0");
    const max = Math.floor("200");
    const losuj = Math.floor(Math.random() * (max - min)) + min;
    const embed = new MessageEmbed()
    .setTitle(`💫 Losowanie`)
    .setDescription(`Twoja liczba z losowania wynosi **${+losuj}**`)
    .setColor(`#fc1c03`)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send({ embeds: [embed] })
   }
};