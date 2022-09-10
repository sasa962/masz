const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'yt',
    run: async(client, message, args) => {
      
      
      const msg = args.join("");
      const embed1 = new MessageEmbed()
        .setDescription("Podaj treść wiadomości w komentarzu!")
        .setColor("RED");
      if(!msg) return message.reply({ embeds: [embed1] })
      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setImage(`https://some-random-api.ml/canvas/youtube-comment?avatar=${message.author.displayAvatarURL({format: 'png', size:1024})}&username=${message.member.displayName}&comment=${msg}`)
        .setTimestamp()
        .setColor(`DARK_GREEN`)
      message.channel.send({ embeds: [embed] });
      
     
          
    },
};