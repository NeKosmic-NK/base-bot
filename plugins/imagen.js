let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let handler  = async (m, { conn, args, text }) => {
if (!text) return m.reply('*[β] πΈπ½πΆππ΄ππ΄ π΄π» ππ΄πππΎ πππ΄ πππΈπ΄ππ° π±πππ²π°π*')
let results = await gis(text) || []
let { url, width, height } = pickRandom(results) || {}
if (!url) return m.reply('*[β] ππ΄πππΈπ³πΎπ π²π°πΈπ³πΎ, πΈπ½ππ΄π½ππ΄ πΌπ°π ππ°ππ³π΄*')
conn.sendFile(m.chat, url, 'gimage', `
π *ππ΄πππ»ππ°π³πΎ π³π΄:* ${text}
π *π±ππ²π°π³πΎπ:* Google
`.trim(), m)}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['general']
handler.command = /^(gimage|image|imagen)$/i
module.exports = handler
function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]}

