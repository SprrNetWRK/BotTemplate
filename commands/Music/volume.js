const Command = require("../../base/Command.js");

class Volume extends Command {
	constructor(client) {
		super(client, {
			name: "volume",
			description: (language) => language.get("VOLUME_DESCRIPTION"),
			usage: (language, prefix) => language.get("VOLUME_USAGE", prefix),
			examples: (language, prefix) => language.get("VOLUME_EXAMPLES", prefix),
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			permLevel: "User",
			botPermissions: ["SEND_MESSAGES"],
			cooldown: 2000,
		});
	}

	async run(message, args) {
		try {
			let trackPlaying = message.bot.player.isPlaying(message.guild.id);
			if (!trackPlaying) {
				return message.channel.send("No music playing.");
			}
			if (!message.member.voice.channel) return message.channel.send(message.language.get("PLAY_NO_VOICECHANNEL"));
			const volume = args.join(" ");
			if (!volume || isNaN(volume) || volume <= 0 || volume > 100) {
				return message.channel.send(message.language.get("VOLUME_BETWEEN"));
			}
			await message.bot.player.setVolume(message.guild.id, parseInt(volume));
			return message.channel.send(`${message.language.get("VOLUME_SETTED")} \`${volume}%\`.`);
		}
		catch (error) {
			console.error(error);
			return message.channel.send(message.language.get("ERROR", error));
		}
	}
}

module.exports = Volume;
