const Command = require("../../base/Command.js");

class Restart extends Command {
	constructor(client) {
		super(client, {
			name: "restart",
			description: (language) => language.get("RESTART_DESCRIPTION"),
			usage: (language, prefix) => language.get("RESTART_USAGE", prefix),
			examples: (language, prefix) => language.get("RESTART_EXAMPLES", prefix),
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			permLevel: "Bot Admin",
			nsfw: false,
			adminOnly: true,
			cooldown: 1000,
		});
	}

	run(message) {
		try {
			process.exit(0);
		}
		catch (error) {
			console.error(error);
			return message.channel.send(message.language.get("ERROR", error));
		}
	}
}

module.exports = Restart;
