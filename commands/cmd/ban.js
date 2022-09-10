const { MessageEmbed } = require("discord.js");
module.exports = {
        name: "ban",
        description: "This command banned a member!",
        run: async(client, message, args) => {
            if(!message.member.permissions.has("BAN_MEMBERS")) return;
           
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                const embed = new MessageEmbed()
                .setDescription(`Pomyślnie zbanowano ${memberTarget};)`)
                .setColor("#eb0707");
                 message.channel.send({ embeds: [embed] });
                }else{
                    const embed = new MessageEmbed()
                    .setTitle("Niepoprawne użycie komendy")
                    .setDescription("**Poprawne użycie komendy**:\n\n\`-ban @user\`")
                    .setColor("#eb0707");
                     message.channel.send({ embeds: [embed] });
            }
        }
    } 