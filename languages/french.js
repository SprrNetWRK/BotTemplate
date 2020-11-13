const e = require("../config/config.js").emotes;
const moment = require("moment");
moment.locale('fr');

module.exports = class {
	constructor(...args) {
		this.language = {
			NO_DESCRIPTION_PROVIDED: "Aucune description définie",
			NO_USAGE_PROVIDED: "Aucune utilisation définie",
			NO_EXAMPLES_PROVIDED: "Aucun exemple défini",
			COMMAND_CANCEL: "Répondez par `stop` ou `cancel` pour arrêter la commande.",
			COMMAND_CANCELLED: "Commande arrêtée.",
			ERROR: (error) => `Quelque chose s'est mal passé. Veuillez réessayer.\n\`\`\`\n${error}\`\`\``,
			ERROR_PERMISSIONS_TITLE: `<:lycosX:631854509798326322> Permissions insuffisantes`,
			ERROR_PERMISSIONS_CONTENT: (lvl, rlvl) => `Cette commande nécessite le niveau d'autorisation \`${rlvl}\` et vous avez seulement le niveau \`${lvl}\` !`,
			ERROR_COMMAND_GUILDONLY: `<:lycosX:631854509798326322> | Cette commande n'est pas disponible dans les messages privés !`,
			ERROR_NSFW_TITLE: `${e.nsfw} Commande NSFW`,
			ERROR_NSFW_CONTENT: "Cette commande doit être lancée dans un channel NSFW (+18)",
			ERROR_DISABLED_TITLE: `<:lycosX:631854509798326322> Commande désactivée`,
			ERROR_DISABLED_CONTENT: "Cette commande est temporairement désactivée, seuls les administrateurs y ont actuellement accès.",
			ERROR_COOLDOWN: "<:lycosX:631854509798326322> __Cooldown en cours__",
			ERROR_COOLDOWN_CONTENT: (timeLeft, command) => `Vous devez attendre encore ${timeLeft} seconde(s) avant de pouvoir réutiliser la commande \`${command}\`.`,
			ERROR_EVERYONE_TITLE: `<:lycosX:631854509798326322> Sécurité`,
			ERROR_EVERYONE_CONTENT: "Nous avons détecté un @everyone dans votre message, mais vous n'avez pas la permission de mentionner @everyone dans les commandes.",
			ERROR_BOTPERMISSIONS_TITLE: `<:lycosX:631854509798326322> __Permissions manquantes__`,
			ERROR_BOTPERMISSIONS_CONTENT: (perm) => `Les permissions suivantes sont requises pour que cette commande fonctionne correctement: ${perm}.`,
			ERROR_SPECIFY_USER: "S'il vous plaît spécifiez un utilisateur.",
			ERROR_ROLE_INVALID: "Rôle invalide.",
			ERROR_NOUSER_FOUND: "Aucun utilisateur n'a été trouvé.",
			ERROR_MUCH_USERS_FOUND: "Plusieurs utilisateurs ont été trouvés, soyez plus précis.",
			ERROR_NSFW_DEACTIVATED: "Cette commande n'est pas disponible car le module ``NSFW`` n'est pas disponible sur ce serveur.\nDemandez à un administrateur du serveur de l'activer.",
			ERROR_FORTNITE_PLATFORM: "S'il vous plaît entrer une plateforme valide (pc, xbox, psn).",
			ERROR_FORTNITE_PLATFORM_USER_NOT_FOUND: "Cet utilisateur n'a pas été trouvé sur la plate-forme spécifiée.",
			BOT_MENTION: (prefix) => `>>> Mon préfixe est \`\`${prefix}\`\` sur ce serveur.\nMes commandes sont visibles en faisant \`\`${prefix}help\`\`.\nEn cas de problème, rejoignez le serveur de Lycos (discord.gg/64zRC73) ou contactez LePtitMetalleux#1604 ou BaptisteGT#0123 en messages privés.`,
			GIVEAWAY_DESCRIPTION: "Permet de gérer les giveaways facilement !",
			GIVEAWAY_USAGE: (prefix) => `${prefix}giveaway [start/edit/reroll/end/delete]`,
			GIVEAWAY_EXAMPLES: (prefix) => `${prefix}giveaway start 2[d/h/m/s] 5 Discord Nitro\n${prefix}giveaway edit 665556886732668949 1 -1h Discord Nitro\n${prefix}giveaway reroll 665556886732668949 2\n${prefix}giveaway end 665556886732668949\n${prefix}giveaway delete 665556886732668949`,
			GIVEAWAY_NO_METHOD: (prefix) => `Merci d'indiquer ce que vous voulez faire :\n${prefix}giveaway start [Durée] [Nombre de gagants] [Prix à gagner]\n${prefix}giveaway edit [messageID] [Nombre de gagnants] [Durée] [Prix à gagner]\n${prefix}giveaway end [messageID] [Nombre de gagnants à relancer]\n${prefix}giveaway delete [messageID]`,
			GIVEAWAY_NO_TIME: "Merci d'indiquer une durée !",
			GIVEAWAY_NO_WINNERCOUNT: "Merci d'indiquer le nombre de gagnants !",
			GIVEAWAY_NO_PRIZE: "Merci d'indiquer quelque chose à gagner !",
			GIVEAWAY_WINNERS_NOT_POSITIVE: "Le nombre de gagnants ne peut pas être négatif ou nul !",
			GIVEAWAY_TOO_LONG: "La durée indiquée est trop grande. Vous ne pouvez pas donner une date postérieure au jeudi 20 avril 271 821.",
			GIVEAWAY_TIME_NOT_POSITIVE: "La durée du giveaway ne peut être ni nulle ni négative !",
			GIVEAWAY_ERR_NO_ID: "Vous devez entrer l'ID du message du giveaway !",
			GIVEAWAY_ERR_REROLL_MSG_ENDED: (messageID) => `Aucun giveaway **terminé** trouvé avec l'ID de message \`${messageID}\`.`,
			GIVEAWAY_ERR_MESSAGE_NOT_FOUND: (messageID) => `Aucun giveaway trouvé avec l'ID de message \`${messageID}\`.`,
			GIVEAWAY_REROLL_NO_WINNERSCOUNT: "Veuillez indiquer le nombre de gagants à tirer !",
			GIVEAWAY_NO_NEWTIME: "Veuillez indiquer la modification de temps.",
			GIVEAWAY_CREATE_MESSAGES: {
				timeRemaining: "Temps restant : **{duration}** !",
				inviteToParticipate: "Réagis avec 🎉 pour participer !",
				winMessage: "Bravo {winners} ! Vous avez gagné **{prize}** !",
				embedFooter: "Giveaways",
				noWinner: "Giveaway annulé, aucune participation valide.",
				winners: "gagnant(s)",
				endedAt: "Se termine à",
				units: {
					seconds: "secondes",
					minutes: "minutes",
					hours: "heures",
					days: "jours"
				},
			},
			GIVEAWAY_REROLL_MESSAGES: {
				congrat: "Nouveau(x) gagnant(s) : {winners} ! Félicitations !",
				error: "Aucune inscription valide, aucun gagnant ne peut être choisi !",
			},
			LANGUAGE_DESCRIPTION: "Change la langue de Lycos.",
			LANGUAGE_USAGE: (prefix) => `${prefix}language [set/list]`,
			LANGUAGE_EXAMPLES: (prefix) => `${prefix}lang list\n${prefix}language set english\n${prefix}language set fr`,
			LANGUAGE_INFO: (language) => `Ma langue sur ce serveur est \`${language}\` !\n> Pour changer la langue, répondez avec \`\`set\`\`\n> Pour voir mes différentes langues, répondez par \`\`list\`\``,
			LANGUAGE_LIST: `Langues de Lycos`,
			LANGUAGE_NAMES: ["Anglais", "Français"],
			LANGAUGE_LIST_DESC: (prefix) => `Voici les différentes langues disponibles sur Lycos.\nTapez la commande \`\`${prefix}lang set [langue]\`\` en remplaçant \`\`[langue]\`\` par une des options ci-dessous.`,
			LANGUAGE_SUPPLY: "Répondez avec la langue dans laquelle vous voulez mettre le bot.",
			LANGUAGE_ALREADY_SET: (lang) => `Je suis déjà en \`${lang}\`.`,
			LANGUAGE_GUILD_INFO: (lang) => `Je suis désormais en \`${lang}\` sur ce serveur.`,
			ERROR_LANGUAGE_INCORRECT: "Je ne pense pas que je connaisse cette langue. Pouvez-vous m'aider à l'apprendre ?",
			LANGUAGE_METHOD_ERROR: "Je n'ai pas compris ce que vous vouliez faire, veuillez réessayer.",
			LANGUAGE_HELP_TRAD_TITLE: "Aide à la traduction",
			LANGUAGE_HELP_TRAD_MSG: "Si vous voulez nous aider dans la traduction du bot, [cliquez-ici](https://discord.gg/64zRC73).",
			MODULES_DESCRIPTION: "Traduire Lycos dans une autre langue.",
			MODULES_USAGE: (prefix) => `${prefix}modules set <module> <on/off>`,
			MODULES_EXAMPLES: (prefix) => `${prefix}modules set games on`,
			MODULES_INFO: (prefix) => `Certains modules ne sont pas disponibles par défaut sur Lycos.\n> Pour activer faites \`${prefix}modules set <module> <on/off>\`\n> Pour voir combien de modules j'ai, faire \`${prefix}modules list\``,
			MODULES_LIST: (modules) => `Voici la liste des modules disponibles :\n> \`${modules.join("\`, \`")}\``,
			MODULES_NULL: "Vous devez indiquer le module que vous souhaitez modifier.",
			MODULES_ALREADY_ACTIVATED: "Ce module est déjà activé.",
			MODULES_ALREADY_DEACTIVATED: "Ce module est déjà désactivé.",
			MODULES_ACTIVATED: (args) => `Le module ${args[1]} est maintenant activé sur ce serveur.`,
			MODULES_DEACTIVATED: (args) => `Le module ${args[1]} est maintenant désactivé sur ce serveur.`,
			ERROR_MODULES_INCORRECT: (prefix) => `Je ne pense pas que je connaisse ce module. Faites \`${prefix}modules list\``,
			POLL_DESCRIPTION: "Faire un sondage pour les membres de votre serveur.",
			POLL_USAGE: (prefix) => `${prefix}poll [Question]`,
			POLL_EXAMPLES: (prefix) => `${prefix}poll Lycos est-il un bon bot ? (Répondez non et vous serez banni c:)`,
			POLL_TEXT_NULL: "Vous devez insérer un texte pour faire un sondage.",
			POLL_REACT: "Réagissez avec les réactions en bas pour entrer dans le sondage.",
			PREFIX_DESCRIPTION: "Gérer le préfixe de bot sur le serveur.",
			PREFIX_USAGE: ".prefix set <prefix>\n.prefix reset",
			PREFIX_EXAMPLES: ".prefix set d.\n.prefix reset",
			PREFIX_INFO: (prefix) => `Mon préfixe sur ce serveur est \`${prefix}\` ! \n> Pour changer ce préfixe répondez avec \`set\`\n> Pour réinitialiser ce préfixe, répondez avec \`reset\``,
			PREFIX_NULL: "Répondez avec le préfixe que vous voulez attribuer au bot",
			PREFIX_CHANGE: (pref) => `Le préfixe est maintenant \`${pref}\`.`,
			PREFIX_RESET: "Le préfixe a été réinitialisé. Il est maintenant `.`",
			PREFIX_TOO_LONG: (prefix) => `Le préfixe \`${prefix}\` est trop long ! Le préfixe du bot ne peux pas faire plus de 15 caractères.`,
			ROLE_DESCRIPTION: "Gérer les rôles facilement.",
			ROLE_USAGE: ".role <add/remove> <user> <role>",
			ROLE_EXAMPLES: ".role add Lycos @Role/ID",
			ROLE_INFO: (prefix) => `> Pour ajouter un rôle à un utilisateur, faites \`${prefix}role add <user> <role>\` \n> Pour supprimer un rôle à un utilisateur, faites \`${prefix}role remove <user> <role>\``,
			ROLE_NOUSER_FOUND: "Aucun utilisateur n'a été trouvé.",
			ROLE_GIVE: (member, role) => `${member.user.username} a maintenant le rôle <@&${role}>.`,
			ROLE_REMOVE: (member, role) => `${member.user.username} n'a plus le rôle <@&${role}>.`,
			BOT_DESCRIPTION: "Afficher des informations sur Lycos.",
			BOT_USAGE: (prefix) => `${prefix}bot`,
			BOT_EXAMPLES: (prefix) => `${prefix}bot`,
			BOT_FIELDS: [
				"Informations générales",
				"Statistiques générales",
				"Autres renseignements",
				"\u200B",
			],
			BOT_FIELDS_CONTENT_GENERALINFO: (message, version) => `**Créateur :** [\`${message.bot.users.cache.get("169146903462805504").tag}\`](https://dsc.bio/baptistegt)\n**Développeurs :** [\`${message.bot.users.cache.get("153163308801720321").tag}\`](https://dsc.bio/LePtitMetalleux) et [\`${message.bot.users.cache.get("169146903462805504").tag}\`](https://dsc.bio/baptistegt)\nCréé le \`22/05/2020\`, le bot tourne actuellement sur la version \`${version}\`.`,
			BOT_FIELDS_CONTENT_GENERALSTATS: (guilds, users, channels) => `**Nombre de serveurs :** \`${guilds}\`.\n**Utilisateurs :** \`${users}\` en mémoire.\n**Nombre de salons :** \`${channels}\`.`,
			BOT_FIELDS_CONTENT_OTHERINFO: (process, moment, message) => `**Machine :** \`${process.platform}\` - \`(${process.arch})\` \n**TAS :** \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\`\n**Durée de connexion du bot :** \`${moment.duration(message.bot.uptime).format("M[m] W[w] D[d] H[h] m[m] s[s]")}\``,
			BOT_FIELDS_CONTENT_LINKS: "[Invitation](https://discordapp.com/oauth2/authorize?client_id=628186022991233025&scope=bot&permissions=8) - [Serveur](https://discord.gg/64zRC73) - [Dons](https://utip.io/lycosnovation) - [Utip](https://utip.io/lycosnovation) - [Site](https://lycos-novation.fr/) - [Twitch](https://www.twitch.tv/lycostv) - [Instagram](https://www.instagram.com/lycosnovation/) - [Twitter](https://twitter.com/LycosNovation)",
			HELP_DESCRIPTION: "Affiche la liste des commandes",
			HELP_USAGE: (prefix) => `${prefix}help (commande)`,
			HELP_EXAMPLES: (prefix) => `${prefix}help\n${prefix}help ping`,
			HELP_NOT_FOUND: (args) => `${e.error} | La commande \`${args}\` n'existe pas!`,
			HELP_COMING_SOON: "Arrive bientôt",
			HELP_TITLE: (command) => `Help : ${command}`,
			HELP_TITLE1: (category) => `Catégorie : ${category}`,
			HELP_EMBED_DESCRIPTION: (prefix) => `Bonjour, voici la documentation de Lycos.\nPour avoir plus d'informations sur une commande faites \`\`${prefix}help [Commande]\`\``,//Certaines commandes ne sont pas disponible sur la documentation parce qu'elles doivent être activer.\nPour voir ce que vous pouvez activer faites \`${message.settings.prefix}modules\`.
			HELP_FIELDS: [
				"Description",
				"Usage",
				"Exemples",
				"Niveau requis",
			],
			HELPGLOBAL_FIELDS: [
				"Administration",
				"Modération",
				"Général",
				"Divertissement",
				"Stream",
				"Statistiques de jeux",
				"Musique",
			],
			HELPGLOBAL_TITLE: "Menu d'aide",
			BUGREPORT_DESCRIPTION: "Permet de signaler un bug du bot.",
			BUGREPORT_USAGE: (prefix) => `${prefix}bugreport [Message] (Suivez l'exemple ci-dessous au mieux)`,
			BUGREPORT_EXAMPLES: (prefix) => `${prefix}bugreport Commande : role-info
			Erreur rencontrée : TypeError: role.createdTimestamp.toUTCString is not a function
			Contexte : J'ai juste fait .role-info Blurple et j'ai eu cette erreur.`,
			BUGREPORT_NO_ARGS: "Veuillez décrire le bug rencontré avec au moins 10 caractères et 1900 au maximum.",
			BUGREPORT_REPORT_SEND: "Le bug a bien été envoyé, il sera traité le plus rapidement possible et sera résolu lors d'une prochaine mise à jour.\nPour être au courant des futures mises à jour, rejoignez le Discord de Lycos (discord.gg/64zRC73).",
			INVITE_DESCRIPTION: "Donne l'invitation pour ajouter le bot sur un serveur",
			INVITE_USAGE: (prefix) => `${prefix}invite`,
			INVITE_EXAMPLES: (prefix) => `${prefix}invite`,
			INVITE_TITLE: "Menu d'invitation de Lycos",
			INVITE_DESC: `**⛓ Comment je fais pour inviter Lycos sur mon serveur ?**

			Voici les différents liens d'invitation de Lycos en fonction des permissions :
			📌 Pour inviter Lycos avec la **permission Administrateur**, il vous suffit de [cliquer ici](https://discordapp.com/api/oauth2/authorize?client_id=628186022991233025&permissions=8&scope=bot).
			⚙️ Pour inviter Lycos et **configurer ses permissions**, il vous suffit de [cliquer ici](https://discordapp.com/api/oauth2/authorize?client_id=628186022991233025&permissions=2146958583&scope=bot).
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			⚠️ **__ATTENTION__**
			Les permissions dont a besoin Lycos peuvent changer à tout moment.
			Pour être au courant de cela, il vous est recommandé de rejoindre le [serveur officiel de Lycos](https://discord.gg/64zRC73).`,
			//⚖️ Pour inviter Spyer avec **les permissions nécessaires**, il vous suffit de [cliquer ici](https://discordapp.com/api/oauth2/authorize?client_id=628186022991233025&permissions=41282630&scope=bot).
			VOTE_DESCRIPTION: "Donne les différents liens de vote du bot",
			VOTE_USAGE: (prefix) => `${prefix}vote`,
			VOTE_EXAMPLES: (prefix) => `${prefix}vote`,
			VOTE_TITLE: "Menu de vote de Lycos",
			VOTE_DESC: (bdb, dbl, bls, bfd, vb) => `<:botdatabase:728338548138442903> [Voter sur BotsDataBase](https://botsdatabase.com/bot/628186022991233025) (**${bdb}** votes - Votez toutes les 12H)
<:DiscordBotList:735786997569814579> [Voter sur Disord Bot List](https://top.gg/bot/628186022991233025) (**${dbl}** votes - Votez toutes les 12H)
<:botsfordiscord:739412747099570186> [Voter sur Bots For Discord](https://botsfordiscord.com/bot/628186022991233025) (**${bfd}** votes - Votez toutes les 12H)
<:botlistspace:738454241110392853> [Voter sur botlist.space](https://botlist.space/bot/628186022991233025) (**${bls}** votes - Votez toutes les 24H)
<:void_bots:738451886147108925> [Voter sur VoidBots](https://voidbots.net/bots/628186022991233025) (**${vb}** votes - Votez toutes les 12H)`,
			INVITE_USAGE: (prefix) => `${prefix}invite`,
			INVITE_EXAMPLES: (prefix) => `${prefix}invite`,
			INVITE_TITLE: "Menu d'invitation de Lycos",
			INVITE_DESC: `**⛓ Comment je fais pour inviter Lycos sur mon serveur ?**

			Voici les différents liens d'invitation de Lycos en fonction des permissions :
			📌 Pour inviter Lycos avec la **permission Administrateur**, il vous suffit de [cliquer ici](https://discordapp.com/api/oauth2/authorize?client_id=628186022991233025&permissions=8&scope=bot).
			⚙️ Pour inviter Lycos et **configurer ses permissions**, il vous suffit de [cliquer ici](https://discordapp.com/api/oauth2/authorize?client_id=628186022991233025&permissions=2146958583&scope=bot).
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			⚠️ **__ATTENTION__**
			Les permissions dont a besoin Lycos peuvent changer à tout moment.
			Pour être au courant de cela, il vous est recommandé de rejoindre le [serveur officiel de Lycos](https://discord.gg/64zRC73).`,
			PING_DESCRIPTION: "Donne la latence de l'API Discord",
			PING_USAGE: (prefix) => `${prefix}ping`,
			PING_EXAMPLES: (prefix) => `${prefix}ping`,
			PING_PONG: "Pong !",
			PING_APILATENCY: "Latence API",
			PING_CLIENTLATENCY: "Latence de Lycos",
			/* Cat */
			CAT_DESCRIPTION: "Amusez-vous en regardant des images de chat.",
			CAT_USAGE: (prefix) => `${prefix}cat`,
			CAT_EXAMPLES: (prefix) => `${prefix}cat`,
			/* Chrono */
			CHRONO_DESCRIPTION: "Crée un chronomètre",
			CHRONO_USAGE: (prefix) => `${prefix}chrono [start/stop]`,
			CHRONO_EXAMPLES: (prefix) => `${prefix}chrono start\n${prefix}chrono stop`,
			CHRONO_METHODS: "Faites `chrono start` pour démarrer le chrono et le `chrono stop` pour l'arrêter.",
			CHRONO_RUNNING: "Vous avez déjà lancé un chrono !",
			CHRONO_STARTED: "Chronomètre démarré ! Faites `chrono stop` pour l'arrêter.",
			CHRONO_NOT_RUNNING: "Vous n'avez pas lancé de chrono !",
			CHRONO_STOPPED: (result) => `Chronomètre arrêté à ${result}`,
			/* Dog */
			DOG_DESCRIPTION: "Amusez-vous en regardant des images de chien.",
			DOG_USAGE: (prefix) => `${prefix}dog`,
			DOG_EXAMPLES: (prefix) => `${prefix}dog`,
			AVATAR_DESCRIPTION: "Donne l'avatar de l'utilisateur demandé.",
			AVATAR_USAGE: (prefix) => `${prefix}avatar (@user/ID)`,
			AVATAR_EXAMPLES: (prefix) => `${prefix}avatar @Lycos\n ${prefix}avatar 628186022991233025`,
			AVATAR_TITLE: (looked) => `Avatar de ${looked.user.username}`,
			SERVERINFO_PROFIL: (guild) => `Informations sur le serveur | ${guild}`,
			SERVERINFO_DESCRIPTION: "Affiche les informations du serveur.",
			SERVERINFO_USAGE: (prefix) => `${prefix}serverinfo`,
			SERVERINFO_EXAMPLES: (prefix) => `${prefix}serverinfo`,
			SERVERINFO_REGIONS: [
				":flag_br: Brésil",
				":flag_eu: Europe Centrale",
				":flag_sg: Singapour",
				":flag_us: USA - Centre",
				":flag_au: Sydney",
				":flag_us: USA - Est",
				":flag_us: USA - Sud",
				":flag_us: USA - Ouest",
				":flag_eu: Europe de l'Ouest",
				":flag_us: USA - Est VIP",
				":flag_gb: Londres",
				":flag_nl: Amsterdam",
				":flag_hk: Hong Kong",
				":flag_ru: Russie",
				":flag_za: Afrique du Sud",
				":flag_eu: Europe",
				":flag_in: Inde",
				":flag_jp: Japon"
			],
			SERVERINFO_TITLES: [
				"Nom",
				"Création",
				"Total | Humains | Bots",
				"Salons",
				"ID",
				"Propriétaire",
				"Région",
				"Niveau de vérification",
				"Rôles",
			],
			SERVERINFO_CDATE: (message) => `${moment(message.channel.guild.createdAt.toUTCString()).format("LLLL").charAt(0).toUpperCase() + moment(message.channel.guild.createdAt.toUTCString()).format("LLLL").slice(1)} (${message.bot.functions.checkDays(message.channel.guild.createdAt, message)})`,
			SERVERINFO_NOROLES: "Aucun rôle n'est présent sur ce serveur.",
			SERVERINFO_ROLELIST: (guild) => `et ${guild.roles.cache.size - 10} ${guild.roles.cache.size - 10 === 1 ? "autre rôle" : "autres rôles"}.`,
			DATE_AGO: "Il y a ",
			DATE_DAY: " jour",
			DATE_DAYS: " jours",
			USERINFO_DESCRIPTION: "Affiche les informations sur l'utilisateur.",
			USERINFO_USAGE: (prefix) => `${prefix}userinfo (@user)`,
			USERINFO_EXAMPLES: (prefix) => `${prefix}userinfo @Lycos`,
			USERINFO_TITLES: [
				"Nom",
				"ID",
				"Statut",
				"Compte créé le",
				"A rejoint le serveur le",
				"Rôles",
			],
			USERINFO_TITLES_BADGE: (badge) => `${badge.length > 1 ? "Badges" : "Badge"}`,
			USERINFO_TITLES_ACTIVITY: (activity) => `${activity.length > 1 ? "Activités" : "Activité"}`,
			USERINFO_CREATEACCOUNT: (createAccount) => `${moment(createAccount.toUTCString()).format("LLLL").charAt(0).toUpperCase() + moment(createAccount.toUTCString()).format("LLLL").slice(1)}`,
			USERINFO_JOINGUILD: (joinGuild) => `${moment(joinGuild.toUTCString()).format("LLLL").charAt(0).toUpperCase() + moment(joinGuild.toUTCString()).format("LLLL").slice(1)}`,
			USERINFO_STATUS: [
				"En ligne",
				"Hors ligne",
				"Idle",
				"Ne pas déranger",
			],
			USERINFO_NO_BADGES: "Ce membre n'a aucun badge.",
			USERINFO_NO_ACTIVITY: "Ce membre n'a aucune activité en cours.",
			USERINFO_ACTIVITY_NUMBER: (activity) => `Ce membre a actuellement ${activity.length === 1 ? "1 activité" : `${activity.length} activités`} en cours :\n`,
			USERINFO_ACTIVITY_NUM: (index) => `**__Activité ${index + 1} :__**\n`,
			USERINFO_ACTIVITY_NAME: (activity) => `**Nom :** ${activity.name}`,
			USERINFO_ACTIVITY_TYPE: (activity) => `**Type :** ${activity.type}`,
			USERINFO_ACTIVITY_URL: (activity) => `**URL :** ${activity.url}`,
			USERINFO_ACTIVITY_DETAILS: (activity) => `**Détails :** ${activity.details}`,
			USERINFO_ACTIVITY_STATE: (activity) => `**État :** ${activity.state}`,
			USERINFO_ACTIVITY_TIMESTAMPS: (activity) => `${activity.start ? `**Début :** ${moment(activity.start.toUTCString()).format("LLLL").charAt(0).toUpperCase() + moment(activity.start.toUTCString()).format("LLLL").slice(1)}` : `**Aucun début détecté.**`}\n${activity.end ? `**Fin :** ${moment(activity.end.toUTCString()).format("LLLL").charAt(0).toUpperCase() + moment(activity.end.toUTCString()).format("LLLL").slice(1)}` : `**Aucune fin prévue.**`}`,
			USERINFO_ACTIVITY_PARTY: (activity) => `**Groupe :** ${activity.id}`,
			USERINFO_ACTIVITY_ASSETS: (activity) => `**Paramètres :** ${activity.largeText ? activity.largeText : "Aucun texte."} - ${activity.smallText ? activity.smallText : "Aucun texte."}`,
			USERINFO_SPOTIFY_LISTENING: "Écoute de la musique sur Spotify",
			USERINFO_SPOTIFY_TITLE: "Titre :",
			USERINFO_SPOTIFY_ARTIST: "Artiste :",
			USERINFO_SPOTIFY_ALBUM: "Album :",
			USERINFO_SPOTIFY_DURATION: `Durée de la musique :`,
			USERINFO_SPOTIFY_TIMEREMAINING: "Temps restant :",
			USERINFO_TWITCH_STREAMING: "En direct sur Twitch",
			USERINFO_TWITCH_TITLE: "Titre :",
			USERINFO_TWITCH_CATEGORY: "Catégorie :",
			USERINFO_TWITCH_JOIN: "Rejoindre le direct",
			USERINFO_GAME_PLAYING: "En train de jouer",
			USERINFO_GAME_NAME: "Nom :",
			USERINFO_GAME_SINCE: "Joue depuis",
			USERINFO_CS: "Statut Personnalisé :",
			USERINFO_CS_NAME: (activity) => `${activity.emoji ? activity.emoji.id ? `<${activity.emoji.animated ? `a` : ``}:${activity.emoji.name}:${activity.emoji.id}>` : `${activity.emoji.name}` : ``} ${activity.state}`,
			USERINFO_PROFIL: "Profil de ",
			USERINFO_UNKNOWN_STATUS: "Je n'ai pas pu trouver le statut de ce membre.",
			USERINFO_NOROLES: "Ce membre n'a aucun rôle.",
			USERINFO_ROLELIST: (member) => `et ${member.roles.cache.size - 10} ${member.roles.cache.size - 10 === 1 ? "autre rôle" : "autres rôles"}.`,
			MESSADEDELETE_DESC: "Message effacé",
			MESSADEDELETE_FIELD: [
				"Channel",
				"Contenu",
				"ID",
				"Utilisateur",
				"Message",
			],
			MESSAGEUPDATE_DESC: "Message mis à jour",
			MESSAGEUPDATE_FIELD: [
				"Channel",
				"Aller au message",
				"À présent",
				"Nouveau",
				"ID",
				"Utilisateur",
				"Message",
			],
			PARTNERS_DESCRIPTION: "Affiche les partenaires de Lycos.",
			PARTNERS_USAGE: (prefix) => `${prefix}partners`,
			PARTNERS_EXAMPLES: (prefix) => `${prefix}partners`,
			PARTNERS_TITLE: "Partenaires de lycos",
			PARTNERS_EMBED_DESC: "Ici sont listés les partenaires de Lycos accompagné d'une brève description.",
			PARTNERS_NAMES: ["Lycos n'a actuellement aucun partenaire."],
			PARTNERS_VALUES: ["Pour toute demande de partenariat, veuillez contacter notre équipe [Marketing](https://discord.gg/7UwmMA3)."],
			SPONSORS_DESCRIPTION: "Affiche les sponsors de Lycos",
			SPONSORS_USAGE: (prefix) => `${prefix}sponsors`,
			SPONSORS_EXAMPLES: (prefix) => `${prefix}sponsors`,
			SPONSORS_TITLE: "Sponsors de Lycos",
			SPONSORS_EMBED_DESC: "Ici sont listés les sponsors de Lycos.",
			SPONSORS_NAMES: ["Lycos n'a actuellement aucun sponsor."],
			SPONSORS_VALUES: ["Pour devenir sponsor, veuillez contacter <@!169146903462805504>."],
			ANIME_DESCRIPTION: "Cherchez les meilleurs animes.",
			ANIME_USAGE: (prefix) => `${prefix}anime [animeName]`,
			ANIME_EXAMPLES: (prefix) => `${prefix}anime Dragon Ball`,
			ANIME_NOTFOUND: "Vous devez inclure un nom d'anime.",
			ANIME_TITLES: [
				"Synopsis (En anglais par manque de traduction)",
				"Personnages",
				"Équipe technique",
				"Informations générales",
			],
			ANIME_INFOS: [
				"Autre appellations",
				"Épisodes",
				"Statut",
				"Diffusé",
				"Première",
				"Diffusion",
				"Producteurs",
				"Durée",
				"Classification",
				"Rang",
				"Popularité",
				"Membres",
				"Favori",
			],
			ANIME_UNKNOWN: "Inconnu",
			ANIME_VOICE: "Voix (VO):",
			ANIME_STAFF_ROLE: (staff_role) => `${staff_role === "Assistant Producer" ? "Producteur assistant" : staff_role === "Director, Character Design" ? "Directeur, Desing des personnages" : staff_role === "Director, Episode Director" ? "Directeur, Directeur d'épisode" : staff_role === "Episode Director, Storyboard" ? "Directeur d'épisode, Storyboard" : staff_role === "Producer" ? "Producteur" : staff_role === "Director" ? "Directeur" : staff_role === "Sound Director" ? "Directeur son" : staff_role === "Script, Screenplay" ? "Script, Scénario" : staff_role}`,
			ANIME_ROLE: (role) => `${role === "Main" ? "Principal" : "Secondaire"}`,
			ANIME_RATING: (rating) => `${rating === "G - All Ages" ? "Tout public" : rating === "PG - Children" ? "Public enfant" : rating === "PG-13 - Teens 13 or older" ? "Déconseillé aux moins de 13 ans" : rating === "R - 17+ (violence & profanity)" ? "Déconseillé aux mois de 17 ans (Violences et obscénités)" : rating === "R+ - Mild Nudity" ? "Déconseillé aux moins de 18 ans (Nudité)" : "Hentai"}`,
			ANIME_TRAILER: (trailer) => `[Cliquez ici](${trailer})`,
			FORTNITE_DESCRIPTION: "Regardez vos statistiques Fortnite pour être compétitif.",
			FORTNITE_USAGE: (prefix) => `${prefix}fortnite [platforme] [pseudo]`,
			FORTNITE_EXAMPLES: (prefix) => `${prefix}fortnite pc Ninja`,
			FORTNITE_PLATFORM: "S'il vous plaît entrer le nom de votre plate-forme (pc, xbox, psn).",
			FORTNITE_USERNAME_NULL: "Merci d'entrer un nom d'utilisateur.",
			FORTNITE_PLAYER_NOT_FOUND: "Joueur non trouvé.",
			FORTNITE_PLAYER_STATS: (data) => `Statistiques de ${data.username}`,
			FORTNITE_FIELDS: [
				"Kills",
				"Parties jouées",
				"Victoires",
				"Ratio de kills par partie",
			],
			FORTNITE_FIELDS_CONTENT_KILL: (data) => `${data.stats.lifetime.kills} (${data.stats.squad ? `${data.stats.squad.kills}` : "0"} dans la section, ${data.stats.duo ? `${data.stats.duo.kills}` : "0"} en duo, ${data.stats.solo ? `${data.stats.solo.kills}` : "0"} en solo)`,
			FORTNITE_FIELDS_CONTENT_MATCHSPLAYED: (data) => `${data.stats.lifetime.matches} (${data.stats.squad ? `${data.stats.squad.matches}` : "0"} dans la section, ${data.stats.duo ? `${data.stats.duo.matches}` : "0"} en duo, ${data.stats.solo ? `${data.stats.solo.matches}` : "0"} en solo)`,
			FORTNITE_FIELDS_CONTENT_VICTORIES: (data) => `${data.stats.lifetime.wins} (${data.stats.squad ? `${data.stats.squad.wins}` : "0"} dans la section, ${data.stats.duo ? `${data.stats.duo.wins}` : "0"} en duo, ${data.stats.solo ? `${data.stats.solo.wins}` : "0"} en solo)`,
			APEX_PLATFORM: "S'il vous plaît entrer le nom de votre plate-forme (pc, xbox, ps4).",
			APEX_ERROR_PLATFORM: "S'il vous plaît entrer une plate-forme valide (pc, xbox, ps4).",
			APEX_USERNAME_NULL: "Merci d'entrer un nom d'utilisateur.",
			OSU_DESCRIPTION: "Regardez vos statistiques Osu!.",
			OSU_USAGE: (prefix) => `${prefix}osu [pseudo]`,
			OSU_EXAMPLES: (prefix) => `${prefix}osu WhiteCat`,
			OSU_SUPPLY_PLAYER: "Répondez avec un nom d'utilisateur.",
			OSU_USER_NOT_FOUND: "Je n'ai pas pu trouver ce joueur.",
			OSU_EMBED_AUTHOR: (user) => `Profil Osu! de ${user.name} (ID: ${user.id}) | ${user.country}`,
			OSU_FIELDS: [
				"A commencé à jouer le",
				"Niveau",
				"Précision",
				"Points de performance",
				"Score",
				"Notes",
				"Nombre de parties jouées"
			],
			OSU_JOINED_DATE: (user) => `${moment(user.raw_joinedDate).format("LLLL")} et à joué pendant `,
			OSU_PP: (user) => `Points total en classé : ${user.pp.raw} - Rang mondial : ${user.pp.rank} - Rang national : ${user.pp.countryRank}`,
			OSU_SCORES: (user) => `Classé : ${user.scores.ranked} points - Total : ${user.scores.total} points`,
			OSU_COUNTS: (user) => `50 : ${user.counts['50']} - 100 : ${user.counts['100']} - 300 : ${user.counts['300']}
A : ${user.counts.A} - S : ${user.counts.S} - SH : ${user.counts.SH} - SS : ${user.counts.SS} - SSH :${user.counts.SSH}`,
			/* Qrcode */
			QRCODE_DESCRIPTION: "Génère un QRCode contenant le texte indiqué",
			QRCODE_USAGE: (prefix) => `${prefix}qrcode [text]`,
			QRCODE_EXAMPLES: (prefix) => `${prefix}qrcode Code secret`,
			QRCODE_MESSAGE: "Vous devez inclure quelque chose à convertir en un QR Code.",
			/* Reminder */
			REMINDER_DESCRIPTION: "Créé un rappel",
			REMINDER_USAGE: (prefix) => `${prefix}reminder [temps] [rappel]`,
			REMINDER_EXAMPLES: (prefix) => `${prefix}reminder 12h Voter pour Lycos`,
			REMINDER_NO_TIME: "Vous devez indiquer la durée dans laquelle je dois vous rappeller.",
			REMINDER_NO_REMIND: "Vous devez indiquer ce que je dois vous rappeller.",
			REMINDER_TOO_LONG: "Je ne vais jamais retenir tout ça... Veuillez me donner quelque chose à vous rapeller de plus court.",
			REMINDER_TITLE: "Rappel",
			REMINDER_STARTED: (toRemind, time) => `Parfait, je vous rappellerai de ${toRemind} dans ${time}.`,
			REMINDER_ENDED: (author, toRemind) => `<@!${author}>, il est l'heure de ${toRemind} !`,
			/* Roleinfo */
			ROLE_INFO_DESCRIPTION: "Affiche les informations du rôle indiqué.",
			ROLE_INFO_USAGE: (prefix) => `${prefix}role-info [@Role/ID]`,
			ROLE_INFO_EXAMPLES: (prefix) => `${prefix}role-info @Membres\ ${prefix}role-info 699011821654507572`,
			ROLE_INFO_SPECIFY: "Veuillez spécifier un rôle.",
			ROLE_INFO_NOT_FOUND: "Je ne trouve pas ce rôle.",
			ROLE_INFO_FIELDS: [
				"Couleur",
				"Position",
				"Mentionable",
				"Date de création",
			],
			ROLE_INFO_CDATE: (role, message) => `${moment(role.createdAt.toUTCString()).format("LLLL").charAt(0).toUpperCase() + moment(role.createdAt.toUTCString()).format("LLLL").slice(1)} (${message.bot.functions.checkDays(role.createdAt, message)})`,
			ROLE_INFO_ID: (role) => `ID du rôle : ${role.id}`,
			ROLE_INFO_EMBED_NAME: (role) => `Informations à propos du role ${role.name}`,
			FLIP_DESCRIPTION: "Amusez-vous à jouer avec le flip.",
			FLIP_USAGE: (prefix) => `${prefix}flip`,
			FLIP_EXAMPLES: (prefix) => `${prefix}flip`,
			FLIP_HEADS: ":game_die: | C'est **face** !",
			FLIP_TAILS: ":game_die: | C'est **pile** !",
			PERMISSIONS_DESCRIPTION: "Affiche les permissions d'un membre dans le salon",
			PERMISSIONS_USAGE: (prefix) => `${prefix}permissions (@member)`,
			PERMISSIONS_EXAMPLES: (prefix) => `${prefix}permissions\n${prefix}permissions @user#1234`,
			PERMISSIONS_TITLE: (username, channel) => `Permissions de ${username} dans #${channel}`,
			PURGE_DESCRIPTION: "Permet de supprimer plusieurs messages à la fois.",
			PURGE_USAGE: (prefix) => `${prefix}purge [NombreDeMessage]`,
			PURGE_EXAMPLES: (prefix) => `${prefix}purge 28`,
			PURGE_NEGATIVE_OR_NULL: "Vous ne pouvez pas supprimer un montant négatif ou nul de messages !",
			PURGE_SPECIFY_AMOUNT: "Tu dois spécifier un montant à supprimer!",
			PURGE_TOO_MUCH_AMOUNT: "Je ne peux pas supprimer plus de 100 messages d'un coup.",
			BAN_DESCRIPTION: "Bannit l'utilisateur mentionné",
			BAN_USAGE: (prefix) => `${prefix}ban (remove) [@user] (reason)`,
			BAN_EXAMPLES: (prefix) => `${prefix}ban @Lycos Spam\n ${prefix}ban remove `,
			BAN_ERRORARGS: "Merci d'indiquer un utilisateur à bannir !",
			BAN_ALREADY: "Cet utilisateur est déjà banni !",
			BAN_BANNABLE: "Je ne peux pas bannir cet utilisateur, veuillez vérifier ses rôles et ses permissions",
			BAN_NOREASON: "Merci d'indiquer une raison",
			BAN_ERROR: "Je ne peux ban car : ",
			BAN_INFO: (member, message) => `${member} a été banni(e) par ${message.author}`,
			UNBAN_INFO: (member, message) => `${member} a été débanni(e) par ${message.author}`,
			UNBAN_ERROR: "Je ne peux ban car : ",
			UNBAN_NOT_BANNED: "Cet utilisateur n'est pas banni !",
			UNBAN_DESCRIPTION: "Débannit l'utilisateur indiqué",
			UNBAN_USAGE: (prefix) => `${prefix}unban [UserID]`,
			UNBAN_EXAMPLES: (prefix) => `${prefix}unban 628186022991233025`,
			UNBAN_ERRORARGS: "Merci d'indiquer un utilisateur à débannir !",
			UNBAN_EMBED_TITLE: "Un membre a été débanni !",
			UNBAN_EMBED_DESC: (member, message) => `**Membre débanni :** ${member.displayName} - ${member} - ${member.user.id}
**Débanni par :** ${message.member.displayName} - ${message.author} - ${message.author.id}`,
			KICK_DESCRIPTION: "Expulse l'utilisateur mentionné",
			KICK_USAGE: (prefix) => `${prefix}kick [@user] (reason)`,
			KICK_EXAMPLES: (prefix) => `${prefix}kick @Lycos Spam`,
			KICK_ERRORARGS: "Merci d'indiquer un utilisateur!",
			KICK_KICKABLE: "Je ne peux pas expulser cet utilisateur, veuillez vérifier ses rôles et ses permissions",
			KICK_NOREASON: "Merci d'indiquer une raison",
			KICK_ERROR: "Je n'ai pas pu expulser l'utilisateur car: ",
			KICK_INFO: (member, message) => `${member} a été expulsé(e) par ${message.author}`,
			KICK_EMBED_TITLE: "Un membre a été explulsé du serveur !",
			KIKC_EMBED_DESC: (member, reason, message) => `**Membre expluslé :** ${member.displayName} - ${member.user.id}
**Explulsé par :** ${message.member.displayName} - ${message.author} - ${message.author.id}
**Raison :** ${reason}
**Le :** ${moment(new Date()).format("LLLL")}`,
			FUCKMYLIFE_DESCRIPTION: "Histoires marrantes sur la vie de tous les jours",
			FUCKMYLIFE_USAGE: (prefix) => `${prefix}fuck-my-life | ${prefix}fml`,
			FUCKMYLIFE_EXAMPLES: (prefix) => `${prefix}fuck-my-life | ${prefix}fml`,
			NSFW_URL: "Si l'image ne s'affiche pas cliquez ici.",
			WEATHERINFO_DESCRIPTION: "Affiche la météo de la ville demandée",
			WEATHERINFO_USAGE: (prefix) => `${prefix}weather-info [Nom/Code Postal]`,
			WEATHERINFO_EXAMPLES: (prefix) => `${prefix}weather-info Paris`,
			WEATHERINFO_NO_CITY: "merci d'indiquer un nom de ville ou un code postal.",
			WEATHERINFO_NOT_FOUND: "Impossible de trouver les données météo pour cette ville.",
			WEATHER_LANGUAGE: "fr-FR",
			WEATHERINFO_EMBED_TITLE_TODAY: (result) => `Météo de ${result[0].location.name} le ${result[0].current.day} ${date(result[0].current.date)} à ${result[0].current.observationtime}`,
			WEATHERINFO_EMBED_DESCRIPTION_TODAY: (result) => `**Météo :** ${result[0].current.skytext}
**Température :** ${result[0].current.temperature}°C
**Ressenti :** ${result[0].current.feelslike}°C
**Humidité :** ${result[0].current.humidity}%
**Vent :** ${result[0].current.winddisplay}`,
			WEATHERINFO_EMBED_TITLE_YESTERDAY: (result) => `Météo de ${result[0].location.name} le ${result[0].forecast[0].day} ${date(result[0].forecast[0].date)}.`,
			WEATHERINFO_EMBED_DESCRIPTION_YESTERDAY: (result) => `**Température Max/Min** : ${result[0].forecast[0].high}°C/${result[0].forecast[0].low}°C
**Météo :** ${result[0].forecast[0].skytextday}
**Précipitations :** ${result[0].forecast[0].precip !== "" ? `${result[0].forecast[0].precip}` : `0`}%`,
			WEATHERINFO_EMBED_TITLE_TOMORROW: (result) => `Météo de ${result[0].location.name} le ${result[0].forecast[1].day} ${date(result[0].forecast[1].date)}.`,
			WEATHERINFO_EMBED_DESCRIPTION_TOMORROW: (result) => `**Température Max/Min** : ${result[0].forecast[1].high}°C/${result[0].forecast[1].low}°C
**Météo :** ${result[0].forecast[1].skytextday}
**Précipitations :** ${result[0].forecast[1].precip}%`,
			WEATHERINFO_EMBED_TITLE_J2: (result) => `Prévisions météo de ${result[0].location.name} le ${result[0].forecast[2].day} ${date(result[0].forecast[2].date)}.`,
			WEATHERINFO_EMBED_DESCRIPTION_J2: (result) => `**Température Max/Min** : ${result[0].forecast[2].high}°C/${result[0].forecast[2].low}°C
**Météo :** ${result[0].forecast[2].skytextday}
**Précipitations :** ${result[0].forecast[2].precip}%`,
			WEATHERINFO_EMBED_TITLE_J3: (result) => `Prévisison météo de ${result[0].location.name} le ${result[0].forecast[3].day} ${date(result[0].forecast[3].date)}.`,
			WEATHERINFO_EMBED_DESCRIPTION_J3: (result) => `**Température Max/Min** : ${result[0].forecast[3].high}°C/${result[0].forecast[3].low}°C
**Météo :** ${result[0].forecast[3].skytextday}
**Précipitations :** ${result[0].forecast[3].precip}%`,
			WEATHERINFO_EMBED_TITLE_J4: (result) => `Prévisions météo de ${result[0].location.name} le ${result[0].forecast[4].day} ${date(result[0].forecast[4].date)}.`,
			WEATHERINFO_EMBED_DESCRIPTION_J4: (result) => `**Température Max/Min** : ${result[0].forecast[4].high}°C/${result[0].forecast[4].low}°C
**Météo :** ${result[0].forecast[4].skytextday}
**Précipitations :** ${result[0].forecast[4].precip}%`,
			WEATHERINFO_EMBED_FOOTER: (result) => `Coordonnées - Longitude : ${result[0].location.long} - Latitude : ${result[0].location.lat} | Zone horaire : UTC${result[0].location.timezone >= 0 ? `+${result[0].location.timezone}` : `${result[0].location.timezone}`}`,
			WIKIPEDIA_DESCRIPTION: "Cherche une page wikipédia",
			WIKIPEDIA_USAGE: (prefix) => `${prefix}wikipedia [Nom]`,
			WIKIPEDIA_EXAMPLES: (prefix) => `${prefix}wikipedia Batman`,
			WIKI_NO_SEARCH: "Vous devez indiquer le nom de la page à chercher !",
			WIKI_ERROR: (e) => `Erreur : ${e.toString().includes("Error: No article found") ? "Page non trouvée" : e}`,
			RPS_DESCRIPTION: "Jeu de pierre, feuille, ciseaux",
			RPS_USAGE: (prefix) => `${prefix}rps [pierre/feuille/ciseaux]`,
			RPS_EXAMPLES: (prefix) => `${prefix}rps pierre`,
			RPS_LYCOS_CHOICE: (choixO) => `Choix de Lycos : ${choixO}`,
			RPS_MATCH_EQUAL: `:flag_white: | Match nul !`,
			RPS_PLAYER_WIN: (message) => `:dagger: | Victoire de ${message.author.username} !`,
			RPS_LYCOS_WIN: `:skull_crossbones: | Victoire de Lycos !`,
			RPS_CHOICES: "Choisissez entre `pierre`, `feuille` et `ciseaux`",
			RPS_CHOICES_ARRAY: ["pierre", "feuille", "ciseaux"],
			RPS_ROCK: "pierre",
			RPS_PAPER: "feuille",
			RPS_SCISSORS: "ciseaux",
			/* Support */
			SUPPORT_DESCRIPTION: "Permet de contacter le support du bot en cas de problème",
			SUPPORT_USAGE: (prefix) => `${prefix}support [Problème]`,
			SUPPORT_EXAMPLES: (prefix) => `${prefix}support Bonjour, j'ai cru trouver un bug dans votre bot. `,
			SUPPORT_NO_ARGS: "Veuillez décrire votre problème avec au moins 10 caractères et 1900 au maximum.",
			SUPPORT_QUESTION_SEND: "Votre question a été envoyée au support. Veuillez attendre une réponse.",
			/* Update */
			UPDATE_DESCRIPTION: "Montre les dernières notes de mise à jour.",
			UPDATE_USAGE: (prefix) => `${prefix}update`,
			UPDATE_EXAMPLES: (prefix) => `${prefix}update`,
			UPDATE_TITLE: (version) => `Notes de mise à jour | Version ${version}`,
			UPDATE_ADD: `**•** Ajout de la commande \`lycos-suggestion\`.
			**•** Ajout de la commande \`setsuggestions\`.`,
			UPDATE_UPDATE: `**•** Modification de la commande \`suggestion\` : Elle envoie la suggestion dans le salon de suggestion du serveur où elle a été tapée.
			**•** Corrections de fautes de langage.
			**•** Correction du bug qui permettait de verrouiller ou de déverrouiler un salon plusieurs fois alors que celui-ci l'était déjà
			**•** Correction du bug dans la commande \`giveaway\`, qui permettait de mettre un nombre négatif de gagnants. 
			**•** Correction du bug dans la commande \`giveaway\`, où le bot ne réagissait pas lorsque l'on mettait n'importe quoi comme durée ou une durée trop grande.`,
			UPDATE_REMOVE: "",
			/* Suggestion */
			SUGGESTION_DESCRIPTION: "Permet de faire une suggestion par rapport au bot",
			SUGGESTION_USAGE: (prefix) => `${prefix}suggestion [Suggestion]`,
			SUGGESTION_EXAMPLES: (prefix) => `${prefix}suggestion Bonjour, vous pourriez créer une commande de suggestion qui envoie la suggestion dans un salon du serveur Lycos Novation - Support. `,
			SUGGESTION_NO_ARGS: "Veuillez décrire votre suggestion avec au moins 10 caractères et 1900 au maximum.",
			SUGGESTION_QUESTION_SEND: "Votre suggestion a été envoyée ! Merci pour votre contribution !",
			NUMBER_DESCRIPTION: "Tire un nombre aléatoire dans un intervalle donné (Min et max inclus : [min;max])",
			NUMBER_USAGE: (prefix) => `${prefix}number [min] [max] [temps]`,
			NUMBER_EXAMPLES: (prefix) => `${prefix}number 1 50 1[d/m/h/s]`,
			NUMBER_MIN: "Vous devez indiquer le nombre minimal de l'intervalle de recherche. Celui-ci ne peut pas être 0",
			NUMBER_MAX: "Vous devez indiquer le nombre maximal de l'intervalle de recherche. Celui-ci ne peut pas être 0",
			NUMBER_MIN_LOWER: "Le nombre minimal de l'intervalle de recherche ne peut pas être plus petit que le nombre maximal !",
			NUMBER_TIME: "Vous devez indiquer la durée de la recherche.",
			NUMBER_START: (min, max, time) => `C'est parti ! Vous avez ${time} pour trouver un nombre (entier) entre ${min} et ${max} ([${min};${max}]).`,
			NUMBER_INTERVAL: (min, max) => `Ce nombre n'est pas dans l'intervalle de recherche, le nombre à trouver est entre ${min} et ${max} ([${min};${max}]).`,
			NUMBET_HIGHER: "C'est plus !",
			NUMBER_LOWER: "C'est moins !",
			NUMBER_WINNER: (author) => `Bravo à ${author} qui a touvé le bon nombre !`,
			NUMBER_END: (collected) => `C'est terminé ! Il y a eu ${collected.size} tentatives lors de cette partie.`,
			NUMBER_ANSWER: (toFind) => `Le nombre à trouver est **${toFind}**.`,
			BLAGUE_DESCRIPTION: "Raconte une blague",
			BLAGUE_USAGE: (prefix) => `${prefix}blague`,
			BLAGUE_EXAMPLES: (prefix) => `${prefix}blague`,
			BLAGUE_NOT_AVALIABLE: "Cette commande n'est pas encore disponible dans votre langue.",
			BLAGUE_QUESTION: "Question",
			BLAGUE_ANSWER: "Réponse",
			BLAGUE_FOOTER: (type, id) => `Type : ${type}, ID : ${id}`,
			MORSE_DESCRIPTION: "Traduit un message en morse",
			MORSE_USAGE: (prefix) => `${prefix}morse [Message]`,
			MORSE_EXAMPLES: (prefix) => `${prefix}morse [Message]`,
			MORSE_NO_TEXT: "Vous devez indiquer un message à traduire ! Répondez par ce message ou tapez à nouveau la commande avec votre message.",
			MORSE_CANT_TRANSLATE: "Désolé, je n'ai pas pu traduire votre message. Assurez-vous qu'il ne comporte pas de caractères spéciaux.",
			MORSE_TRANSLATE_ESPACE: "Désolé, il y a plus de 2000 caractères qui se suivent sans espace, je ne peut donc pas envoyer la traduction sans la fausser...",
			MEME_DESCRIPTION: "Envoie un même",
			MEME_USAGE: (prefix) => `${prefix}meme`,
			MEME_EXAMPLES: (prefix) => `${prefix}meme`,
			SAY_DESCRIPTION: "Fait parler le bot",
			SAY_USAGE: (prefix) => `${prefix}say [Texte]`,
			SAY_EXAMPLES: (prefix) => `${prefix}say Bonjour je m'appelle Lycos !`,
			SAY_NO_ARGS: "Vous devez écrire un message à envoyer !",
			SAY_TOO_LONG: "Votre message est trop long !",
			SAY_EVERYONE: "Vous ne pouvez pas mentionner ``everyone`` !",
			SAY_EMBED_DESCRIPTION: "Fait parler le bot dans un embed",
			SAY_EMBED_USAGE: (prefix) => `${prefix}sayembed [Texte]`,
			SAY_EMBED_EXAMPLES: (prefix) => `${prefix}sayembed Bonjour je m'appelle Lycos !`,
			REPORT_DESCRIPTION: "Permet de signaler un membre",
			REPORT_USAGE: (prefix) => `${prefix}report [@User/ID] [Raison]`,
			REPORT_EXAMPLES: (prefix) => `${prefix}report @Lycos Ce membre s'amuse à spam dans les salons`,
			REPORT_NOT_SET: "Le salon de réception des signalements n'a pas été défini, la commande est donc désactivée.",
			REPORT_NOREASON: "Vous devez indiquer une raison à votre signalement.",
			REPORT_SAMEUSER: "Vous ne pouvez pas vous signaler vous-même.",
			REPORT_TITLE: "Signalement de ",
			REPORT_NAME: (member) => `${member.user.tag} a été signalé pour :`,
			REPORT_ERRORARGS: "Vous devez indiquer une personne à signaler !",
			REPORT_SEND: "Votre signalement a été envoyé !",
			/* Global music*/
			NOT_PLAYING: "Aucune musique n'est en cours de lecture.",
			/* Play */
			PLAY_DESCRIPTION: "Joue la musique demandée. (Supporte les noms de musiques, les liens YouTube & les Playlists ainsi que les liens Spotify)",
			PLAY_USAGE: (prefix) => `${prefix}play [Musique/Lien]`,
			PLAY_EXAMPLES: (prefix) => `${prefix}play Our Last Night - Younger Dreams\n${prefix}play https://www.youtube.com/watch?v=EM7CJcfZbpM\n${prefix}play https://open.spotify.com/track/3YU9WNqpBjG3uI59NEQUH5?si=MVwzgB8DSDye9abZ5gihCw`,
			PLAY_NO_VOICECHANNEL: "Vous devez être dans un salon vocal pour jouer de la musique",
			PLAY_NO_ARGS: "Veuillez indiquer une musique à jouer",
			PLAY_NO_TRACK_FOUND: "Désolé, je n'ai rien trouvé sur YouTube correspondant à",
			PLAY_CHOICE: "Envoyez le numéro de la musique que vous voulez jouer",
			PLAY_INVALID_NUMBER: "Vous devez envoyer un nombre compris entre 1 et",
			PLAY_INVALID_ANSWER: "Je n'ai pas compris votre réponse... veuillez renvoyer la commande !",
			PLAY_SONGS_ADDED: "musiques ajoutées",
			PLAY_SONG_ADDED: "a été ajouté à la queue !",
			PLAY_END: "Il n'y a plus de musique dans la queue !",
			PLAY_SKIPPED: (track) => `\`${track}\` a été passéé !`,
			PLAY_AGAIN: (track) => `Et zé partiiii pour jouer \`${track}\`... ENCORE ?!`,
			PLAY_NEWPLAY: (track) => `Vous écoutez désormais \`${track}\`.`,
			PLAY_CHANNEL_EMPTY: "Plus personne ne m'écoute, j'ai donc décidé de me déconnecter.",
			PLAY_MISSING_PERMS: "Je n'ai pas pu rejoindre votre salon vocal, veuillez vérifier mes permissions.",
			/* Spotify */
			SPOTIFY_DESCRIPTION: "Joue la musique, album ou playlist demandé (Seulement les liens Spotify)",
			SPOTIFY_USAGE: (prefix) => `${prefix}spotify [Lien]`,
			SPOTIFY_EXAMPLES: (prefix) => `${prefix}spotify https://open.spotify.com/track/5v6rYV1jE6xHY3yzpu0m1H?si=4bLL6cF8TK6MQJKNrl5oZQ\n${prefix}spotify https://open.spotify.com/album/50uuwku9CNQJBPE26OoaUL?si=PeooA4Q3SBCf9zNIwVJQxw\n${prefix}spotify https://open.spotify.com/playlist/2tBoC3sUhNdWK1hsGGoU9y?si=Y-yRSGBaR_yQXQtjv45NcA`,
			SPOTIFY_NO_ARGS: "Vous devez indiquer le lien Spotify à lire ! (Musique, Album ou Playlist)",
			SPOTIFY_ALBUM_ADDING: "Ajout de l'album en cours, cette opération peut prendre quelques minutes.",
			SPOTIFY_PLAYLIST_ADDING: "Ajout de la playlist en cours, cette opération peut prendre quelques minutes.",
			NOT_SPOTIFY: "Ce lien n'est pas un lien Spotify !",
			/* Music-youtube */
			MUSIC_YOUTUBE_DESCRIPTION: "Joue la musique ou playlist demandée (Seulement les liens YouTube)",
			MUSIC_YOUTUBE_USAGE: (prefix) => `${prefix}musicyt [Lien]`,
			MUSIC_YOUTUBE_EXAMPLES: (prefix) => `${prefix}musicyt https://www.youtube.com/watch?v=YIAlVDLZJ_k\n${prefix}musicyt https://www.youtube.com/playlist?list=PL179D9EEB47465C35`,
			MUSIC_YOUTUBE_NO_ARGS: "Vous devez indiquer le lien YouTube à lire ! (Musique ou Playlist)",
			NOT_MUSIC_YOUTUBE: "Ce lien n'est pas un lien YouTube !",
			/* Now-Playing*/
			NOWPLAYING_DESCRIPTION: "Affiche la musique en cours de lecture",
			NOWPLAYING_USAGE: (prefix) => `${prefix}now-playing`,
			NOWPLAYING_EXAMPLES: (prefix) => `${prefix}now-playing`,
			NOWPLAYING: "En cours d'écoute",
			NOWPLAYING_MUSIC_NAME: "Nom de la musique",
			NOWPLAYING_ARTIST: "Artiste",
			NOWPLAYING_MUSIC_DURATION: "Durée de la musique",
			NOWPLAYING_PROGRESS_BAR: "Barre de progression",
			/* Clearqueue*/
			NOWPLAYING_DESCRIPTION: "Supprime les musiques dans la file d'attente",
			NOWPLAYING_USAGE: (prefix) => `${prefix}clear-queue`,
			NOWPLAYING_EXAMPLES: (prefix) => `${prefix}clear-queue`,
			CLEARQUEUE_CLEARED: "File d'attente supprimée !",
			/* Filters */
			FILTERS_DESCRIPTION: "Permet de gérer les filtres à appliquer à la musique.",
			FILTERS_USAGE: (prefix) => `${prefix}filters [list/filter]`,
			FILTERS_EXAMPLES: (prefix) => `${prefix}filters list\n ${prefix}filters bassboost`,
			FILTERS_NO_ARGS: "Vous devez indiquer un filtre à appliquer.\nVoici la liste :",
			FILTERS_FILTERS: "Filtres du serveur",
			FILTERS_NOT_EXISTS: "Ce filtre n'existe pas !\nVoici la liste :",
			FILTERS_ADDING: "Je suis en train d'ajouter le filtre à la musique, veuillez patienter... Note : plus la musique est longue, plus l'attente sera longue.",
			FILTERS_REMOVING: "Je suis en train de retirer le flitre de la musique, veuillez patienter... Note : plus la musique est longue, plus l'attente sera longue.",
			/* Stop */
			STOP_DESCRIPTION: "Stoppe la musique et déconnecte le bot.",
			STOP_USAGE: (prefix) => `${prefix}stop`,
			STOP_EXAMPLES: (prefix) => `${prefix}stop`,
			STOPPED: "La musique a été arrêtée.",
			/* Loop */
			LOOP_DESCRIPTION: "Active ou désactive le mode boucle.",
			LOOP_USAGE: (prefix) => `${prefix}loop`,
			LOOP_EXAMPLES: (prefix) => `${prefix}loop`,
			LOOP_UNLOOPING: "Mode boulce déactivé ! La musique actuelle ne sera plus jouée encore et encore...",
			LOOP_LOOPING: "Mode boulce activé ! La musique actuelle sera jouée encore et encore jusqu'à ce que vous fassiez à nouveau la commande !",
			/* Pause */
			PAUSE_DESCRIPTION: "Met en pause la musique actuelle.",
			PAUSE_USAGE: (prefix) => `${prefix}pause`,
			PAUSE_EXAMPLES: (prefix) => `${prefix}pause`,
			PAUSED: "a été mis en pause !",
			/* Queue */
			QUEUE_DESCRIPTION: "Affiche la file d'attente du serveur.",
			QUEUE_USAGE: (prefix) => `${prefix}queue`,
			QUEUE_EXAMPLES: (prefix) => `${prefix}queue`,
			QUEUE_ACTUAL: "File d'attente du serveur",
			QUEUE_EMPTY: "Il n'y a pas de musique dans la file d'attente.",
			/* Remove */
			REMOVE_DESCRIPTION: "Retire une musique de la file d'attente.",
			REMOVE_USAGE: (prefix) => `${prefix}remove [Numéro]`,
			REMOVE_EXAMPLES: (prefix) => `${prefix}remove 1`,
			REMOVE_NO_ARGS: "Veuillez indiquer le numéro de la musique a retirer ! Vous pouvez trouver ce numéro en faisant la commande `queue`",
			REMOVE_REMOVED: "Musique retirée !",
			/* Resume */
			RESUME_DESCRIPTION: "Reprend la musique en pause",
			RESUME_USAGE: (prefix) => `${prefix}resume`,
			RESUME_EXAMPLES: (prefix) => `${prefix}resume`,
			RESUMED: "a repri !",
			/* Shuffle */
			SHUFFLE_DESCRIPTION: "Mélange la file d'attente",
			SHUFFLE_USAGE: (prefix) => `${prefix}shuffle`,
			SHUFFLE_EXAMPLES: (prefix) => `${prefix}shuffle`,
			SHUFFLED: "La file d'attente a été mélangée !",
			/* Skip */
			SKIP_DESCRIPTION: "Passe la musique en cours d'écoute",
			SKIP_USAGE: (prefix) => `${prefix}skip`,
			SKIP_EXAMPLES: (prefix) => `${prefix}skip`,
			/* Volume */
			VOLUME_DESCRIPTION: "Permet de changer le volume du bot",
			VOLUME_USAGE: (prefix) => `${prefix}volume [Volume]`,
			VOLUME_EXAMPLES: (prefix) => `${prefix}volume 50`,
			VOLUME_BETWEEN: "Le volume doit être entre 1 et 100%.",
			VOLUME_SETTED: "🔊 Le volume a été mis sur",
			ANSWER_UNKNOWN_ID: (args) => `La demande de support avec l'ID \`${args}\` est introuvable.`,
			ANSWER_SENT: `Votre réponse a été envoyée avec succès.`,
			RELOAD_NO_COMMAND: "Vous devez indiquer une commande a reload",
			RELOAD_ERROR_UNLOADING: (response) => `Erreur déchargement : ${response}`,
			RELOAD_ERROR_LOADING: (response) => `Erreur chargement : ${response}`,
			RELOAD_COMMAND_RELOADED: (commandName) => `The command \`${commandName}\` has been reloaded`,
			RELOAD_COMMAND_DOESNT_EXIST: (args) => `The command \`${args[0]}\` doesn't seem to exist. Try again!`,
			ERROR_CREATING_ROLE: "Je n'ai pas pu créer le rôle ``muted``. Vérifiez que j'aie la permission requise !",
			/* Mute */
			MUTE_DESCRIPTION: "Mute le membre choisi",
			MUTE_USAGE: (prefix) => `${prefix}mute [@User ou UserID] [Durée] [Raison]`,
			MUTE_EXAMPLE: (prefix) => `${prefix}mute @Lycos 1d Spam emotes`,
			MUTE_ERRORARGS: "Merci d'indiquer un utilisateur à mute !",
			MUTE_NO_MUTETIME: "Tu n'as pas spécifié de temps !",
			MUTE_USER_ALREADY_MUTED: "Cet utilisateur est déjà mute !",
			MUTE_UNMUTABLE: "Cet utilisateur ne peut pas être mute !",
			MUTE_NOREASON: "Tu n'as pas indiqué de raison au mute !",
			MUTE_ERROR: "Je n'ai pas pu mute car :",
			MUTE_INFO: (member, message) => `${member} a été mute par ${message.author}`,
			MUTE_USER_MESSAGE: (message, muteTime, reason) => `Yo ! Tu es désormais mute sur **${message.guild.name}** pour **${reason}** pendant **${muteTime}**.`,
			MUTE_EMBED_TITLE: "Un membre a été rendu muet !",
			MUTE_EMBED_DESC: (member, message, muteTime, reason) => `**Membre rendu muet :** ${member.displayName} - ${member} - ${member.user.id}
**Rendu muet par :** ${message.member.displayName} - ${message.author} - ${message.author.id}
**Raison :** ${reason}
**Durée :** ${muteTime}
**Le :** ${moment(new Date()).format("LLLL")}`,
			MUTE_REMOVE_EMBED_DESC: (member, message) => `**Parole rendue à :** ${member.displayName} - ${member} - ${member.user.id}
**Parole rendue par :** ${message.member.displayName} - ${message.author} - ${message.author.id}
**Le :** ${moment(new Date()).format("LLLL")}`,
			/* Unmute */
			UNMUTE_DESCRIPTION: "Unmute le membre choisi",
			UNMUTE_USAGE: (prefix) => `${prefix}unmute [@User ou UserID]`,
			UNMUTE_EXAMPLE: (prefix) => `${prefix}unmute @Lycos`,
			UNMUTE_USER_NOT_MUTED: "Ce membre n'est pas mute !",
			UNMUTE_ERRORARGS: "Merci d'indiquer un utilisateur à unmute !",
			UNMUTE_SUCCESS: (member) => `${member} a été unmute avec succès !`,
			UNMUTE_USER_SUCCESS: (message) => `Tu as été unmute de **${message.guild.name}**, désolé du dérangement !`,
			UNMUTE_ERROR: "Je n'ai pas pu unmute car :",
			UNMUTE_EMBED_TITLE: "Un membre s'est vu rendre la parole !",
			UNMUTE_EMBED_DESC: (member) => `**Parole rendue à :** ${member.displayName} - ${member} - ${member.user.id}
**Parole rendue automatiquement**`,
			/* Voicemute */
			VOICEMUTE_DESCRIPTION: "Mute vocalement le membre choisi",
			VOICEMUTE_USAGE: (prefix) => `${prefix}voicemute [@User ou UserID] [Durée] [Raison]`,
			VOICEMUTE_EXAMPLE: (prefix) => `${prefix}voicemute @Lycos 1d Spam emotes`,
			/* Unvoicemute */
			UNVOICEMUTE_DESCRIPTION: "Unmute vocalement le membre choisi",
			UNVOICEMUTE_USAGE: (prefix) => `${prefix}unmute [@User ou UserID]`,
			UNVOICEMUTE_EXAMPLE: (prefix) => `${prefix}unmute @Lycos`,
			/* Clear */
			CLEAR_DESCRIPTION: "Supprime tous les message du le salon",
			CLEAR_USAGE: (prefix) => `${prefix}clear`,
			CLEAR_EXAMPLE: (prefix) => `${prefix}clear`,
			/* Lock */
			LOCK_DESCRIPTION: "Verrouille le salon",
			LOCK_USAGE: (prefix) => `${prefix}lock`,
			LOCK_EXAMPLE: (prefix) => `${prefix}lock`,
			ALREADY_LOCKED: "Le salon est déjà verouillé.",
			LOCKED: "**⚠️ __ATTENTION__ | Le salon a été verouillé, il n'est plus possible d'y parler pour le moment.**",
			/* Unlock */
			UNLOCK_DESCRIPTION: "Dérverouille le salon",
			UNLOCK_USAGE: (prefix) => `${prefix}lock`,
			UNLOCK_EXAMPLE: (prefix) => `${prefix}lock`,
			NOT_LOCKED: "Le salon n'est pas verouillé.",
			UNLOCKED: "Le salon a été déverouillé, il est à nouveau possible d'y parler.",
			/* Rolemention */
			ROLEMENTION_DESCRIPTION: "Mentionne le rôle demandé",
			ROLEMENTION_USAGE: (prefix) => `${prefix}rolemention [ID/Nom]`,
			ROLEMENTION_EXAMPLES: (prefix) => `${prefix}rolemention 627956962008629279\n${prefix}rolemention Developers`,
			ROLEMENTION_ROLE_NOT_FOUND: "Aucun rôle trouvé",
			ROLEMENTION_ROLE_HIGHEST: "Ce rôle est supérieur au mien, je ne peux donc pas le mentionner.",
			ROLEMENTION_NOARGS: "Répondez avec l'id du rôle à mentionnner (Si everyone ou here, répondez juste par everyone ou here).",
			EMOTES_DESCRIPTION: "Donne la liste des emojis du serveur",
			EMOTES_USAGE: (prefix) => `${prefix}emotes`,
			EMOTES_EXAMPLES: (prefix) => `${prefix}emotes`,
			EMOTES_TITLE: "Liste des émojis du serveur",
			EMOTES_TITLES: [
				"Émojis",
				"Émojis animés"
			],
			EMOTES_DESC: (message) => `Le serveur possède actuellement **${message.guild.emojis.cache.size}** émojis :`,
			EMOTES_NO_EMOTES: "Il n'y a pas d'émojis sur ce serveur",
			EMOTES_NO_ANIMATED: "Il n'y a pas d'émoji animé sur ce serveur",
			MEMBERCOUNT_DESCRIPTION: "Crée un compteur de membres",
			MEMBERCOUNT_USAGE: (prefix) => `${prefix}membercount [channel/category/delete]`,
			MEMBERCOUNT_EXAMPLES: (prefix) => `${prefix}membercount channel\n ${prefix}membercount category Lycos Novation : {membercount} membres`,
			MEMBERCOUNT_NO_METHOD: "Veuillez indiquer dans quoi voulez-vous faire apparaître votre compteur : channel/category. Vous pouvez ajouter le nom que vous voulez donner au salon en utilisant ``{membercount}`` là où vous voulez que le nombre de membres apparaîsse dans le nom de votre salon.",
			MEMBERCOUNT_MEMBERS: "membres",
			MEMBERCOUNT_UNVALID_METHOD: "Je n'ai pas compris dans quoi vous souhaitez faire apparaître votre compteur : channel/category",
			MEMBERCOUNT_CREATED: "Le compteur de membres a été créé !",
			MEMBERCOUNT_DELETED: "Le compteur de membre a été supprimé !",
			CONFIG_DESCRIPTION: "Affiche la configuration du bot sur le serveur.",
			MEMBERCOUNT_NOT_EXISTS: "Le compteur de membres n'a pas encore été créé sur ce serveur !",
			MEMBERCOUNT_TOO_MUCH_CHANNELS: "Le nombre maximal de salons a déjà été atteint sur ce serveur ! Veuillez en supprimer un pour la création du compteur de membres.",
			CONFIG_USAGE: (prefix) => `${prefix}config`,
			CONFIG_EXAMPLES: (prefix) => `${prefix}config`,
			CONFIG_TITLE: (g) => `Configuration de Lycos sur ${g.guild_name}`,
			CONFIG_FIELDS: [
				"Langue du bot",
				"Préfixe du bot",
				"Autorôle",
				"Salon des arrivées",
				"Salon des départs",
				"Salon d'affichage des logs",
				"Salon d'affichage des logs de modération",
				"Salon d'affichage des signalements",
				"Salon d'annonce des streams",
				"Liste des streamers suivis sur le serveur"
			],
			CONFIG_VALUES: (g) => [
				`${g.welcome_channel === null ? "Aucun salon n'a été défini" : `<#${g.welcome_channel}>`}`,
				`${g.leave_channel === null ? "Aucun salon n'a été défini" : `<#${g.leave_channel}>`}`,
				`${g.logs_channel === null ? "Aucun salon n'a été défini" : `<#${g.logs_channel}>`}`,
				`${g.modlogs_channel === null ? "Aucun salon n'a été défini" : `<#${g.modlogs_channel}>`}`,
				`${g.reports_channel === null ? "Aucun salon n'a été défini" : `<#${g.reports_channel}>`}`,
				`${g.twitch_channel === null ? "Aucun salon n'a été défini" : `<#${g.twitch_channel}>`}`,
			],
			AUTOROLE_DESCRIPTION: "Permet la gestion des rôles ajoutés lors de l'arrivée d'un nouveau membre",
			AUTOROLE_USAGE: (prefix) => `${prefix}autorole [add/remove] [@Role/ID]`,
			AUTOROLE_EXAMPLES: (prefix) => `${prefix}autorole add @Role\n${prefix}autorole remove 699011821654507572`,
			AUTOROLE_NO_ARGS: (g, text) => `${JSON.parse(g.autorole).length === 0 ? `Il n'y a actuellement aucun rôle d'attirbué aux membres lors de leur arrivée sur le serveur.` : `Il y a actuellement ${JSON.parse(g.autorole).length} ${JSON.parse(g.autorole).length === 1 ? `rôle attribué` : `rôles attribués`} aux membres lors de leur arrivée :\n${text}`}\nRépondez par \`\`add\`\` pour ajouter un rôle de l'autorole.\nRépondez par \`\`remove\`\` pour retirer un rôle de l'autorole`,
			AUTOROLE_SUPPLY_METHOD: "Répondez par \`\`add\`\` pour ajouter un rôle de l'autorole.\nRépondez par \`\`remove\`\` pour retirer un rôle de l'autorole.",
			AUTOROLE_SUPPLY_ROLE: "Répondez par l'ID du rôle, ou en le mentionnant.",
			AUTOROLE_BAD_METHOD: (g) => `Je n'ai pas compris ce que vous vouliez faire.\nVeuillez recommencer la commande.`,
			AUTOROLE_NO_ROLE: "Veuillez préciser un rôle à ajouter ou retirer !",
			AUTOROLE_ALREADY_IN: "Ce rôle fait déjà parti de l'autorole !",
			AUTOROLE_NOT_IN: "Ce rôle ne fait pas parti de l'autorole !",
			AUTOROLE_ROLE_NOT_FOUND: "Je n'ai pas trouvé le rôle que vous avez demandé.",
			AUTOROLE_ROLE_ADDED: (r) => `Le rôle <@&${r}> a été ajouté à l'autorole !`,
			AUTOROLE_ROLE_REMOVED: (r) => `Le rôle <@&${r}> a été retiré de l'autorole !`,
			AUTOROLE_LIMIT: "Vous avez atteint la limite de rôles attribuables dans l'autorôle. Veuillez en retirer si vous voulez en mettre de nouveaux.",//Ajouter "Vous pouvez augmentez cette limite en passant sur la version premium du bot"
			AUTOROLE_ROLE_BOT: "Vous ne pouvez pas utiliser le rôle d'un bot dans l'autorôle !",
			RR_DESCRIPTION: "Permet de configurer le rolereaction",
			RR_USAGE: (prefix) => `${prefix}rolereaction [launch/add/remove] [emote] [Role]`,
			RR_EXAMPLES: (prefix) => `${prefix}rolereaction add :lycos: @LycosRole\n ${prefix}rolereaction remove :lycos: @LycosRole\n ${prefix}rolereaction launch`,
			RR_SUPPLY_METHOD: "Veuillez préciser ce que vous voulez faire. Répondez avec launch, add ou remove",
			RR_EMPTY: "Le role reaction est vide, veuillez ajouter des roles pour pouvoir l'initialiser.",
			RR_SUPPLY_EMOTE: "Veuillez indiquer l'emote à ajouter",
			RR_SUPPLY_NAME: "Veuillez indiquer le rôle à associer à l'emote",
			RR_EMOTE_ALREADY_IN: "Cet emote est déjà dans le role reaction",
			RR_ROLE_ALREADY_IN: "Ce rôle est déjà dans le role reaction",
			RR_LIMIT: "Vous avez atteint la limite de 30 rôles dans le role reaction.",
			RR_NOT_IN: "Ce rôle ou cet emoji n'est pas dans le role reaction.",
			RR_BAD_METHOD: "Je n'ai pas compris ce que vous vouliez faire. Veuillez recommencer.",
			RR_ROLE_ADDED: "Rôle ajouté dans le role reaction.",
			RR_ROLE_REMOVED: "Le rôle a été retiré du role reaction !",
			RR_NO_CHANNEL: "Veuillez paramétrer un salon pour le rolereaction au préalable. (Voir commmande setnotif)",
			RR_SUPPLY_DESCRIPTION: "Veuillez founir une courte description du rôle. Vous ne pouvez pas utilier le caractère `/` dans votre description.",
			RR_ERROR_DESC: "L'utilisation du caratère `/` est réservée à un usage système. Veuillez recommencer.",
			RR_EMBED_FOOTER: "Cliquez sur les réactions ci-dessous",
			RR_EMBED_TITLE: "Rôle Réaction",
			RR_EMBED_DESC: "Cliquez sur la réaction correspondant au rôle que vous souhaitez avoir",
			RR_EMBED_FIELD: "Liste des rôles :",
			RR_ADD_USER: (g, r) => `> <:lycosV:631854492173991947> **${g}** | Rôle donné : ${r.name}`,
			RR_REMOVE_USER: (g, r) => `> <:lycosX:631854509798326322> **${g}** | Rôle enlevé : ${r.name}`,
			RR_ROLE_BOT: "Vous ne pouvez pas utiliser le rôle d'un bot dans le rôle réaction !",
			/* Setsuggestion */
			SETSUGGESTION_DESCRIPTION: "Permet la sélection du salon d'affichage des suggestions.",
			SETSUGGESTION_USAGE: (prefix) => `${prefix}setlogs [#channel/ID]`,
			SETSUGGESTION_EXAMPLES: (prefix) => `${prefix}setlogs #suggestion`,
			SETSUGGESTION_NO_ARGS: (g) => `${g.suggestions_channel === null || g.suggestions_channel === "" ? `Il n'y a actuellement aucun salon d'affichage des suggestions.` : `Le salon d'affichage des suggestions est actuellement <#${g.suggestions_channel}>.`}\nRépondez en mentionnant le salon ou en indiquant son ID afin d'en faire le salon d'affichage des suggestions.`,
			SETSUGGESTION_SAME: (c) => `<#${c}> est déjà le salon d'affichage des suggestions.`,
			SETSUGGESTION_SUCCESS: (c) => `Les suggestions seront désormais affichées dans le salon <#${c}>.`,
			SETSUGGESTION_NOT_TEXT: "Le salon demandé n'est pas un salon textuel !",
			SUGGESTION_NOT_SET: "Le salon des suggestion n'est pas défini, je ne peux pas envoyer votre suggestion.",
			/* Setlogs */
			SETLOGS_DESCRIPTION: "Permet la sélection du salon d'affichage des logs.",
			SETLOGS_USAGE: (prefix) => `${prefix}setlogs [#channel/ID]`,
			SETLOGS_EXAMPLES: (prefix) => `${prefix}setlogs #logs`,
			SETLOGS_NO_ARGS: (g) => `${g.logs_channel === null || g.logs_channel === "" ? `Il n'y a actuellement aucun salon d'affichage des logs.` : `Le salon d'affichage des logs est actuellement <#${g.logs_channel}>.`}\nRépondez en mentionnant le salon ou en indiquant son ID afin d'en faire le salon d'affichage des logs.`,
			SETLOGS_SAME: (c) => `<#${c}> est déjà le salon d'affichage des logs.`,
			SETLOGS_SUCCESS: (c) => `Les logs seront désormais affichées dans le salon <#${c}>.`,
			SETLOGS_ERROR_CHANNEL: "Je n'ai pas pu trouver le salon demandé, veuillez réessayer.",
			SETJOIN_DESCRIPTION: "Permet la sélection du salon d'annonce de l'arrivée d'un nouveau membre",
			SETJOIN_USAGE: (prefix) => `${prefix}setjoin [#channel/ID]`,
			SETJOIN_EXAMPLES: (prefix) => `${prefix}setjoin #arrivées`,
			SETJOIN_NO_ARGS: (g) => `${g.welcome_channel === null || g.welcome_channel === "" ? `Il n'y a actuellement aucun salon d'affichage des arrivées.` : `Le salon d'affichage des arrivées est actuellement <#${g.welcome_channel}>.`}\nRépondez en mentionnant le salon ou en indiquant son ID afin d'en faire le salon d'affichage des arrivées.`,
			SETJOIN_SAME: (c) => `<#${c}> est déjà le salon d'affichage des arrivées.`,
			SETJOIN_SUCCESS: (c) => `Les arrivées seront désormais affichées dans le salon <#${c}>.`,
			SETLEAVE_DESCRIPTION: "Permet la sélection du salon d'annonce du départ d'un membre",
			SETLEAVE_USAGE: (prefix) => `${prefix}setleave [#channel/ID]`,
			SETLEAVE_EXAMPLES: (prefix) => `${prefix}setleave #départs`,
			SETLEAVE_SUPPLY: (g) => `${g.leave_channel === null || g.leave_channel === "" ? `Il n'y a actuellement aucun salon d'affichage des départs.` : `Le salon d'affichage des départs est actuellement <#${g.leave_channel}>.`}\nRépondez en mentionnant le salon ou en indiquant son ID afin d'en faire le salon d'affichage des départs.`,
			SETLEAVE_SAME: (c) => `<#${c}> est déjà le salon d'affichage des départs.`,
			SETLEAVE_SUCCESS: (c) => `Les départs seront désormais affichées dans le salon <#${c}>.`,
			SETREPORTS_DESCRIPTION: "Permet la sélection du salon d'affichage des signalements.",
			SETREPORTS_USAGE: (prefix) => `${prefix}setreports [#channel/ID]`,
			SETREPORTS_EXAMPLES: (prefix) => `${prefix}setreports #reports`,
			SETREPORTS_NO_ARGS: (g) => `${g.reports_channel === null || g.reports_channel === "" ? `Il n'y a actuellement aucun salon d'affichage des signalements.` : `Le salon d'affichage des signalements est actuellement <#${g.reports_channel}>.`}\nRépondez en mentionnant le salon ou en indiquant son ID afin d'en faire le salon d'affichage des signalements.`,
			SETREPORTS_SAME: (c) => `<#${c}> est déjà le salon d'affichage des signalements.`,
			SETREPORTS_SUCCESS: (c) => `Les signalements seront désormais affichées dans le salon <#${c}>.`,
			SETREPORTS_NOT_TEXT: "Le salon demandé n'est pas un salon textuel !",
			SETNOTIF_DESCRIPTION: "Permet la sélection du salon du reaction role.",
			SETNOTIF_USAGE: (prefix) => `${prefix}setnotif [#channel/ID]`,
			SETNOTIF_EXAMPLES: (prefix) => `${prefix}setnotif #rolereaction`,
			SETNOTIF_NO_ARGS: (g) => `${g.rolereaction_channel === null || g.rolereaction_channel === "" ? `Il n'y a actuellement aucun salon pour le RoleReaction.` : `Le salon du RoleReaction est actuellement <#${g.rolereaction_channel}>.`}\nRépondez en mentionnant le salon ou en indiquant son ID afin d'en faire le salon du role reaction.`,
			SETNOTIF_SAME: (c) => `<#${c}> est déjà le salon du RoleReaction.`,
			SETNOTIF_SUCCESS: (c) => `Le RoleReaction sera dans le salon <#${c}>.`,
			SETMODLOGS_DESCRIPTION: "Permet la sélection du salon d'affichage des logs de modération.",
			SETMODLOGS_USAGE: (prefix) => `${prefix}setmodlogs [#channel/ID]`,
			SETMODLOGS_EXAMPLES: (prefix) => `${prefix}setmodlogs #mod-logs`,
			SETMODLOGS_NO_ARGS: (g) => `${g.modlogs_channel === null || g.modlogs_channel === "" ? `Il n'y a actuellement aucun salon d'affichage des logs de modération.` : `Le salon d'affichage des logs de modération est actuellement <#${g.modlogs_channel}>.`}\nRépondez en mentionnant le salon ou en indiquant son ID afin d'en faire le salon d'affichage des logs de modération.`,
			SETMODLOGS_SAME: (c) => `<#${c}> est déjà le salon d'affichage des logs de modération.`,
			SETMODLOGS_SUCCESS: (c) => `Les logs de modération seront désormais affichées dans le salon <#${c}>.`,
			SETTWITCH_DESCRIPTION: "Permet de gérer l'annonce des streams, `channel` pour le salon et `message` pour le message d'annonce",
			SETTWITCH_USAGE: (prefix) => `${prefix}settwitch [channel/message]. Mettez \`{streamer}\` là où vous voulez que le nom du streamer apparaisse dans le \`message\`.`,
			SETTWITCH_EXAMPLES: (prefix) => `${prefix}settwitch channel #streams\n${prefix}settwitch message Hey @everyone ! {streamer} vient de lancer un nouveau stream !`,
			SETTWITCH_NO_ARGS: (g) => `${g.twitch_channel === null || g.twitch_channel === "" ? `Il n'y a actuellement aucun salon d'annonce des lives Twitch` : `Le salon d'annonce des lives Twitch est actuellement <#${g.twitch_channel}>.`}\nRépondez en mentionnant le salon ou en indiquant son ID afin d'en faire le salon d'annonce des lives Twitch.`,
			SETTWITCH_SAME: (c) => `<#${c}> est déjà le salon d'annonce des lives twitch.`,
			SETTWITCH_SUCCESS: (c) => `Les lives Twitch seront désormais annoncés dans le salon <#${c}>.`,
			SETTWITCH_NO_MODIFY: "Merci d'indiquer ce que vous voulez changer : ``channel`` ou ``message``.",
			SETTWITCH_BAD_MODIFY: "Je n'ai pas compris ce que vous vouliez changer. Veuillez réessayer.",
			SETTWTICH_NO_MSG: "Veuillez indiquer le message que vous souhaitez envoyer lors de l'annonce des stream. Mettez `{streamer}` à l'endoit où vous voulez que le nom du streamer apparaisse.",
			SETTWITCH_MSG_LENGHT: "L'annonce des streams doit faire entre 1 et 1500 caractères !",
			SETTWITCH_SAME_MSG: "Le message d'annonce est déjà celui-ci !",
			SETTWITCH_NEW_MSG: (annonce) => `Le nouveau message d'annonce des streams est \`${annonce}\`.`,
			SETTWITCH_ERROR_MODIFY: "Erreur : Aucune correspondance de modification trouvée (Ni ``channel`` ou ``message``).",
			STREAM_DESCRIPTION: "Permet de gérer la liste des stream annoncés sur le serveur.",
			STREAM_USAGE: (prefix) => `${prefix}stream [add/remove/list]`,
			STREAM_EXAMPLES: (prefix) => `${prefix}stream add lycostv\n${prefix}stream remove lycostv\n${prefix}stream list`,
			STREAM_LIST_TITLE: "Liste des streamers suivis sur le serveur",
			STREAM_NO_CHANNEL: "Salon d'annonce des stream non défini.",
			STREAM_NO_METHOD: "Veuillez préciser ce que vous voulez faire : `add`, `remove` ou `list`.",
			STREAM_NO_STREAMER_FOUND: "Je n'ai pas trouvé le streamer que vous avez demandé.",
			STREAM_NO_STREAMER_IN: "Aucun streamer n'est actuellement suivi sur le serveur.",
			STREAM_BAD_METHOD: "Je n'ai pas compris ce que vous vouliez faire. Veuillez réessayer.",
			STREAM_NO_STREAMER: "Veuillez indiquer le nom du streamer dont vous voulez ajouter ou retirer les annonces.",
			STREAM_LIMIT_REACHED: "Vous avez atteint la limite de 4 streamers.",
			STREAM_STREAMER_ALREADY_IN: "Ce streamer est déjà dans la liste des annonces de stream du serveur !",
			STREAM_STREAMER_NOT_IN: "Ce streamer n'est pas dans la liste des annonces de stream du serveur !",
			STREAM_ADDED: (displayName, name, id) => `Les prochains streams de ${displayName} (${name} - ${id}) seront désormais annoncés sur le serveur !`,
			STREAM_REMOVED: (displayName, name, id) => `Les streams de ${displayName} (${name} - ${id}) ne seront plus annoncés sur le serveur.`,
			STREAM_EMBED_TITLES: [
				"Jeu",
				"Viewers",
				"Début du stream"
			],
			STREAM_STARTEDAT: (startedat) => moment(startedat).format("LLLL").charAt(0).toUpperCase() + moment(startedat).format("LLLL").slice(1),
			STREAM_NO_GAME: "Aucun jeu défini",
			STREAM_ENDED: (streamer) => `**${streamer}** a terminé son stream.`,
			STREAM_TITLE_CHANGED: (streamer, newTitle) => `**${streamer}** a changé le titre de son live : **${newTitle}**`,
			STREAM_GAME_CHANGED: (streamer, oldGame, newGame) => `**${streamer}** a arrêté de jouer à **${oldGame}** et joue maintenant à **${newGame}** !`,
			STREAMERINFO_DESCRIPTION: "Donne des information sur une chaîne Twitch.",
			STREAMERINFO_USAGE: (prefix) => `${prefix}streamer-info [Chaîne]`,
			STREAMERINFO_EXAMPLES: (prefix) => `${prefix}streamer-info LycosTV`,
			STREAMERINFO_NO_REQUEST: "Veuillez donner le nom d'une chaîne !",
			STREAMERINFO_EMBED_TITLE: (name, type) => `Profil de ${name}${type !== "" ? type === "affiliate" ? " (Affilié Twitch)" : " (Partenaire Twitch)" : ""}`,
			STREAMERINFO_EMBED_TITLES: [
				"Vues"
			],
			GAMETOP_DESCRIPTION: "Affiche le top 10 des jeux sur Twitch",
			GAMETOP_USAGE: (prefix) => `${prefix}game-top`,
			GAMETOP_EXAMPLES: (prefix) => `${prefix}game-top`,
			GAMETOP_EMBED_TITLE: "Top 10 des jeux sur Twitch",
			GAMETOP_EMBED_ON: "sur",
			GAMETOP_EMBED_CHANNELS: "chaînes",
			CLIPCREATE_DESCRIPTION: "Crée un clip sur le live demandé.",
			CLIPCREATE_USAGE: (prefix) => `${prefix}clip-create [chaîne]`,
			CLIPCREATE_EXAMPLES: (prefix) => `${prefix}clip-create LycosTV`,
			CLIPCREATE_NO_CHANNEL: "Veuillez indiquer le nom de la chaîne en live où faire un clip.",
			CLIPCREATE_NO_LIVE: "Cette chaîne n'est pas en live !",
			CLIPCREATE_CREATED: (clip, name) => `Un nouveau clip a été crée sur la chaîne de \`${name}\` !
Vous pouvez le retrouver ici : https://clips.twitch.tv/${clip}`,
			CLIPGET_DESCRIPTION: "Trouve un clip aléatoire ou demandé.",
			CLIPGET_USAGE: (prefix) => `${prefix}clip-get [id/streamer/game/top] (Nombre)`,
			CLIPGET_EXAMPLES: (prefix) => `${prefix}clip-get id ImpartialGlutenFreePineappleWholeWheat\n${prefix}clip-get streamer LycosTV\n${prefix}clip-get game Minecraft Dungeons\n${prefix}clip-get top`,
			CLIPGET_NO_METHOD: "Veuillez indiquer la provenance du clip : `id`, `streamer`, `game` ou `top` ou `trending`",
			CLIPGET_BAD_METHOD: "Je n'ai pas compris la provenance du clip que vous avez demandé : `id`, `streamer`, `game`, `top` ou `trending`",
			CLIPGET_NO_CLIPID: "Veuillez indiquer l'ID du clip à trouver.",
			CLIPGET_ID_EMBED_TITLES: [
				"Chaîne",
				"Langue",
				"Vues",
				"Date de création"
			],
			CLIPGET_ID_CREATION_DATE: (createdat) => moment(createdat).format("LLLL").charAt(0).toUpperCase() + moment(createdat).format("LLLL").slice(1),
			CLIPGET_NO_STREAMER: "Veuillez indiquer le streamer de votre choix.",
			CLIPGET_NO_GAME: "Veuillez indiquer le jeu de votre choix",
			CLIPGET_STREAMER_NOT_FOUND: "Je n'ai pas trouvé le streamer que vous avez demandé.",
			CLIPGET_GAME_NOT_FOUND: "Je n'ai pas trouvé le jeu que vous avez demandé.",
			CLIPGET_STREAMER_NUMBER: "Le nombre de clips à afficher doit être compris entre 1 et 10 (Valeurs incluses).",
			CLIPGET_STREAMER_EMBED_TITLE: (num, user) => `${num === 1 ? "Dernier clip" : `Liste des ${num} derniers clips`} de ${user}`,
			CLIPGET_STREAMER_EMBED_CREATEDBY: "Créé par",
			CLIPGET_STREAMER_EMBED_CREATEDAT: (createdat) => `le ${moment(createdat).format("LLLL")}`,
			CLIPGET_STREAMER_EMBED_CREATEDCHANNEL: (channel) => `sur la chaîne de ${channel}`,
			CLIPGET_TOP_NO_PERIOD: "Vous devez indiquer la préiode dans laquelle vous voulez les clips : `day`, `week`, `month` ou `all`",
			CLIPGET_TOP_EMBED_VIEWS: "vues",
			CLIPGET_TOP_EMBED_CREATEDAT: (createdat) => `Créé le ${moment(createdat).format("LLLL")}`,
			CLIPGET_TOP_EMBED_TITLE: (period) => `Top 5 des clips les plus vus ${period === "day" ? "du jour" : period === "week" ? "de la semaine" : period === "month" ? "du mois" : "de tous les temps"}`,
			CLIPGET_TRENDING_EMBED_TITLE: (period) => `Top 5 des clips les plus populaires ${period === "day" ? "du jour" : period === "week" ? "de la semaine" : period === "month" ? "du mois" : "de tous les temps"}`,
			LOGS_CHANNEL_CREATE_TITLE: `Un nouveau salon a été créé !`,
			LOGS_CHANNEL_CREATE_DESC: (c) => `**${c.name}** - ${c} (${c.id})
**Créé le :** ${moment(c.createdAt.toUTCString()).format("LLLL")}${c.parent ? `\n**Dans la catégorie :** ${c.parent} (${c.parent.id})` : ``}
**Type de salon :** ${c.type}
**Position dans la catégorie :** ${c.position}
**Position dans le serveur :** ${c.rawPosition}`,
			LOGS_CHANNEL_DELETE_TITLE: "Un salon a été supprimé !",
			LOGS_CHANNEL_DELETE_DESC: (c) => `**${c.name}** - (${c.id})
**Créé le :** ${moment(c.createdAt.toUTCString()).format("LLLL")}
**Supprimé le :** ${moment(new Date()).format("LLLL")}${c.parent ? `\n**Dans la catégorie :** ${c.parent} (${c.parent.id})` : ``}
**Type de salon :** ${c.type}
**Position dans la catégorie :** ${c.position}
**Position dans le serveur :** ${c.rawPosition}`,
			LOGS_GUILD_MEMBER_ADD_TITLE: "Arrivée d'un nouveau membre !",
			LOGS_GUILD_MEMBER_ADD_DESC: (m) => `${m} - **${m.user.tag}** est arrivé sur **__${m.guild.name}__** !
Il y a désormais **${m.guild.memberCount}** personnes sur le serveur !`,
			LOGS_GUILD_MEMBER_REMOVE_TITLE: "Départ d'un membre !",
			LOGS_GUILD_MEMBER_REMOVE_DESC: (m) => `${m} - **${m.user.tag}** est parti de **__${m.guild.name}__** !
Il y a désormais **${m.guild.memberCount}** personnes sur le serveur !`,
			LOGS_CHANNEL_PINS_UPDATE_TITLE: "Modification des messages épinglés dans un salon !",
			LOGS_CHANNEL_PINS_UPDATE_DESC: (channel, time) => `**Salon :** ${channel.name} - ${channel} - ${channel.id}
**Modification à** ${moment(time).format("LLLL")}`,
			LOGS_CHANNEL_UPDATE_TITLE: "Modification d'un salon !",
			LOGS_CHANNEL_UPDATE_DESC: (oldChannel, newChannel) => `**__Ancien salon :__**

**Nom :** ${oldChannel.name}
**ID : ** ${oldChannel.id}
**Type de salon :** ${oldChannel.type}
**Sujet du salon :** ${oldChannel.topic ? `${oldChannel.topic}` : `Aucun sujet n'a été défini`}

**__Nouveau salon :__**

**Nom :** ${newChannel.name}
**ID : ** ${newChannel.id}
**Type de salon :** ${newChannel.type}
**Sujet du salon :** ${newChannel.topic ? `${newChannel.topic}` : `Aucun sujet n'a été défini`}`,
			LOGS_EMOJI_CREATE_TITLE: "Un nouvel émoji a été ajouté !",
			LOGS_EMOJI_CREATE_DESC: (emoji) => `**Nom de l'émoji :** ${emoji.name}
**ID :** ${emoji.id}
**Type :** ${emoji.animated === true ? `Animé` : `Non animé`}
**Aperçu :** ${emoji}
**Date d'ajout :** ${moment(emoji.createdAt.toUTCString()).format("LLLL")}
**Identifier :** ${emoji.identifier}
**URL :** ${emoji.url}`,
			LOGS_EMOJI_DELETE_TITLE: "Un émoji a été supprimé !",
			LOGS_EMOJI_DELETE_DESC: (emoji) => `**Nom de l'émoji :** ${emoji.name}
**ID :** ${emoji.id}
**Type :** ${emoji.animated === true ? `Animé` : `Non animé`}
**Date d'ajout :** ${moment(emoji.createdAt.toUTCString()).format("LLLL")}
**Date de suppression :** ${moment(new Date()).format("LLLL")}
**Identifier :** ${emoji.identifier}
**URL :** ${emoji.url}`,
			LOGS_EMOJI_UPDATE_TITLE: "Modification d'un émoji !",
			LOGS_EMOJI_UPDATE_DESC: (oldEmoji, newEmoji) => `**__Ancien émoji :__**

**Nom :** ${oldEmoji.name}
**ID : ** ${oldEmoji.id}
**Date d'ajout :** ${moment(oldEmoji.createdAt.toUTCString()).format("LLLL")}
**Identifier :** ${oldEmoji.identifier}
**URL :** ${oldEmoji.url}

**__Nouvel émoji :__**

**Nom :** ${newEmoji.name}
**ID : ** ${newEmoji.id}
**Aperçu :** ${newEmoji}
**Date d'ajout :** ${moment(newEmoji.createdAt.toUTCString()).format("LLLL")}
**Date de modification :** ${moment(new Date()).format("LLLL")}
**Identifier :** ${newEmoji.identifier}
**URL :** ${newEmoji.url}`,
			LOGS_GUILD_BAN_ADD_TITLE: "Quelqu'un a été banni du serveur !",
			LOGS_GUILD_BAN_ADD_DESC: (user) => `**Pseudo :** ${user.username}
**ID :** ${user.id}
**Bot :** ${user.bot ? "Affirmatif" : "Négatif, c'est un humain (Ou un selfbot)"}
**Création du compte :** ${moment(user.createdAt.toUTCString()).format("LLLL")}
**Date du banissement :** ${moment(new Date()).format("LLLL")}`,
			LOGS_GUILD_BAN_REMOVE_TITLE: "Quelqu'un a été débanni du serveur !",
			LOGS_GUILD_BAN_REMOVE_DESC: (user) => `**Pseudo :** ${user.username}
**ID :** ${user.id}
**Bot :** ${user.bot ? "Affirmatif" : "Négatif, c'est un humain (Ou un selfbot)"}
**Création du compte :** ${moment(user.createdAt.toUTCString()).format("LLLL")}
**Date du débanissement :** ${moment(new Date()).format("LLLL")}`,
			LOGS_GUILD_CREATE_TITLE: (guild) => `Lycos a été ajouté sur ${guild.name} !`,
			LOGS_GUILD_CREATE_DESC: (guild, vl, r) => `**ID :** ${guild.id}
**Membres :** ${guild.members.cache.filter(m => !m.user.bot).size}
**Propriétaire :** ${guild.owner.user.tag} - ${guild.ownerID}
**Créé le :** ${moment(guild.createdAt.toUTCString()).format("LLLL")}
**Niveau de vérification :** ${vl}
**Localisation du serveur :** ${r}`,
			LOGS_GUILD_CREATE_FOOTER: (guilds) => ` - Actuellement sur ${guilds} serveurs`,
			LOGS_GUILD_DELETE_TITLE: (guild) => `Lycos a été enlevé de ${guild.name} !`,
			LOGS_GUILD_DELETE_DESC: (guild, vl, r) => `**ID :** ${guild.id}
**Membres :** ${guild.members.cache.filter(m => !m.user.bot).size}
**Propriétaire :** ${guild.owner.user.tag} - ${guild.ownerID}
**Créé le :** ${moment(guild.createdAt.toUTCString()).format("LLLL")}
**Niveau de vérification :** ${vl}
**Localisation du serveur :** ${r}`,
			LOGS_GUILD_DELETE_FOOTER: (guilds) => ` - Actuellement sur ${guilds} serveurs`,
			LOGS_GUILD_MEMBER_CHUNK_TITLE: "Tout un régiment de membres viennent d'arriver d'un même serveur !",
			LOGS_GUILD_MEMBER_CHUNK_DESC: (members, guild) => ``,
			LOGS_GUILD_MEMBER_UPDATE_TITLE: "Un membre du serveur a subi des modifications !",
			LOGS_GUILD_MEMBER_UPDATE_DESC: (oldMember, newMember) => `**__Avant modifications du ${moment(new Date()).format("LLLL")} :__**
			
**Nom :** ${oldMember.user.tag}
**ID :** ${oldMember.id}
**Création du compte :** ${moment(oldMember.user.createdAt.toUTCString()).format("LLLL")}
**A rejoint le serveur le :** ${moment(oldMember.joinedAt.toUTCString()).format("LLLL")}
**Bannissable** : ${oldMember.bannable === true ? "Oui" : "Non"}
**Expulsable :** ${oldMember.kickable === true ? "Oui" : "Non"}
**Surnom :** ${oldMember.nickname ? `${oldMember.displayName}` : "Aucun surnom"}
**Avatar :** ${oldMember.user.displayAvatarURL({ format: "png", dynamic: true })}
**Rôles :** ${oldMember.roles.cache.size > 10 ? `${oldMember.roles.cache.map((r) => r).slice(0, 9).join(", ")} et ${oldMember.roles.cache.size - 10} autres rôles.` : (oldMember.roles.cache.size < 1) ? `Aucun rôle` : `${oldMember.roles.cache.map((r) => r).join(", ")}`}

**__Après modifications du ${moment(new Date()).format("LLLL")} :__**
			
**Nom :** ${newMember.user.tag}
**ID :** ${newMember.id}
**Création du compte :** ${moment(newMember.user.createdAt.toUTCString()).format("LLLL")}
**A rejoint le serveur le :** ${moment(newMember.joinedAt.toUTCString()).format("LLLL")}
**Bannissable** : ${newMember.bannable === true ? "Oui" : "Non"}
**Expulsable :** ${newMember.kickable === true ? "Oui" : "Non"}
**Surnom :** ${newMember.nickname ? `${newMember.displayName}` : "Aucun surnom"}
**Avatar :** ${newMember.user.displayAvatarURL({ format: "png", dynamic: true })}
**Rôles :** ${newMember.roles.cache.size > 10 ? `${newMember.roles.cache.map((r) => r).slice(0, 9).join(", ")} et ${newMember.roles.cache.size - 10} autres rôles.` : (newMember.roles.cache.size < 1) ? `Aucun rôle` : `${newMember.roles.cache.map((r) => r).join(", ")}`}`,
			LOGS_MESSAGE_DELETE_DELETED_BY: "**Supprimé par :**",
			LOGS_MESSAGE_DELETE_DELETED_BY_UNKNOWN: "Je n'ai pas trouvé qui a supprimé le message, désolé...",
			LOGS_MESSAGE_DELETE_TITLE: "Un message a été supprimé !",
			LOGS_MESSAGE_DELETE_DESC: (message, deletedBy) => `**Auteur du message :** ${message.author.tag} - ${message.author} - ${message.author.id}
${deletedBy}
**Message supprimé dans :** ${message.channel.name} - ${message.channel} - ${message.channel.id}
**Message supprimé le :** ${moment(new Date()).format("LLLL")}
**Contenu du message :** \`\`${message.content.length > 150 ? message.content.substring(0, 150) + "..." : message.content}\`\``,
			LOGS_MESSAGE_DELETE_BULK_TITLE: "Plusieurs messages ont été supprimés !",
			LOGS_MESSAGE_DELETE_BULK_DESC: () => ``,
			LOGS_MESSAGE_UPDATE_TITLE: "Un message a été modifié !",
			LOGS_MESSAGE_UPDATE_DESC: (oldMessage, newMessage) => `**Auteur du message :** ${newMessage.author.tag} - ${newMessage.author} - ${newMessage.author.id}
**Salon :** ${newMessage.channel.name} - ${newMessage.channel} - ${newMessage.channel.id}
**Ancien message :** \`\`${oldMessage.content.length > 150 ? oldMessage.content.substring(0, 150) + "..." : oldMessage.content}\`\`
**Nouveau message :** \`\`${newMessage.content.length > 150 ? newMessage.content.substring(0, 150) + "..." : newMessage.content}\`\``,
			LOGS_ROLE_CREATE_TITLE: "Un nouveau rôle a été créé !",
			LOGS_ROLE_CREATE_DESC: (role) => `**Nom du rôle :** ${role.name} - ${role}
**ID :** ${role.id}
**Créé le :** ${moment(role.createdAt.toUTCString()).format("LLLL")}`,
			LOGS_ROLE_DELETE_TITLE: "Un rôle a été supprimé !",
			LOGS_ROLE_DELETE_DESC: (role) => `**Nom du rôle :** ${role.name}
**ID :** ${role.id}
**Créé le :** ${moment(role.createdAt.toUTCString()).format("LLLL")}
**Supprimé le :** ${moment(new Date()).format("LLLL")}`,
			LOGS_ROLE_UPDATE_TITLE: "Un rôle a été modifié !",
			LOGS_ROLE_UPDATE_DESC: (oldRole, newRole) => `**__Avant modifications du ${moment(new Date()).format("LLLL")} :__**
			
**Nom du rôle :** ${oldRole.name}
**ID :** ${oldRole.id}
**Créé le :** ${moment(oldRole.createdAt.toUTCString()).format("LLLL")}
**Position :** ${oldRole.position}
**Couleur :** ${oldRole.hexColor}
**Apparaît séparemment :** ${oldRole.hoist ? `Oui` : `Non`}
**Mentionnable :** ${oldRole.mentionable ? `Oui` : `Non`}
**Permissions :** ${oldRole.permissions.toArray().length > 10 ? `${oldRole.permissions.toArray().map((r) => r).slice(0, 9).join(", ")} et ${oldRole.permissions.toArray().length - 10} autres permissions.` : (oldRole.permissions.toArray().length < 1) ? `Aucune permission` : `${oldRole.permissions.toArray().map((r) => r).join(", ")}`}

**__Après modifications du ${moment(new Date()).format("LLLL")} :__**
			
**Nom du rôle :** ${newRole.name} - ${newRole}
**ID :** ${newRole.id}
**Créé le :** ${moment(newRole.createdAt.toUTCString()).format("LLLL")}
**Position :** ${newRole.position}
**Couleur :** ${newRole.hexColor}
**Apparaît séparemment :** ${newRole.hoist ? `Oui` : `Non`}
**Mentionnable :** ${newRole.mentionable ? `Oui` : `Non`}
**Permissions :** ${newRole.permissions.toArray().length > 10 ? `${newRole.permissions.toArray().map((r) => r).slice(0, 9).join(", ")} et ${newRole.permissions.toArray().length - 10} autres permissions.` : (newRole.permissions.toArray().length < 1) ? `Aucune permission` : `${newRole.permissions.toArray().map((r) => r).join(", ")}`}`,
			LOGS_WEBHOOK_UPDATE_TITLE: `Un webhook a été modifié !`,
			LOGS_WEBHOOK_UPDATE_DESC: (channel) => `**Nom du salon :** ${channel.name} - ${channel}
**ID :** ${channel.id}`,
		};
		function date(date1) {
			let d = date1.split("-");
			let an = d[0];
			let mois = d[1];
			let jour = d[2];
			return `${jour}/${mois}/${an}`;
		}
	}

	/**
	 * The method to get language strings
	 * @param {string} term The string or function to look up
	 * @param {...*} args Any arguments to pass to the lookup
	 * @returns {string|Function}
	 */
	get(term, ...args) {
		const value = this.language[term];
		if (typeof value === "function") {
			return value(...args);
		}
		else {
			return value;
		}
	}
};