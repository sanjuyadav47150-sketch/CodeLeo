const { PermissionsBitField } = require("discord.js");

module.exports = {
    name: "timeout",
    description: "Timeout a member",

    async execute(message, args) {

        if (!message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
            return message.reply("You do not have permission to use this command.");
        }

        const member = message.mentions.members.first();

        if (!member) {
            return message.reply("Please mention a member.");
        }

        const minutes = parseInt(args[1]);

        if (!minutes || minutes < 1) {
            return message.reply("Please provide a valid duration in minutes.");
        }

        await member.timeout(minutes * 60 * 1000);

        message.reply(`${member.user.tag} has been timed out for ${minutes} minute(s).`);
    }
};
