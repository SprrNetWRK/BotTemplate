// eslint-disable-next-line no-undef
if (process.version.slice(1).split(".")[0] < 12) {throw new Error("Node 12.0.0 or higher is required. Update Node on your system.");}
const { Client, Collection } = require("discord.js");
const { promisify } = require("util"),
	fs = require("fs"),
	path = require("path"),
	readdir = promisify(fs.readdir);
	// Commandes cat & dog
const { Provider, Client: PictURLClient } = require("pict-url");
// Commandes giveaway
const { GiveawaysManager } = require("discord-giveaways");
//Module musique
const { Player } = require("discord-player");

class Bot extends Client {
	constructor(options) {
		super(options);
		this.config = require("./config/config");
		this.commands = new Collection();
		this.aliases = new Collection();
		this.cooldowns = new Collection();
		// Dog & cat
		this.pictURL = new PictURLClient(Provider.Imgur);
		// Here we load all our functions stored in functions.js
		this.functions = require("./utils/functions");
		this.guildconfig = require("./config/server.json");
		//Musique
		this.player = new Player(this);
		//Giveaways
		this.gManager = new GiveawaysManager(this, {
			storage: "./giveaways.json",
			updateCountdownEvery: 15000,
			default: {
				botsCanWin: false,
				exemptPermissions: [],
				embedColor: "#1A61BB",
				embedColorEnd: "#262626",
				reaction: "🎉",
			}
		});

		this.logger = require("./utils/logger");

		this.errors = require("./utils/errors");
		this._launch();
	}

	async _launch() {
		this.levelCache = {};
		for (let i = 0; i < this.config.permLevels.length; i++) {
			const thisLevel = this.config.permLevels[parseInt(i, 10)];
			this.levelCache[thisLevel.name] = thisLevel.level;
		}

		// eslint-disable-next-line no-undef
		process.setMaxListeners(0);
		
		this._loadEventsModules();
		this._loadCommandsModules();
		this.login(this.config.token);
	}

	getLevel(message) {
		let permissionLevel = 0;
		const permOrder = this.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);
		while (permOrder.length) {
			const currentLevel = permOrder.shift();
			if(message.guild && currentLevel.guildOnly) {
				continue;
			}
			if(currentLevel.check(message)) {
				permissionLevel = currentLevel.level;
				break;
			}
		}
		return permissionLevel;
	}

	_loadCommand(commandPath, commandName) {
		try {
			const props = new (require(`${commandPath}${path.sep}${commandName}`))(this);
			props.conf.location = commandPath;
			if (props.init) {
				props.init(this);
			}
			this.commands.set(props.help.name, props);
			props.conf.aliases.forEach((alias) => {
				this.aliases.set(alias, props.help.name);
			});
			return false;
		}
		catch (error) {
			return `Unable to load command ${commandName}: ${error}`;
		}
	}

	async _unloadCommand(commandPath, commandName) {
		let command;
		if(this.commands.has(commandName)) {
			command = this.commands.get(commandName);
		}
		else if(this.aliases.has(commandName)) {
			command = this.commands.get(this.aliases.get(commandName));
		}
		if(!command) {
			return `The command \`${commandName}\` doesn't seem to exist. Try again!`;
		}
		if(command.shutdown) {
			await command.shutdown(this);
		}
		delete require.cache[require.resolve(`${commandPath}${path.sep}${commandName}.js`)];
		return false;
	}

	async _loadCommandsModules() {
		const directories = await readdir("./commands/");
		let totalDirectories = 0;
		for (const directory of directories) {
			totalDirectories++;
			const commands = await readdir(`./commands/${directory}/`);
			commands.filter((command) => command.split(".").pop() === "js").forEach((command) => {
				const response = this._loadCommand(`./commands/${directory}`, command);
				if(response) {
					this.logger.log(response, "error");
				}
			});
		}
		console.log(`[Categories] - Loading ${totalDirectories}/${directories.length} categories.`);
	}

	async _loadEventsModules() {
		const eventFiles = await readdir("./events/");
		let totalEvents = 0;
		eventFiles.forEach((file) => {
			totalEvents++;
			const eventName = file.split(".")[0];
			const event = new (require(`./events/${file}`))(this);
			this.on(eventName, (...args) => event.run(...args));
			delete require.cache[require.resolve(`./events/${file}`)];
		});
		console.log(`[Events] - Loading ${totalEvents}/${eventFiles.length} event(s).`);
	}
}
module.exports.client = new Bot ({
	sync: true,
	autoReconnect: true,
	disableEveryone: true,
});
