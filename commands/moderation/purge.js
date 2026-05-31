module.exports = {
    name: "purge",
    description: "Delete messages",

    async execute(message, args) {

        if (!message.member.permissions.has("ManageMessages")) {
            return message.reply("You do not have permission to use this command.");
        }

        const amount = parseInt(args[0]);

        if (!amount || amount < 1 || amount > 100) {
            return message.reply("Please provide a number between 1 and 100.");
        }

        await message.channel.bulkDelete(amount, true);

        message.channel.send(`Deleted ${amount} messages.`);
    }
};
