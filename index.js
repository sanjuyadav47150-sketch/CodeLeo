const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config/config.json");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

require("./handlers/commandHandler")(client);

client.once("ready", () => {
    console.log(`CodeLeo online as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/ +/);

    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("An error occurred while running this command.");
    }
});

client.login(config.token);
