const { MessageEmbed } = require(`discord.js`)
module.exports = {
   name: `link`,
   run: async(client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle(`Linki do bota`)
    .setDescription(`\n🔗・Link do dodania bota: [Kliknij](https://discord.com/api/oauth2/authorize?client_id=976812151501094912&permissions=8&scope=bot)\n\n👥・Serwer support: [Kliknij](https://discord.gg/s7c4v5pvMW)\n\n🌐・Strona WWW: [Wkrótce](https://powerbot.fun)`)
    .setColor(`#0fa6a8`)
    message.channel.send({ embeds: [embed] })
   }
};