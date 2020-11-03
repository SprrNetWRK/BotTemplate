const Command = require("../../base/Command.js");
const fs = require("fs");

class SetTwitch extends Command {
	constructor(client) {
		super(client, {
			name: "settwitch",
			description: (language) => language.get("SETTWITCH_DESCRIPTION"),
			usage: (language, prefix) => language.get("SETTWITCH_USAGE", prefix),
			examples: (language, prefix) => language.get("SETTWITCH_EXAMPLES", prefix),
			// eslint-disable-next-line no-undef
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			permLevel: "Server Admin",
            botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            aliases: ["set-twitch"],
			nsfw: false,
			adminOnly: true,
			cooldown: 1000,
		});
	}

	async run(message, args) {
		try {
			var toModify = args[0];
				if (!toModify) {
					message.channel.send(message.language.get("SETTWITCH_NO_MODIFY")+"\n"+message.language.get("COMMAND_CANCEL"));
					toModify = await message.bot.functions.awaitResponse(message);
				}
				if (toModify.startsWith(message.guildconfig.prefix)) return;
				if (toModify.toLowerCase() === "stop" || toModify.toLowerCase() === "cancel") return message.channel.send(message.language.get("COMMAND_CANCELLED"));
				if (toModify.toLowerCase() !== "channel" && toModify.toLowerCase() !== "message") return message.channel.send(message.language.get("SETTWITCH_BAD_MODIFY"));
				if (toModify.toLowerCase() === "channel"){
					var chan = args[1];
					if (!chan) {
						message.channel.send(message.language.get("SETTWITCH_NO_ARGS", message.guildconfig)+"\n"+message.language.get("COMMAND_CANCEL"));
						chan = await message.bot.functions.awaitResponse(message);
					}
					if (chan.startsWith(message.guildconfig.prefix)) return;
					if (chan.toLowerCase() === "stop" || chan.toLowerCase() === "cancel") return message.channel.send(message.language.get("COMMAND_CANCELLED"));
					if (chan === "stop" || chan === "cancel") return message.channel.send(message.language.get("COMMAND_CANCELLED"));
					let c = message.guild.channels.resolve(chan) || message.guild.channels.resolveID(chan);
					let cid = c.toString().slice(2, c.toString().length -1) || c.id;
					if (isNaN(parseInt(cid)) || !message.guild.channels.cache.find(c => c.id === cid)) return message.channel.send(message.language.get("SETLOGS_ERROR_CHANNEL"));
					if (message.guild.channels.cache.get(`${cid}`).type !== "text") return message.channel.send(message.language.get("SETREPORTS_NOT_TEXT"));
					if (cid === message.guildconfig.twitch_channel) {
						return message.channel.send(message.language.get("SETTWITCH_SAME", cid))
					}
					message.guildconfig.twitch_channel = cid;
					// eslint-disable-next-line no-sync
					fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
					return message.channel.send(message.language.get("SETTWITCH_SUCCESS", cid));
				} else if (toModify.toLowerCase() === "message"){
					var annonce = args.slice(1).join(" ");
					if (!annonce) {
						message.channel.send(message.language.get("SETTWTICH_NO_MSG")+"\n"+message.language.get("COMMAND_CANCEL"));
						annonce = await message.bot.functions.awaitResponse(message);
					}
					if (annonce.startsWith(message.guildconfig.prefix)) return;
					if (annonce.toLowerCase() === "stop" || annonce.toLowerCase() === "cancel") return message.channel.send(message.language.get("COMMAND_CANCELLED"));
					if (annonce.length > 1500 || annonce.length < 1) return message.channel.send(message.language.get("SETTWITCH_MSG_LENGHT"));
					if (annonce === message.guildconfig.stream_annonce) {
						return message.channel.send(message.language.get("SETTWITCH_SAME_MSG"));
					}
					message.guildconfig.stream_annonce = annonce;
					// eslint-disable-next-line no-sync
					fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
					return message.channel.send(message.language.get("SETTWITCH_NEW_MSG", annonce));
				} else {
					return message.channel.send(message.language.get("SETTWITCH_ERROR_MODIFY"));
				}
		}
		catch (error) {
			console.error(error);
			return message.channel.send(message.language.get("ERROR", error));
		}
	}
}

module.exports = SetTwitch;
