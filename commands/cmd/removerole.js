const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "giverole",
    description: ``,

    run: async (client, message, args) => {

        const embedError = new MessageEmbed()
            .setTitle(`Błąd`)
            .setColor('RED')

        if (!message.member.permissions.has("MANAGE_ROLES")) {
            embedError.setDescription(`🔐 | Nie masz do tego permisji!`)

            return message.reply({ embeds: [embedError] });
        }

        const member = await message.mentions.members.first();
        if (!member) {
            embedError.setDescription(`Musisz spingować jakąś osobę!`)

            return message.reply({ embeds: [embedError] });
        }

        const memberPosition = member.roles.highest.position;
        const moderationPosition = message.member.roles.highest.position;
        if (message.member.ownerId !== message.author.id && !(moderationPosition > memberPosition)) {
            embedError.setDescription(`Nie możesz tego zrobić osobie która jest wyżej lub ma taką samą rolę!`)

            return message.reply({ embeds: [embedError] });
        }

        const botPosition = await member.roles.highest.editable;
        if (!botPosition) {
            embedError.setDescription(`Rola bota jest niżej od najwyższej roli ${member}`)

            return message.reply({ embeds: [embedError] });
        }

        const role = await message.mentions.roles.first();
        if (!role || role.managed || !role.editable) {
            embedError.setDescription(`Musisz spingować rolę lub rola musi być niżej od bota!`)

            return message.reply({ embeds: [embedError] });
        }

        await member.roles.remove(role)

        const embed = new MessageEmbed()
            .setDescription('Pomyślnie zabrano rangę')
        return message.reply({ embeds: [embed] });

    },
};
