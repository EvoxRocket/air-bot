const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setActivity("!help");
    console.log("Connected");
});

bot.login("NDkwNjM5NzM2OTMxODc2ODc0.Dn8vUw.8zclnSefsP7LrrQ4DrP4HLkPAAM");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste Commande: \n !help");
    }
});
