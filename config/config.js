module.exports = {
	token: "NzQyNTIxNzUwNTgyOTg0NzI1.XzHVRA.PfHygVOVMR8_nSwRgN7opb7a3Rw",
	botname: "Test",
	permLevels: [
		{
			level: 0,
			name: "User",
			check: () => true,
		},
		{
			level: 1,
			name: "Server Moderator",
			check: (message) => (message.guild ? message.member.hasPermission("KICK_MEMBERS") : false),
		},
		{
			level: 2,
			name: "Server Admin",
			check: (message) => (message.guild ? message.member.hasPermission("ADMINISTRATOR") : false),
		},
		{
			level: 3,
			name: "Server Owner",
			check: (message) => (message.guild ? message.author.id === message.guild.ownerID : false),
		},
		{
			level: 4,
			name: "Bot Admin",
			check: (message) => message.config.botadmin.includes(message.author.id),
		},
	],
	botadmin: ["153163308801720321"],
	emotes: {
		error: "❌",
		success: "✅",
		info: "📘",
		nsfw: "🔞",
	},
	embed: {
		color: 0x8a1010,
		footer: (message) => `${message.bot.config.botname} - By LePtitMetalleux`,
	},
	twitch: {
		secret: "Secret",
		clientID: "ClientID",
	}
};
