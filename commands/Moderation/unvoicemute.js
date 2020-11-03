const Command = require("../../base/Command.js");

class unvoicemute extends Command {
    constructor(client) {
        super(client, {
            name: "unvoicemute",
            description: (language) => language.get("UNVOICEMUTE_DESCRIPTION"),
            usage: (language, prefix) => language.get("UNVOICEMUTE_USAGE", prefix),
            examples: (language, prefix) => language.get("UNVOICEMUTE_EXAMPLE", prefix),
            dirname: __dirname,
            enabled: true,
            guildOnly: true,
            permLevel: "Server Moderator",
            botPermissions: ["MANAGE_ROLES", "SEND_MESSAGES"],
            nsfw: false,
            adminOnly: false,
            cooldown: 1000,
        });
    }

    async run(message, args) {
        try {
            const searchArgs = args.join(" ");
            if (!searchArgs) {
                return message.channel.send(`<:lycosX:631854509798326322> ${message.language.get("UNMUTE_ERRORARGS")}`)
            } else {
                let member;
                if (message.mentions.members.size > 0) {
                    member = message.mentions.members.first();
                } else if (searchArgs) {
                    member = message.bot.functions.fetchMembers(message.guild, searchArgs);
                    if (member.size === 0) return message.channel.send(message.language.get("ERROR_NOUSER_FOUND"));
                    else if (member.size === 1) member = member.first();
                    else return message.channel.send(message.language.get("ERROR_MUCH_USER_FOUND"));
                }
                let muteRole = message.guild.roles.cache.find(m => m.name === 'voice-muted');
                if (!muteRole) {
                    await message.guild.roles.create({
                        data: {
                            name: 'voice-muted',
                            color: "BLACK",
                            permissions: 0
                        },
                        reason: "Mute - Auto create role"
                    }).catch(message.language.get("ERROR_CREATING_ROLE"));
                    muteRole = await message.guild.roles.cache.find(m => m.name === 'voice-muted');

                    message.guild.channels.cache.forEach(async (channel, id) => {
                        await channel.createOverwrite(muteRole.id,
                            {
                                SPEAK: false
                            }, "Mute - Auto setting up mute role")
                    });
                }
                if (!member.roles.cache.some(r => r.name === 'voice-muted')) return message.channel.send(message.language.get("UNMUTE_USER_NOT_MUTED"));
                await member.roles.remove(muteRole.id)
                    .then(r => {
                        if (member.voice.channel) member.voice.kick();
                        message.channel.send(message.language.get("UNMUTE_SUCCESS", member));
                        member.send(message.language.get("UNMUTE_USER_SUCCESS", message));
                        var sql = `SELECT prefix, autorole
		FROM Guilds
		WHERE guild_id="${message.guild.id}"`;
                        var g;
                        mysqlcon.query(sql, async function (err, result, fields) {
                            if (err) throw err;
                            g = result[0];
                            if (g.modlogs_channel) {
                                return message.guild.channels.chache.get(g.modlogs_channel).send({
                                    embed: {
                                        title: lang.get(`UNMUTE_EMBED_TITLE`),
                                        description: lang.get('UNMUTE_EMBED_DESC', member),
                                        footer: {
                                            text: config.embed.footer,
                                        },
                                        thumbnail: {
                                            url: member.user.displayAvatarURL({ format: "png", dynamic: true }),
                                        },
                                        color: 0xDB0808,
                                    }
                                })
                            } else {
                                return;
                            }
                        })
                    })
                    .catch((error) => message.channel.send(`<:lycosX:631854509798326322> ${message.author} ${message.language.get("UNMUTE_ERROR")} ${error}`));
            }
        }
        catch (error) {
            console.error(error);
            return message.channel.send(message.language.get("ERROR", error));
        }
    }
}

module.exports = unvoicemute;