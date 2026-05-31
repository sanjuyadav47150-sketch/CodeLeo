module.exports = {
    name: "help",
    description: "Show all commands",

    async execute(message) {
        message.reply(`
CodeLeo Commands

Utility
!ping
!help

Moderation
!kick @user
!ban @user
!purge <amount>
!timeout @user <minutes>

More features coming soon...
`);
    }
};
