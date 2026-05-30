module.exports = {
    name: "ping",
    description: "Check bot latency",

    async execute(message) {
        message.reply("Pong!");
    }
};
