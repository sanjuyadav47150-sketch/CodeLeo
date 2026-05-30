const fs = require("fs");

module.exports = (client) => {
    client.commands = new Map();

    const folders = fs.readdirSync("./commands");

    for (const folder of folders) {
        const files = fs.readdirSync(`./commands/${folder}`)
            .filter(file => file.endsWith(".js"));

        for (const file of files) {
            const command = require(`../commands/${folder}/${file}`);
            client.commands.set(command.name, command);
        }
    }
};
