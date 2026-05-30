const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.once("ready", () => {
    console.log(`CodeLeo online as ${client.user.tag}`);
});

client.login("MTUxMDQyOTkwMjMwOTE2NzEwNA.Gk7t1p.PZokEuXqOv5W9-2T2RXG6O6dklWwkm3D4iK2BY");
