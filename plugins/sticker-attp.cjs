var handler = async (m, {
	conn,
	text
}) => {
	var teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
	conn.sendFile(m.chat, global.API('xteam', '/attp', {
		file: '',
		text: teks
	}), 'attp.webp', '', m, false, {
		asSticker: true
	})
}
handler.help = ['attp *teks*']
handler.tags = ['sticker']

handler.command = /^attp$/i

module.exports = handler