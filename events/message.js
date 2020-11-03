const { Collection } = require("discord.js")

module.exports = class {
	constructor(client) {
		this.client = client;
	}

	async run(message) {
		if (message.author.bot) { return; }

		const client = this.client;

		if (message.guild && !message.member) {
			await message.guild.members.fetch(message.author.id);
		}

		if (message.guild && !message.guild.member(client.user).hasPermission("SEND_MESSAGES")) { return; }

		message.config = client.config;
		message.guildconfig = client.guildconfig;
		message.bot = client;


		const language = new (require(`../languages/${message.guildconfig.language}.js`));
		message.language = language;

		// Gets message level
		const permLevel = await client.getLevel(message);
		message.permLevel = permLevel;

		// Check if the bot was mentioned
		const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
		if (message.content.match(prefixMention)) {
			return await message.channel.send(language.get("BOT_MENTION", message.guildconfig.prefix));
		}

		// Gets prefix
		const prefix = client.functions.getPrefix(message);
		if (!prefix) return;
		message.prefix = prefix;

		const args = message.content.slice((typeof prefix === "string" ? prefix.length : 0)).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
		if (!cmd) return;

		if (cmd && !message.guild && cmd.conf.guildOnly) {
			return message.channel.send(language.get("ERROR_COMMAND_GUILDONLY"));
		}

		if (!client.cooldowns.has(cmd.help.name)) {
			client.cooldowns.set(cmd.help.name, new Collection());
		}

		const now = Date.now();
		const timestamps = client.cooldowns.get(cmd.help.name);
		const cooldownAmount = cmd.conf.cooldown;

		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return client.errors.inCooldown(timeLeft, cmd.help.name, message);
			}
		}

		if (permLevel < 4) {
			timestamps.set(message.author.id, now);
			setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
		}

		if (message.guild) {
			const neededPermission = [];
			if (!cmd.conf.botPermissions.includes("EMBED_LINKS")) {
				cmd.conf.botPermissions.push("EMBED_LINKS");
			}
			cmd.conf.botPermissions.forEach((permission) => {
				if (!message.channel.permissionsFor(message.guild.me).has(permission)) {
					neededPermission.push(permission);
				}
			});
			if (neededPermission.length > 0) {
				return client.errors.botPermissions(neededPermission.map((p) => `\`${p}\``).join(", "), message);
			}
		}

		if (message.guild && !message.member.hasPermission("MENTION_EVERYONE") && message.mentions.everyone) {
			return client.errors.everyone(message);
		}

		if (permLevel < client.levelCache[cmd.conf.permLevel]) {
			return client.errors.perm(client.config.permLevels.find((l) => l.level === permLevel).name, cmd.conf.permLevel, message);
		}

		if (message.channel.type === "text" && !message.channel.nsfw && cmd.conf.nsfw) {
			return client.errors.nsfw(message);
		}

		if (!cmd.conf.enabled && permLevel < 4) {
			return client.errors.disabled(message);
		}
		client.logger.log(`[Permission: ${message.permLevel}] ${message.author.tag} (${message.author.id}) ran command ${cmd.help.name}`, "cmd");
		cmd.run(message, args);
	}
};
