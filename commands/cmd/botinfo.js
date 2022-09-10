const { MessageEmbed, version } = require("discord.js");
module.exports = {
    name: "botinfo",
    description: "Wyświetla informacje o bocie!",
    run: async(client, message, args) => {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const embed = new MessageEmbed()
        .setDescription(`👑・Developers:\n\`M4sterek✓#3167\n\n🌐・Liczba serverów:\n\`${message.client.guilds.cache.size}\`\n\n📺・Liczba kanałów:\n\`${message.client.channels.cache.size}\`\n\n👥・Liczba użytkowników:\n\`${message.client.users.cache.size}\`\n\n🕧・Czas działania bota:
        \` ${days} Dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund \`\n\n⏳・Ping:\n\`${message.client.ws.ping} ms\`\n\🛡・Wersja Node.js:\n\`${process.version}\`\n\n🔧・Wersja discord.js:\n\`${version}\``)
        .setColor("#5e03fc")
        .setTimestamp()
        .setFooter(`Komenda wywołana przez ${message.author.tag}`, message.author.displayAvatarURL());
        
		message.channel.send({ embeds: [ embed ]})
	}
};