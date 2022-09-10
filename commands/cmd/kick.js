const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'kick',
    run: async(client, message, args) => {
        if (!message.member.permissions.has("KICK_MEMBERS")) return;
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            const embed = new MessageEmbed()
                .setDescription(`:white_check_mark: Pomyślnie wyrzucono ${memberTarget};)`)
                .setColor("#eb0707");
                 message.channel.send({ embeds: [embed] });
            }else{
                const embed = new MessageEmbed()
                .setTitle("Niepoprawne użycie komendy")
                .setDescription("**Poprawne użycie komendy**:\n\n\`-kick @user\`")
                .setColor("#eb0707");
                 message.channel.send({ embeds: [embed] });
        }
   }
}