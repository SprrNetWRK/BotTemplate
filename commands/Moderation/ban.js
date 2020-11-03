const Command = require("../../base/Command.js");

class Ban extends Command {
	constructor(client) {
		super(client, {
			name: "ban",
			description: (language) => language.get("BAN_DESCRIPTION"),
			usage: (language, prefix) => language.get("BAN_USAGE", prefix),
			examples: (language, prefix) => language.get("BAN_EXAMPLES", prefix),
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			permLevel: "Server Moderator",
			botPermissions: ["SEND_MESSAGES", "BAN_MEMBERS"],
			nsfw: false,
			adminOnly: false,
			cooldown: 1000,
		});
	}

	async run(message, args) {
		try {
			message.delete();
			if (args[0] === 'remove') {
				const searchArgs = args.slice(1).join(" ");
				if (!searchArgs) {
					return message.reply(`<:lycosX:631854509798326322> ${message.language.get("BAN_ERRORARGS")}`)
				}
				const guildBans = await message.guild.fetchBans();
				if (!guildBans.some((u) => u.user.id === searchArgs)) {
					return message.channel.send(message.language.get("BAN_NOT_BANNED"));
				}
				await message.guild.members.unban(searchArgs)
					.then(u => { 
						message.channel.send(message.language.get("UNBAN_INFO", u.username, message)) 
					})
					.catch((error) => message.channel.send(`<:lycosX:631854509798326322> ${message.author} ${message.language.get("BAN_ERROR")} ${error}`));
				return;
			}
			const searchArgs = args[0];
			if (!searchArgs) {
				return message.reply(`<:lycosX:631854509798326322> ${message.language.get("BAN_ERRORARGS")}`)
			}
			else {
				let member;
				if (message.mentions.members.size > 0) {
					member = message.mentions.members.first();
				}
				else if (searchArgs) {
					member = message.bot.functions.fetchMembers(message.guild, searchArgs);
					if (member.size === 0) {
						return message.channel.send(message.language.get("ERROR_NOUSER_FOUND"));
					}
					else if (member.size === 1) {
						member = member.first();
					}
					else {
						return message.channel.send(message.language.get("ERROR_MUCH_USERS_FOUND"));
					}
				}

				const guildBans = await message.guild.fetchBans();
				if (guildBans.some((u) => u.user.id === member.id)) {
					return message.channel.send(message.language.get("BAN_ALREADY"));
				}

				if (!member.bannable) {
					return message.channel.send(message.language.get("BAN_BANNABLE"));
				}

				let reason = args.slice(1).join(" ");
				if (!reason) {
					reason = message.language.get("BAN_NOREASON");
				}

				await member.ban({ reason: reason, days: 7 })
					.catch((error) => message.channel.send(`<:lycosX:631854509798326322> ${message.author} ${message.language.get("BAN_ERROR")} ${error}`));
				return message.channel.send(message.language.get("BAN_INFO", member, message)).then(msg => msg.delete({timeout: 5000, reason: "Auto delete ban"}));
			}
		}
		catch (error) {
			console.error(error);
			return message.channel.send(message.language.get("ERROR", error));
		}
	}
}

module.exports = Ban;
