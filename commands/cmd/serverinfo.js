const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "serverinfo",
    description: "Wyświetla informacje o serverze!",
    run: async(client, message, args) => {

        const owner = await message.guild.members.fetch(message.guild.ownerId);
        const embed = new MessageEmbed()
        .setTitle(`Informacje o ${message.guild.name}`)
        .setDescription(`👑・Owner serwera:\n<@!${message.guild.ownerId}>\n\n🌐・Ilość osób:\n\`${message.guild.memberCount}\`\n\n🤖・Ilość botów:\n\`${message.guild.members.cache.filter((m) => m.user.bot).size}\`\n\n🚩・Ilość ról:\n\`${message.guild.roles.cache.size}\`\n\n🤣・Ilość emoji:
        \`${message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size}` : `Server nie posiada emoji`}\`\n\n📆・Data utworzenia servera:\n\`${message.guild.createdAt.toLocaleDateString('en-us')}\`\n\n🧪・Status ulepszeń:\n\`${message.guild.premiumSubscriptionCount >= 1 ? `Serwer ma ${message.guild.premiumSubscriptionCount} boostów` : 'Server nie posiada ulepszeń ;('}\``)
        .setColor("#5e03fc")
        .setTimestamp()
        .setFooter(`Komenda wywołana przez ${message.author.tag}`, message.author.displayAvatarURL());
        message.channel.send({ embeds: [embed] })
    }
};