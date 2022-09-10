const { MessageEmbed } = require(`discord.js`)

module.exports = {
    name: `rzutmoneta`,
    description: `Możesz rzucić monetą`,

    run: async (client, message, args) => {

        const wynik = Math.random() > 0.5;

        const embed1 = new MessageEmbed()
            .setTitle(`🥏 Rzucam monetą...`)
            .setColor(`RANDOM`)

        let msg1 = await message.reply({ embeds: [embed1] })

        setTimeout(async () => {
            msg1.delete()
        }, 1000)

        const embed2 = new MessageEmbed()
            .setTitle(`Chwila...`)
            .setColor(`RANDOM`)

        let msg2
        setTimeout(async () => {
            msg2 = await message.reply({ embeds: [embed2] })
        }, 1000)

        setTimeout(async () => {
            msg2.delete()
        }, 2000)

        const embed3 = new MessageEmbed()
            .setTitle(`Wyrzucono:`)
            .setDescription(`__Orzeł__`)
            .setColor("#810ec4")
            .setFooter({ text: `${message.author.tag}`, iconURL: message.author.displayAvatarURL() })

        const embed4 = new MessageEmbed()
            .setTitle(`Wyrzucono:`)
            .setDescription(`__Reszka__`)
            .setColor("#810ec4")
            .setFooter({ text: `${message.author.tag}`, iconURL: message.author.displayAvatarURL() })

        setTimeout(async () => {
            wynik ? await message.reply({ embeds: [embed3] }) : await message.reply({ embeds: [embed4] })
        }, 2000)

    }
}

