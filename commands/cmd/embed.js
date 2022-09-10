const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  run: async(client, message, args) => {

    let permisjaEmbed = new MessageEmbed()
    .setColor(`RED`)
    .setAuthor({
      name: message.author.tag,
      iconURL: message.author.displayAvatarURL({ dynamic: true })
    })
    .setTitle(`Wystąpił błąd!`)
    .setDescription('Nie posiadasz permisji!\n\nWymagana permisja: \`MANAGE_MESSAGE\`')
    .setFooter({
      text: 'Powered By ClybepicBot'
    })
    if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send({ embeds: [permisjaEmbed] })

    let kanalEmbed = new MessageEmbed()
    .setColor(`DARK_ORANGE`)
    .setAuthor({
      name: message.author.tag,
      iconURL: message.author.displayAvatarURL
    })
    .setTitle('Wystąpił błąd!')
    .setDescription('Nie oznaczyłeś kanału na który chcesz wysłać wiadomość embed!')
    .setFooter({
      text: 'Powered By ClybepicBot'
    })
    .setTimestamp();
    const embedChannel = message.mentions.channels.first();
    if (!embedChannel) {
      message.channel.send({ embeds: [kanalEmbed] });
      return;
    }

    let hexEmbed = new MessageEmbed()
    .setColor(`GOLD`)
    .setAuthor({
      name: message.author.tag,
      iconURL: message.author.displayAvatarURL
    })
    .setTitle('Wystąpił błąd!')
    .setDescription('Nie podałeś koloru wiadomości embed!')
    .setFooter({
      text: 'Powered By ClybepicBot'
    })
    .setTimestamp();
    const content = args.slice(1).join(" ");

    let footerBrak = new MessageEmbed()
    .setColor(`DARK_ORANGE`)
    .setAuthor({
      name: message.author.tag,
      iconURL: message.author.displayAvatarURL({ dynamic: true })
    })
    .setTitle('Wystąpił błąd!')
    .setDescription('Nie podałeś Footera (Stopki) wiadomości embed!')
    .setFooter({
      text: 'Powered By ClybepicBot'
    })
    .setTimestamp();
    // Opcje embeda;
    let embedColor = content.split("|")[0];
    if (!embedColor) {
      message.channel.send({ embeds: [hexEmbed] });
      return;
    }

    let titleEmbed = new MessageEmbed()
    .setColor(`DARK_NAVY`)
    .setAuthor({
      name: message.author.tag,
      iconURL: message.author.displayAvatarURL({ dynamic: true })
    })
    .setTitle('Wystąpił błąd')
    .setDescription('Nie podałeś tytułu wiadomości embed!')
    .setFooter({
      text: 'Powered By ClybepicBot'
    })
    .setTimestamp();
    let embedTitle = content.split("|")[1];
    if (!embedTitle) {
      message.channel.send({ embeds: [titleEmbed] });
      return;
    }

    let descEmbed = new MessageEmbed()
    .setColor(`BLURPLE`)
    .setAuthor({
      name: message.author.tag,
      iconURL: message.author.displayAvatarURL({ dynamic: true })
    })
    .setTitle('Wystąpił błąd!')
    .setDescription('Nie podałeś treści wiadomości embed!')
    .setFooter({
      text: 'Powered By ClybepicBot'
    })
    .setTimestamp()
    let embedDescription = content.split("|")[2];
    if (!embedDescription) {
      message.channel.send({ embeds: [descEmbed] });
      return;
    }

    let embedFooter = content.split("|")[3];
    if (!embedFooter) {
      message.channel.send({ embeds: [footerBrak] });
      return;
    } 

    // Finalne tworzenie embeda;
    let embed = new MessageEmbed()
      .setColor(embedColor)
      .setTitle(embedTitle)
      .setDescription(embedDescription)
      .setFooter({
        text: embedFooter
      })

    embedChannel.send({ embeds: [embed] });
  },
};

