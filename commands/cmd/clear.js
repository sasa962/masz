const {Discord, Permissions, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'clear',
    description: 'Komenda czyszczaca wiadomości',
    run: async(client, message, args, Discord) => {
        if(!message.member.permissions.has("ADMINISTRATOR, MESSAGE_MANAGEMENT")) {
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`Nie masz do tego permisji`)
            message.channel.send({ embeds: [embed] });
            return;
          }
        if(!args[0] ) {
            const embed1 = new MessageEmbed()
            .setColor('DARK_RED')
            .setDescription(`Podaj ilość`)
            message.reply({ embeds: [embed1] });
            return;
        }
        if(isNaN(args[0])) {
            const embed2 = new MessageEmbed()
            .setColor('DARK_RED')
            .setDescription(`Podaj prawdziwą liczbe!`)
            message.reply({ embeds: [embed2] });
            return;
        }

        if(args[0] > 200) {
            const embed3 = new MessageEmbed()
            .setColor('DARK_RED')
            .setDescription(`Nie można podawać ilości powyżej 200`)
            message.reply({ embeds: [embed3] });
            return;
        }
        if(args[0] < 2) {
            const embed4 = new MessageEmbed()
            .setColor('DARK_RED')
            .setDescription(`Musisz dać więcej niż 1`)
            message.reply({ embeds: [embed4] });
            return;
        }

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        }); let embed6 = new MessageEmbed()
        .setColor("RED")
        .setTitle("Wyczyszczenie udało się")
        .setDescription(`🧹Pomyślnie wyczyszczono czat z **${args[0]}** wiadomości 🧹`)
        return  message.channel.send({embeds: [embed6]})
    } 

}