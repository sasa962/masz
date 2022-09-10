const { MessageEmbed } = require("discord.js");
const { Kawaii } = require("kawaii-api");
const api = new Kawaii("anonymous");

module.exports = {
    name: 'kill',
    description: `Możesz kogoś zabić`,

    run: async (client, message, args) => {

        const GIF = await api.get("gif", "kill");

        const member = message.mentions.members.first()

        const embed1 = new MessageEmbed()
            .setTitle(`Błąd`)
            .setDescription(`Oznacz proszę użytkownika`)
            .setColor(`DARK_RED`)

        if (!member) return message.reply({ embeds: [embed1] })
        
        const embed = new MessageEmbed()
            .setColor("DARK_BLUE")
            .setTitle(`${message.author.tag} zabił/a ${member.user.tag}`)
            .setImage(GIF)
            .setFooter({ text: `${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
            .setTimestamp()

        message.reply({ embeds: [embed] });

    }
}