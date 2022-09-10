const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: 'clyde',
    category: '4Fun',
    aliases: ``,
    description: `Możesz napisać fake wiadomość od Clyde`,

    run: async (client, message, args) => {

        const msg = args.join(" ");

        const embed1 = new MessageEmbed()
            .setDescription("Podaj treść wiadomości w komentarzu")
            .setColor("RED");

        const embed2 = new MessageEmbed()
            .setDescription("Wiadomość musi mieć mniej niż 70 znaków")
            .setColor("RED");

        const embed3 = new MessageEmbed()
            .setDescription("Proszę poczekać, wina API")
            .setColor("RED");

        if (!msg) return message.reply({ embeds: [embed1] })
        if (!msg.length > 70) return message.reply({ embeds: [embed2] })

        try {
            const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${msg}`));
            const json = await res.json();
            // const attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            // message.channel.send(attachment);

            const embed = new MessageEmbed()
                .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
                .setImage(json.message)
                .setTimestamp()
                .setColor(`RANDOM`)

            return message.reply({ embeds: [embed] }).catch(() => { return message.reply({ embeds: [embed3] }) })

        } catch (e) {
            console.log(e);
        }

    },

};