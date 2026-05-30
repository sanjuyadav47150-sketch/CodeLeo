module.exports = {
    name: "help",
    description: "Show all commands",

    async execute(message) {
        message.reply(`
CodeLeo Commands

Utility
- ping
- help
`);
    }
};
