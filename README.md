CodeLeo

CodeLeo is a powerful all-in-one Discord bot built with Discord.js.

Features

Moderation

- Kick Members
- Ban Members
- Timeout Members
- Purge Messages

Utility

- Ping
- Help
- User Info
- Server Info
- Avatar

Requirements

- Node.js 18 or higher
- A Discord Bot Token
- A Discord Server

Installation

1. Clone the Repository

`git clone https://github.com/sanjuyadav47150-sketch/CodeLeo.git`

`cd CodeLeo`

2. Install Dependencies

`npm install`

3. Configure the Bot

Create or edit:

config/config.json

Add:

{
  "prefix": "!",
  "token": `"DISCORD_BOT_TOKEN"`
}

4. Enable Privileged Intents

Go to the Discord Developer Portal.

Open your application and navigate to:

Bot → Privileged Gateway Intents

Enable:

- Message Content Intent
- Server Members Intent

Save Changes.

5. Invite the Bot

Invite the bot to your server and ensure it has the following permissions:

- Administrator (recommended)
  or
- Kick Members
- Ban Members
- Moderate Members
- Manage Messages
- Read Messages
- Send Messages

6. Start the Bot

`node index.js`

If everything is configured correctly, you will see:

CodeLeo online as YourBotName

Commands

Utility

!ping
!help

Moderation

!kick @user
!ban @user
!timeout @user <minutes>
!purge <amount>

Troubleshooting

Invalid Token

Make sure you are using the Bot Token from the Discord Developer Portal and not the Application ID or Client ID.

Missing Permissions

Ensure the CodeLeo role is above the target member's role and has the required permissions.

License

MIT License

Author

Developed by Sanju Yadav
