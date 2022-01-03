var Discord = require("discord.js");
var Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]});

const prefix = "!"

Client.login("OTI3MzY1ODEzNDQ1NDc2MzYz.YdJKtw.hFX87B1y5yUb8uh2ewnVTwUjaGg")

Client.on("ready", () => {
    console.log("mxm Bot en ligne");
});

Client.on("guildMemberAdd", member => {
    console.log("BIENVENUE");
    const embedwelcome = new Discord.MessageEmbed()
            .setColor("#e1723a")
            .setTitle("Bienvenue !")
            .setDescription("<@" + member.id + "> vient d'arriver sur le serveur **最高** !")
            .setThumbnail("https://i.imgur.com/EISGq5Z.png");
    Client.channels.cache.get("927359847308075008").send({ embeds: [embedwelcome]});
    member.roles.add("914653456076263464");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#e1723a")
            .setTitle("Liste des commandes")
            .setThumbnail("https://i.imgur.com/EISGq5Z.png");

        message.channel.send({ embeds: [embed]});
    }

});
