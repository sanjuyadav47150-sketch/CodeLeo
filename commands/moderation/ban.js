module.exports = {
    name: "ban",
    description: "Ban a member",

    async execute(message) {

        if (!message.member.permissions.has("BanMembers")) {
            return message.reply("You do not have permission to use this command.");
        }

        const member = message.mentions.members.first();

        if (!member) {
            return message.reply("Please mention a member to ban.");
        }

        await member.ban();

        message.reply(`${member.user.tag} has been banned.`);
    }
};
