var fs = require("fs");
const aoijs = require("aoi.js");
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "?",
  intents: "all",
  fetchInvites: true,
});
bot.onInteractionCreate();
bot.onJoin();
bot.onLeave();
bot.onMessage(); //enables bot to see messages (required for executing Commands)
var reader = fs
  .readdirSync("./komutlar")
  .filter((file) => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./komutlar/${file}`);
  bot.command({
    name: command.name,
    code: command.code,
    aliases: command.aliases,
    nonPrefixed: command.nonPrefixed,
    
  });
}


const voice = new aoijs.Voice(bot, {
  soundcloud: {
    //clientId: "SoundCloud clientID", //remove the double slash if you want soundcloud
  },
  cache: {
    cacheType: "Memory",//Disk | None
    enabled: true,
  },
}, false); //true or false for pruneMusic
