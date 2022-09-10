const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord.js");
const Discord = require(`discord.js`);

module.exports = {
  name: "help",
  run: async(client, message, args) => {
    const embed = new MessageEmbed()
     .setDescription("**Moje wszystkie komendy:**\n\n**Administracyjne**:\nban, kick, clear, embed (reszta wkrótce)\n\n**4Fun**:\niq, losuj, avatar, yt, dog, cat, fox  (reszta wkrótce)\n\n**Przydatne:**\nbotinfo, serverinfo, ping, link (reszta wkrótce) ")
     .setColor("#eb0707")
     .setTimestamp()
     .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
      

      const buttons = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
           .setLabel(`Dodaj bota`)
           .setStyle(`LINK`)
           .setURL(`https://discord.com/api/oauth2/authorize?client_id=976812151501094912&permissions=8&scope=bot`)
           .setEmoji(`<:bain:971833414141485126>`),

           new Discord.MessageButton()
           .setLabel(`Support server`)
           .setStyle(`LINK`)
           .setURL(`https://discord.gg/s7c4v5pvMW`)
           .setEmoji(`<:dev:971833733067968522>`)
           )
           message.channel.send({ embeds: [embed], components: [buttons] });

  }
};