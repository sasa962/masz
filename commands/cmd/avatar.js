const { MessageEmbed } = require('discord.js'); // TAK!

module.exports = {
    name: 'avatar',
    description: 'Pokazuje obecny avatar użytkownika',
    run: async(client, message, args) => {
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;

        // const embed = new Discord.MessageEmbed() 
        const embed = new MessageEmbed()
        .setColor('#eb0707')
        .setTitle('Avatar')
        .setDescription(`Avatar użytkownika ${user}`)
        .setImage(user.avatarURL({ dynamic: true, size: 512 }))
        .setTimestamp()
        .setFooter({ text: message.author.tag, iconURL: message.author.avatarURL({dynamic : true}) });
        // .setFooter({ text: message.author.tag, iconURL: message.author.avatarURL({dynamic : true}) }); // <-- dla najnowszej wersji Discord.js

        message.channel.send({ embeds: [embed] });
    }
}