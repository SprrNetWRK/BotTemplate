module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run() {
        try {
            const ApiClient = require('twitch').default;
            const { ClientCredentialsAuthProvider } = require('twitch-auth');
            const client = this.client;
            const authProvider = new ClientCredentialsAuthProvider(client.guildconfig.TwitchClientId, client.guildconfig.TwitchclientSecret);
            const apiClient = new ApiClient({ authProvider });
            
            const fs = require("fs");
            // If the token isn't a bot token the bot will logout.
            if (!client.user.bot) {
                // eslint-disable-next-line no-undef
                return process.exit(1);
            }
            // Logs some information using the logger file
            console.log(`[Commands] - Loading a total of ${client.commands.size} command(s).`);
            client.logger.log(`${client.user.tag} ready.`, "ready");

            // Update the game every 20s
            const games = [
                {
                    name: `${client.guildconfig.prefix}help`,
                    type: "STREAMING",
                },
                {
                    name: `add me with ${client.guildconfig.prefix}invite!`,
                    type: "STREAMING",
                },
            ];
            let i = 0;

            setInterval(async function () {
                try {
                    await client.user.setPresence({
                        activity: {
                            name: games[parseInt(i, 10)].name,
                            type: games[parseInt(i, 10)].type,
                        }, status: "dnd",
                    });
                    if (games[parseInt(i + 1)]) { i++; }
                    else { i = 0; }
                } catch (error) {
                    return console.log(error);
                }

            }, 35000);

            // eslint-disable-next-line no-inner-declarations
            async function isStreamLive(id) {
                const user = await apiClient.helix.users.getUserById(id);
                if (!user) {
                    return false;
                }
                const s = await user.getStream();
                if (s !== null) return s;
                else return false;
            }

            setInterval(async () => {
                try {
                    const ids = client.guildconfig.streamers;
                    const language = new (require(`../languages/${client.guildconfig.language}.js`));
                    for (let i = 0; i < ids.length; i++) {
                        const userId = ids[i];
                        const stream = await isStreamLive(userId);
                        console.log(stream);
                        if (stream !== false) {
                            var user = await apiClient.helix.users.getUserById(userId);
                            console.log("Stream !== false");
                            console.log(user)
                            const game = await apiClient.helix.games.getGameById(stream._data.game_id);
                            console.log(game);
                            if ((client.guildconfig.stream_titles[ids.indexOf(userId)] === null ? client.guildconfig.stream_titles[ids.indexOf(userId)] : client.guildconfig.stream_titles[ids.indexOf(userId)].toString()) !== stream._data.title) {
                                client.guildconfig.stream_titles.splice(ids.indexOf(userId), 1, stream._data.title);
                                // eslint-disable-next-line no-sync
                                fs.writeFileSync("../../config/server.json", JSON.stringify(client.guildconfig))
                                if (client.guildconfig.stream_states[ids.indexOf(userId)] !== 0) {
                                    client.channels.cache.get(client.guildconfig.twitch_channel).send(language.get("STREAM_TITLE_CHANGED", stream._data.user_name, stream._data.title));
                                }
                                return;
                            }
                            if (client.guildconfig.stream_games[ids.indexOf(userId)] !== game._data.id) {
                                client.guildconfig.stream_titles.splice(ids.indexOf(userId), 1, game._data.id);
                                // eslint-disable-next-line no-sync
                                fs.writeFileSync("../../config/server.json", JSON.stringify(client.guildconfig))
                                if (client.guildconfig.stream_states[ids.indexOf(userId)] !== 0) {
                                    const oldGame = await apiClient.helix.games.getGameById(client.guildconfig.stream_games[ids.indexOf(userId)]);
                                    client.channels.cache.get(client.guildconfig.twitch_channel).send(language.get("STREAM_GAME_CHANGED", stream._data.user_name, oldGame._data.name, game._data.name));
                                }
                                return;
                            }
                            if (client.guildconfig.stream_states[ids.indexOf(userId)] === 0) {
                                client.guildconfig.stream_states.splice(ids.indexOf(userId), 1, true);
                                // eslint-disable-next-line no-sync
                                fs.writeFileSync("../../config/server.json", JSON.stringify(client.guildconfig))
                                client.channels.cache.get(client.guildconfig.twitch_channel).send(client.guildconfig.stream_annonce.toString('utf-8').replace("{streamer}", `${stream._data.user_name}`));
                                client.channels.cache.get(client.guildconfig.twitch_channel).send({
                                    embed: {
                                        author: {
                                            name: stream._data.user_name,
                                            icon_url: user._data.profile_image_url,
                                        },
                                        title: stream._data.title,
                                        url: `https://twitch.tv/${stream._data.user_name.toLowerCase()}`,
                                        fields: [
                                            {
                                                name: language.get("STREAM_EMBED_TITLES")[0],
                                                value: game === null ? language.get("STREAM_NO_GAME") : game._data.name,
                                                inline: true
                                            },
                                            {
                                                name: language.get("STREAM_EMBED_TITLES")[1],
                                                value: stream._data.viewer_count,
                                                inline: true
                                            },
                                            {
                                                name: language.get("STREAM_EMBED_TITLES")[2],
                                                value: language.get("STREAM_STARTEDAT", stream._data.started_at),
                                            },
                                        ],
                                        image: {
                                            url: stream._data.thumbnail_url.toString().replace("{width}", "1980").replace("{height}", "1080"),
                                            width: 1920,
                                            height: 1080,
                                        },
                                        color: 0x6441a5,
                                        thumbnail: {
                                            url: game === null ? null : game._data.box_art_url.toString().replace("{width}", "188").replace("{height}", "250"),
                                            width: 188,
                                            height: 250,
                                        },
                                    }
                                });
                            }
                        } else if (client.guildconfig.stream_states[ids.indexOf(userId)] === 1) {
                            client.guildconfig.stream_states.splice(ids.indexOf(userId), 1, false);
                            // eslint-disable-next-line no-sync
                            fs.writeFileSync("../../config/server.json", JSON.stringify(client.guildconfig))
                            const user = await apiClient.helix.users.getUserById(userId);
                            client.channels.cache.get(client.guildconfig.twitch_channel).send(language.get("STREAM_ENDED", user._data.display_name));
                        }
                    }
                } catch (error) {
                    return console.error(error);
                }

            }, 60000);

        } catch (error) {
            return console.log(error);
        }

    }
};