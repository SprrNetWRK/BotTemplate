const Command = require("../../base/Command.js");

class Morse extends Command {
	constructor(client) {
		super(client, {
			name: "morse",
			description: (language) => language.get("MORSE_DESCRIPTION"),
			usage: (language, prefix) => language.get("MORSE_USAGE", prefix),
			examples: (language, prefix) => language.get("MORSE_EXAMPLES", prefix),
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			permLevel: "User",
			botPermissions: ["SEND_MESSAGES"],
			aliases: [],
			nsfw: false,
			adminOnly: false,
			cooldown: 2000,
		});
	}

	async run(message, args) {
        try {
            let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
            morse = ".-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
            text = args.slice(0).join(" ").toUpperCase();
            if(!text){
                message.channel.send(message.language.get("MORSE_NO_TEXT")+"\n"+message.language.get("COMMAND_CANCEL"));
                text = await message.bot.functions.awaitResponse(message)
                text = text.toUpperCase();
            }
            if (text.startsWith(message.prefix)) return;
            if (text === "stop" || text === "cancel") return message.channel.send(message.language.get("COMMAND_CANCELLED"));
        while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
            text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
        }
        if (text.startsWith("-")) {
            text = text.split(" ");
            let length = text.length;
            for (let i = 0; i < length; i++) {
                text[i] = alpha[morse.indexOf(text[i])];
            }
            text = text.join("");
        } else {
            text = text.split("");
            let length = text.length;
            for (let i = 0; i < length; i++) {
                text [i] = morse[alpha.indexOf(text[i])];
            }
            text = text.join(" ");
        }
        if (!text || text === " ") return message.channel.send(message.language.get("MORSE_CANT_TRANSLATE"));
        if (!text.includes(" ") && text.length >= 2000) return message.channel.send(message.language.get("MORSE_TRANSLATE_ESPACE"));
        return message.channel.send({
            split: { 
                char: " ",
            },
            content: text,
        });
        } catch (error) {
			console.error(error);
			return message.channel.send(message.language.get("ERROR", error));
        }
    }
}

module.exports = Morse;
