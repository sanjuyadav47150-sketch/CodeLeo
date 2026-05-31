module.exports = {
    name: "kick",
    description: "Kick a member",

    async execute(message) {

        if (!message.member.permissions.has("KickMembers")) {
            return message.reply("You do not have permission to use this command.");
        }

        const member = message.mentions.members.first();

        if (!member) {
            return message.reply("Please mention a member to kick.");
        }

        await member.kick();

        message.reply(`${member.user.tag} has been kicked.`);
    }
};
