const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
    name: 'patch-note',
    aliases: [],
    run: async (client, message, args, prefix) => {
const embed = new Discord.MessageEmbed()
.setTitle("**Patch Note du 11/08 :**")
.setDescription(`Ajout de la Commande : \`.set-bio\` : permet de changé le message en **statut** du bot,

\`.set-statut\` : permet de mettre __un rôle__ si on à par exemple : \`discord.gg/elexyr22\` dans __notre profil__ ! *[Les bios ne marche pas car pas option discord]*

\`.gban\` : Permet de **blacklist** une personne, elle sera __auto ban__ à sont prochain message ou si elle rejoindre un **serveur en commun** avec le bot.

Une commande **Greet** *(Ghost Ping de Join)* est en cours !

La V2 arrive et ça va être le feu !

Cordialement
Elexyr X Forwen !`)
.setColor("RANDOM")
.setImage("https://i.imgur.com/wM7CCb0.gif")
message.reply({embeds: [embed]})
    }
}