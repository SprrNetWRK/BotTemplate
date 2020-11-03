const config = require('../config/config');
module.exports = class {
	constructor(client) {
		this.client = client;
	}

	async run(oldRole, newRole) {
		var sql = `SELECT *
		FROM Guilds
		WHERE guild_id="${newRole.guild.id}"`;
		var g;
		mysqlcon.query(sql, async function (err, result, fields) {
			g = result[0];
			if (g.logs_channel === null) return;
			const lang = new (require(`../languages/${g.language}.js`));
			return newRole.guild.channels.cache.find(c => c.id === g.logs_channel).send({
				embed: {
					title: lang.get(`LOGS_ROLE_UPDATE_TITLE`),
					description: lang.get('LOGS_ROLE_UPDATE_DESC', oldRole, newRole),
					footer: {
						text: config.embed.footer,
					},
					color: 0xDC9017,
				}
			});
		});
	}
};
