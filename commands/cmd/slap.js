const { MessageEmbed } = require("discord.js");
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'slap',
    description: `Możesz kogoś uderzyć`,

    run: async (client, message, args) => {

        const member = message.mentions.members.first()

        const embed1 = new MessageEmbed()
            .setTitle(`Błąd`)
            .setDescription(`Oznacz proszę użytkownika`)
            .setColor(`DARK_RED`)

        if (!member) return message.reply({ embeds: [embed1] })

        const GIF = await neko.sfw.slap();
        
        const embed = new MessageEmbed()
            .setColor("DARK_BLUE")
            .setTitle(`${message.author.tag} uderzył/a ${member.user.tag}`)
            .setImage(GIF.url)
            .setFooter({ text: `${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
            .setTimestamp()

        message.reply({ embeds: [embed] });

    }
}