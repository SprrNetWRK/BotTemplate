const Command = require('../../base/Command');
const fetch = require("node-fetch");
const ApiClient = require('twitch').default;
const { ClientCredentialsAuthProvider } = require('twitch-auth');
const fs = require("fs");

class stream extends Command {
    constructor(client) {
        super(client, {
            name: 'stream',
            description: (language) => language.get("STREAM_DESCRIPTION"),
            usage: (language, prefix) => language.get("STREAM_USAGE", prefix),
            examples: (language, prefix) => language.get("STREAM_EXAMPLES", prefix),
            // eslint-disable-next-line no-undef
            dirname: __dirname,
            enabled: true,
            guildOnly: true,
            permLevel: "Server Admin",
            botPermissions: ["SEND_MESSAGES"],
            aliases: [],
            nsfw: false,
            adminOnly: true,
            cooldown: 1000
        });
    }

    async run(message, args) {
        try {
            const authProvider = new ClientCredentialsAuthProvider(this.client.guildconfig.TwitchClientId, this.client.guildconfig.TwitchclientSecret);
            const apiClient = new ApiClient({ authProvider });
            var ids = message.guildconfig.streamers;
            var method = args[0];
            if (!method) {
                await message.channel.send(message.language.get("STREAM_NO_METHOD") + "\n" + message.language.get("COMMAND_CANCEL"));
                method = await message.bot.functions.awaitResponse(message);
            }
            if (method.startsWith(message.guildconfig.prefix)) return;
            if (method.toLowerCase() === "stop" || method.toLowerCase() === "cancel") return message.channel.send(message.language.get("COMMAND_CANCELLED"));
            if (method.toLowerCase() !== "add" && method.toLowerCase() !== "remove" && method.toLowerCase() !== "list") return message.channel.send(message.language.get("STREAM_BAD_METHOD"));
            if (method.toLowerCase() === "list") {
                var text = "";
                if (ids.length === 0) {
                    text = message.language.get("STREAM_NO_STREAMER_IN");
                } else if (ids.length === 1) {
                    const user = await apiClient.helix.users.getUserById(ids[0]);
                    text = `**•** ${user._data.display_name} (${user._data.login} - ${user._data.id})`;
                } else {
                    for (var i = 0; i < ids.length; i++) {
                        const user = await apiClient.helix.users.getUserById(ids[i]);
                        if (text === "") {
                            text = `**•** ${user._data.display_name} (${user._data.login} - ${user._data.id})`;
                        } else {
                            text = text + `\n**•** ${user._data.display_name} (${user._data.login} - ${user._data.id})`
                        }
                    }
                }
                return message.channel.send({
                    embed: {
                        title: message.language.get("STREAM_LIST_TITLE"),
                        description: text,
                        color: 0x6441a5,
                    }
                })
            }
            if (message.guildconfig.twitch_channel === null) return message.channel.send(message.language.get("STREAM_NO_CHANNEL"));
            var user = args.slice(1).join(" ");
            if (!user) {
                await message.channel.send(message.language.get("STREAM_NO_STREAMER") + "\n" + message.language.get("COMMAND_CANCEL"));
                user = await message.bot.functions.awaitResponse(message);
            }
            if (user.startsWith(message.guildconfig.prefix)) return;
            if (user.toLowerCase() === "stop" || user.toLowerCase() === "cancel") return message.channel.send(message.language.get("COMMAND_CANCELLED"));
            const url = `https://api.twitch.tv/kraken/users?login=${user.toLowerCase()}`;
            const options = {
                headers: {
                    "Accept": "application/vnd.twitchtv.v5+json",
                    "Client-ID": message.guildconfig.TwitchClientId
                }
            };
            fetch(url, options)
                .then(res => res.json())
                .then(data => {
                    try {
                        if (data._total === 0) return message.channel.send(message.language.get("STREAM_NO_STREAMER_FOUND"));
                        if (method.toLowerCase() === 'add') {
                            if (ids.length === 4) return message.channel.send(message.language.get("STREAM_LIMIT_REACHED"));
                            if (ids.indexOf(data.users[0]._id) !== -1) return message.channel.send(message.language.get("STREAM_STREAMER_ALREADY_IN"));
                            message.guildconfig.streamers.push(data.users[0]._id);
                            // eslint-disable-next-line no-sync
                            fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
                            message.guildconfig.stream_titles.push(null);
                            // eslint-disable-next-line no-sync
                            fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
                            message.guildconfig.stream_games.push(null);
                            // eslint-disable-next-line no-sync
                            fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
                            message.guildconfig.stream_states.push(0);
                            // eslint-disable-next-line no-sync
                            fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
                            return message.channel.send(message.language.get("STREAM_ADDED", data.users[0].display_name, data.users[0].name, data.users[0]._id));
                        } else if (method.toLowerCase() === 'remove') {
                            if (ids.indexOf(data.users[0]._id) === -1) return message.channel.send(message.language.get("STREAM_STREAMER_NOT_IN"));
                            message.guildconfig.streamers.splice(ids.indexOf(data.users[0]._id), ids.indexOf(data.users[0]._id));
                            // eslint-disable-next-line no-sync
                            fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
                            message.guildconfig.stream_titles.splice(ids.indexOf(data.users[0]._id), ids.indexOf(data.users[0]._id));
                            // eslint-disable-next-line no-sync
                            fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
                            message.guildconfig.stream_games.splice(ids.indexOf(data.users[0]._id), ids.indexOf(data.users[0]._id));
                            // eslint-disable-next-line no-sync
                            fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
                            message.guildconfig.stream_states.splice(ids.indexOf(data.users[0]._id), ids.indexOf(data.users[0]._id));
                            // eslint-disable-next-line no-sync
                            fs.writeFileSync("../../config/server.json", JSON.stringify(message.guildconfig))
                        }
                        return message.channel.send(message.language.get("STREAM_REMOVED", data.users[0].display_name, data.users[0].name, data.users[0]._id));

                    } catch (error) {
                        console.error(error);
                        return message.channel.send(message.language.get("ERROR", error));
                    }

                });
        } catch (error) {
            console.error(error);
            return message.channel.send(message.language.get("ERROR", error));
        }
    }
}
module.exports = stream;