let { execSync } = require('child_process')
let handler = async (m, { conn, text }) => {
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
require('fs').readdirSync('plugins').map(v=>global.reload('', v))
conn.reply(m.chat, stdout.toString(), m)
}}
handler.help = ['update']
handler.tags = ['host']
handler.command = /^update$/i
handler.rowner = true
handler.fail = null
module.exports = handler

