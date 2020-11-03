const Command = require("../../base/Command.js");
const ms = require("ms");
class Help extends Command {
	constructor(client) {
		super(client, {
			name: "help",
			description: (language) => language.get("HELP_DESCRIPTION"),
			usage: (language, prefix) => language.get("HELP_USAGE", prefix),
			examples: (language, prefix) => language.get("HELP_EXAMPLES", prefix),
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["aide", "h"],
			permLevel: "User",
			botPermissions: ["SEND_MESSAGES"],
			nsfw: false,
			adminOnly: false,
			cooldown: 5000,
		});
	}

	run(message, args) {
		try {
			const prefix = message.prefix;
			if (args[0]) {
				const command = message.bot.commands.get(args[0]) || message.bot.commands.get(message.bot.aliases.get(args[0]));
				if (command) {
					return message.channel.send({
						embed: {
							author: {
								name: message.language.get("HELP_TITLE", command.help.name),
								icon_url: message.bot.user.displayAvatarURL({ format: "png", dynamic: true })
							},
							color: message.bot.config.embed.color,
							footer: {
								text: message.bot.config.embed.footer
							},
							fields: [
								{
									name: message.language.get("HELP_FIELDS")[0],
									value: command.help.description(message.language),
								},
								{
									name: message.language.get("HELP_FIELDS")[1],
									value: command.help.usage(message.language, prefix),
								},
								{
									name: message.language.get("HELP_FIELDS")[2],
									value: command.help.examples(message.language, prefix),
								},
								{
									name: "Aliases",
									value: command.conf.aliases.join(", ") ? command.conf.aliases.join(", ") : "none",
								},
								{
									name: "Cooldown",
									value: command.conf.cooldown ? ms(command.conf.cooldown, { long: true }) : "none",
								},
								{
									name: message.language.get("HELP_FIELDS")[3],
									value: `${message.config.permLevels.find((p) => p.name === command.conf.permLevel).level} (${command.conf.permLevel})`,
								},
							],
						},
					});
				} else {
					return message.channel.send(message.language.get("HELP_NOT_FOUND", args[0]));
				}
			} else {
				const embedFields = [];

				embedFields.push(
					{
						name: `⚙️ ${message.language.get("HELPGLOBAL_FIELDS")[0]} (${message.bot.commands.filter((filters) => filters.help.category === "Administration").size})`,
						value: message.bot.commands.filter((filters) => filters.help.category === "Administration").map((name) => name.help.name).map((name) => `\`${name}\``).join(", "),
					},
					{
						name: `🔰 ${message.language.get("HELPGLOBAL_FIELDS")[1]} (${message.bot.commands.filter((filters) => filters.help.category === "Moderation").size})`,
						value: message.bot.commands.filter((filters) => filters.help.category === "Moderation").map((name) => name.help.name).map((name) => `\`${name}\``).join(", "),
					},
					{
						name: `<a:leptitmetalleux:743240664535269437> ${message.language.get("HELPGLOBAL_FIELDS")[2]} (${message.bot.commands.filter((filters) => filters.help.category === "General").size})`,
						value: message.bot.commands.filter((filters) => filters.help.category === "General").map((name) => name.help.name).map((name) => `\`${name}\``).join(", "),
					},
					{
						name: `🎉 ${message.language.get("HELPGLOBAL_FIELDS")[3]} (${message.bot.commands.filter((filters) => filters.help.category === "Fun").size})`,
						value: message.bot.commands.filter((filters) => filters.help.category === "Fun").map((name) => name.help.name).map((name) => `\`${name}\``).join(", "),
					},
					{
						name: `<a:twitch:743242485588819970> ${message.language.get("HELPGLOBAL_FIELDS")[4]} (${message.bot.commands.filter((filters) => filters.help.category === "Stream").size})`,
						value: message.bot.commands.filter((filters) => filters.help.category === "Stream").map((name) => name.help.name).map((name) => `\`${name}\``).join(", "),
					},
					{
						name: `🎮 ${message.language.get("HELPGLOBAL_FIELDS")[5]} (${message.bot.commands.filter((filters) => filters.help.category === "Games").size})`,
						value: message.bot.commands.filter((filters) => filters.help.category === "Games").map((name) => name.help.name).map((name) => `\`${name}\``).join(", "),
					},
					{
						name: `🎧 ${message.language.get("HELPGLOBAL_FIELDS")[6]} (${message.bot.commands.filter((filters) => filters.help.category === "Music").size})`,
						value: message.bot.commands.filter((filters) => filters.help.category === "Music").map((name) => name.help.name).map((name) => `\`${name}\``).join(", "),
					},
				);

				return message.channel.send({
					embed: {
						author: {
							name: message.language.get("HELPGLOBAL_TITLE"),
							icon_url: message.bot.user.displayAvatarURL({ format: "png", dynamic: true })
						},
						color: message.bot.config.embed.color,
						description: message.language.get("HELP_EMBED_DESCRIPTION", prefix),
						footer: {
							text: message.bot.config.embed.footer(message),
							icon_url: message.bot.user.displayAvatarURL({ format: "png", dynamic: true })
						},
						fields: embedFields,
					},
				});
			}
		} catch (error) {
			console.error(error);
			return message.channel.send(message.language.get("ERROR", error));
		}
	}
}

module.exports = Help;
